import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api";

export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await axios.post(`${API_BASE_URL}/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data.message || "Upload successful.";
  } catch (err) {
    console.error("Upload error:", err);
    throw new Error("Failed to upload file.");
  }
};
