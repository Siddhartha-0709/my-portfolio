"use client";
import axios from "axios";
import { useParams, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import hljs from "highlight.js";

function Page() {
    const searchParams = useSearchParams();
    const { id } = useParams();
    const topicName = searchParams.get("topicName");
    const [markdownContent, setMarkdownContent] = useState("");
    const [error, setError] = useState(false);

    const getDoc = async () => {
        try {
            const response = await axios.get(`/api/docs?id=${id}&topicName=${topicName}`);
            const { markdownUrl } = response.data;

            if (markdownUrl) {
                const markdownResponse = await axios.get(markdownUrl);
                setMarkdownContent(markdownResponse.data);
            } else {
                throw new Error("Markdown URL not found in response.");
            }
        } catch (err) {
            console.error(err);
            setError(true);
        }
    };

    useEffect(() => {
        getDoc();
    }, []);

    useEffect(() => {
        if (markdownContent) {
            hljs.highlightAll();
        }
    }, [markdownContent]); // Re-run when markdownContent changes

    return (
        <>
            <div>
                <div className="prose prose-lg bg-white p-4 shadow-sm">
                    {error ? (
                        <p className="text-red-500">Failed to load markdown content.</p>
                    ) : markdownContent ? (
                        <div
                            className="prose prose-lg min-w-full bg-white p-4 rounded-md shadow-sm"
                        >
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownContent}</ReactMarkdown>
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default Page;
