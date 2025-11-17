import { useState } from "react";
import { uploadFile } from "../api/upload";

export default function UploadBox() {
  const [status, setStatus] = useState("");

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setStatus("Uploading...");

    try {
      const msg = await uploadFile(file);
      setStatus(msg);
    } catch (err) {
      setStatus("Upload failed.");
    }
  };

  return (
    <div className="max-w-xl w-full bg-white border border-gray-200 rounded-lg shadow-sm p-4 mt-6">
      <label className="block mb-2 text-gray-700 font-medium">
        Upload Construction Documents
      </label>

      <input
        type="file"
        accept=".pdf,.txt,.docx"
        onChange={handleUpload}
        className="p-2 w-full border border-gray-300 rounded-lg cursor-pointer"
      />

      {status && (
        <p className="mt-3 text-sm text-gray-600">
          {status}
        </p>
      )}
    </div>
  );
}
