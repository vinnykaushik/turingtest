from flask import Flask, request, jsonify
import requests
import os
import random
from dotenv import load_dotenv
from supabase import create_client, Client
import google.generativeai as genai

load_dotenv()

url: str = os.getenv("SUPABASE_URL")
key: str = os.getenv("SUPABASE_KEY")
supabase: Client = create_client(url, key)

gemini_key = os.getenv("GEMINI_API_KEY")


app = Flask("Turing")  # figure out if this is right


def fetch_question_content(question_id):
    """function

    Args:
        question_id (int): the id of the question to fetch

    Returns:
        json: a json of the character limit for a response and the question content
    """
    
    response = (
        supabase.table("Questions")
        .select("char_limit,question_content")
        .eq("id", question_id)
        .execute()
    )
    return response.data[0]


def fetch_human_response(question_id):
    """function

    Args:
        question_id (int): the id of the question to fetch

    Returns:
        String: a human response to the given question, selected randomly from the database
    """
    
    responses = (
        supabase.table("UserResponse")
        .select("response_content")
        .eq("question_id", question_id)
        .execute()
    )
    data = responses.data
    return random.choice(data)['response_content']

def fetch_ai_response(question_id):
    """function

    Args:
        question_id (int): the id of the question to fetch

    Returns:
        String: the AI response to the question, within a certain character count. uses the Gemini API
    """
    starting_prompt = "Answer the following question in a manner as humanlike as possible. Don't be afraid to avoid proper grammar or capitalization. Answer in the folliowing amount of characters: "

    genai.configure(api_key=gemini_key)
    model = genai.GenerativeModel("gemini-1.5-flash")
    question = fetch_question_content(question_id)
    
    response = model.generate_content(
        starting_prompt + str(question["char_limit"]) + question["question_content"] 
    )
    return response.text