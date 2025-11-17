import ReactMarkdown from "react-markdown";

export default function ResponseCard({ answer }) {
  if (!answer) return null;

  return (
    <div className="mt-8 w-full max-w-xl bg-white border border-gray-200 rounded-lg shadow-sm p-5">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">
        Answer
      </h3>

      <div className="prose prose-sm max-w-none text-gray-800">
        <ReactMarkdown>{answer}</ReactMarkdown>
      </div>
    </div>
  );
}
