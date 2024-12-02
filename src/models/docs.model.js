import mongoose from "mongoose";
const docsSchema = new mongoose.Schema({
    chapterName:{
        type: String,
        required: [true, "Chapter name is required"],
    },
    topicName: {
        type: String,
        required: [true, "Topic name is required"],
    },
    markdownUrl:{
        type: String,
        required: [true, "Markdown link is required"],
    }
})

export default mongoose.models.docs || mongoose.model("docs", docsSchema);