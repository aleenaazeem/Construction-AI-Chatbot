import { useState } from "react";
import { ClipLoader } from "react-spinners";
import askQuestion from "../api/ask";

export default function AskForm({ setAnswer }) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!input.trim()) {
      setErrorMsg("Please enter a question.");
      return;
    }

    setErrorMsg("");
    setLoading(true);

    try {
      const response = await askQuestion(input.trim());
      setAnswer(response);
    } catch (err) {
      console.error(err);
      setErrorMsg("Failed to get an answer. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl flex flex-col gap-3"
    >
      <label className="text-sm font-medium text-gray-700">
        Your question
      </label>

      <textarea
        rows={3}
        className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
        placeholder="Ask a construction-related question (e.g., 'What is the standard concrete curing time?')"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {errorMsg && (
        <p className="text-sm text-red-600">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-medium py-2.5 px-4 rounded-lg hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading && <ClipLoader size={18} />}
        <span>{loading ? "Getting answer..." : "Ask"}</span>
      </button>
    </form>
  );
}
