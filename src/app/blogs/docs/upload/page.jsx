"use client";
import { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";
import axios from "axios";

export default function UploadForm() {
  const [formData, setFormData] = useState({
    chapterName: "",
    topicName: "",
    markdownUrl: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (uploadedFileUrl) => {
    setFormData((prev) => ({ ...prev, markdownUrl: uploadedFileUrl }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.chapterName || !formData.topicName || !formData.markdownUrl) {
      alert("Please complete all fields and upload the file.");
      return;
    }

    setLoading(true);
    console.log("Submitting form data:", formData);

    // Example backend call
    try {
      const response = await axios.post('/api/docs', formData);
      console.log("Backend response:", response.data);
      setLoading(false);
      setFormData({
        chapterName: "",
        topicName: "",
        markdownUrl: "",
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="border border-white  p-8 shadow-md rounded w-full"
        style={{ width: "83.3vw " }}
      >
        <h2 className="text-3xl font-bold mb-4 text-black">
          Upload Chapter Info
        </h2>

        <div className="mb-4">
          <label
            htmlFor="chapterName"
            className="block text-black font-bold mb-2"
          >
            Chapter Name
          </label>
          <input
            type="text"
            id="chapterName"
            name="chapterName"
            value={formData.chapterName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 text-black focus:ring-blue-500 "
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="topicName"
            className="block text-black font-bold mb-2"
          >
            Topic Name
          </label>
          <input
            type="text"
            id="topicName"
            name="topicName"
            value={formData.topicName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 text-black focus:ring-blue-500 "
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="markdownFile"
            className="block text-black font-bold mb-2"
          >
            Markdown File
          </label>

          <CldUploadWidget uploadPreset="docs_files">
            {({ cloudinary, widget, open, results }) => {
              if (results) {
                const uploadedFileInfo =
                  results?.info?.files?.[0]?.uploadInfo?.secure_url ?? undefined;
                console.log("Uploaded file:", uploadedFileInfo);
                if (uploadedFileInfo) {
                  handleFileUpload(uploadedFileInfo);
                  widget.close(); // Set markdownUrl in formData
                }
              }
              return (
                <button
                  type="button"
                  className="w-full bg-black text-white py-2 rounded"
                  onClick={() => open()}
                >
                  Upload Markdown File
                </button>
              );
            }}
          </CldUploadWidget>
        </div>

        <button
          type="submit"
          className={`w-full bg-black text-white py-2 rounded`}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
