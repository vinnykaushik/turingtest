import random
from supabase import create_client, Client


class SupabaseService:
    def __init__(self, url: str, key: str):
        """
        Initializes the Supabase client with the given URL and API key.

        Args:
            url (str): The Supabase project URL.
            key (str): The Supabase API key.
        """
        self.client: Client = create_client(url, key)

    def fetch_questions(self, limit: int):
        """
        Fetches the specified number of questions from the db.

        Args:
            limit (int): The number of questions to fetch.

        Returns:
            list[dict]: A list of dictionaries containing 'id', 'char_limit', and 'question_content'.
        """
        try:
            response = (
                self.client.table("Questions")
                .select("id,char_limit,question_content")
                
                .limit(limit)
                .execute()
            )
            return response.data if response.data else []
        except Exception as e:
            print(f"error fetching questions: {e}")
            return []

    def fetch_human_response(self, question_id: int):
        """
        Fetches a random human response for a specific question.

        Args:
            question_id (int): the question to fetch for

        Returns:
            str: A random human response
        """
        try:
            responses = (
                self.client.table("UserResponse")
                .select("response_content")
                .eq("question_id", question_id)
                .execute()
            )
            if responses.data:
                return random.choice(responses.data)["response_content"]
            return None
        except Exception as e:
            print(f"error fetching human response: {e}")
            return None