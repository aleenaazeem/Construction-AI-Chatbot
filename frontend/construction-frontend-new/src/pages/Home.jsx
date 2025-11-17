import { useState } from "react";
import AskForm from "../components/AskForm";
import ResponseCard from "../components/ResponseCard";
import UploadBox from "../components/UploadBox";

export default function Home() {
  const [answer, setAnswer] = useState("");

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="flex flex-col items-center px-4 pt-10 pb-16">
        {/* Header Section */}
        <section className="w-full max-w-3xl text-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-800 mb-3">
            Ask a Construction Question
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            This tool uses your construction documents and an AI model to
            generate practical answers. Enter a question below to get started.
          </p>
        </section>

        {/* Upload Section */}
        <UploadBox />

        {/* Ask Form */}
        <section className="w-full max-w-3xl mt-10">
          <AskForm setAnswer={setAnswer} />
        </section>

        {/* Answer */}
        <section className="w-full max-w-3xl">
          <ResponseCard answer={answer} />
        </section>

        {/* About Section */}
        <section
          id="about"
          className="w-full max-w-3xl mt-16 text-left text-sm text-gray-600"
        >
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            About this project
          </h2>
          <p>
            This Construction AI Q&A system uses a Retrieval-Augmented
            Generation (RAG) backend built with FastAPI and a vector database.
            It retrieves relevant construction documents and generates answers
            tailored to engineers, project managers, and field teams.
          </p>
        </section>

        {/* Team Section */}
        <section
          id="team"
          className="w-full max-w-3xl mt-8 text-left text-sm text-gray-600"
        >
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Team
          </h2>
          <p>
            Built as part of an academic project to explore AI-assisted decision
            support in construction management.
          </p>
        </section>
      </main>
    </div>
  );
}
