import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
    },
    markdownUrl: {
        type: String,
        required: [true, "Markdown URL is required"],
    },
    thumbnailUrl: {
        type: String,
        required: [true, "Thumbnail URL is required"],
    },
    shortDescription: {
        type: String,
        required: [true, "Short description is required"],
    },
}, { timestamps: true });

export default mongoose.models.blogs || mongoose.model("blogs", blogSchema);
