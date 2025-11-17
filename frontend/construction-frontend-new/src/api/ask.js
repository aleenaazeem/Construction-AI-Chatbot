import axios from "axios";

// Your backend routes start with /api
const API_BASE_URL = "http://127.0.0.1:8000/api";

const askQuestion = async (question) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/ask`, {
      question: question,
    });

    return response.data.answer || "No answer returned from backend.";
  } catch (error) {
    console.error("Error calling backend /api/ask:", error);
    throw new Error("Something went wrong while contacting the server.");
  }
};

export default askQuestion;
