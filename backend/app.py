from flask import Flask, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv
from services.supabase_service import SupabaseService
from services.gemini_service import GeminiService

load_dotenv()


def create_app():
    app = Flask(__name__)
    CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

    # Initialize Supabase and AI services
    supabase_service = SupabaseService(
        os.getenv("SUPABASE_URL"), os.getenv("SUPABASE_KEY")
    )
    ai_service = GeminiService(os.getenv("GEMINI_API_KEY"))

    @app.route("/questions", methods=["GET"])
    def get_questions():
        """
        Endpoint to fetch 10 random questions, split in half and grouped into vote and answer.
        Vote: Questions for the end user to vote on.
        Answer: questions for the end user to answer.


        """
        try:
            # Fetch 10 questions from Supabase
            questions = supabase_service.fetch_questions(limit=10)
            if not questions:
                return jsonify({"error": "No questions found"}), 404

            group_1 = questions[:5]
            group_2 = questions[5:]

            vote = []
            for question in group_1:
                question_id = question["id"]
                char_limit = question["char_limit"]
                question_content = question["question_content"]

                human_response = supabase_service.fetch_human_response(question_id)

                ai_response = ai_service.fetch_ai_response(
                    char_limit,
                    question_content,
                )

                vote.append(
                    {
                        "question_id": question_id,
                        "question_content": question_content,
                        "char_limit": char_limit,
                        "human_response": human_response,
                        "ai_response": ai_response,
                    }
                )

            answer = []
            for question in group_2:
                question_id = question["id"]
                char_limit = question["char_limit"]
                question_content = question["question_content"]

                answer.append(
                    {
                        "question_id": question_id,
                        "question_content": question_content,
                        "char_limit": char_limit,
                    }
                )

            return jsonify(
                {
                    "vote": vote,
                    "answer": answer,
                }
            )
        except Exception as e:
            print(f"Error fetching questions: {e}")
            return jsonify({"error": "An error occurred while fetching questions"}), 500

    return app


if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)
