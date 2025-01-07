import google.generativeai as genai


class GeminiService:
    def __init__(self, api_key: str):
        """
        Initializes the Gemini Service.

        Args:
            api_key (str): The API key for Google Gemini.
        """
        genai.configure(api_key=api_key)
        self.model = genai.GenerativeModel("gemini-1.5-flash")

    def fetch_ai_response(self, char_limit: int, question_content: str):
        """
        Generates an AI response for a given question within a character limit.

        Args:
            char_limit (int): The character limit for the AI's response.
            question_content (str): The content of the question.

        Returns:
            str: The AI-generated response text.
        """
        try:
            starting_prompt = (
                "Answer the following question as a human would. "
                "You're a person; act as such. "
                "Don't be afraid to avoid proper grammar or capitalization. "
                "Answer in less than the following amount of characters: "
            )
            response = self.model.generate_content(
                starting_prompt + f"{char_limit}, {question_content}"
            )
            return response.text

        except Exception as e:
            print(f"Error generating AI response: {e}")
            return "We ran into a bit of trouble! Please try again."
