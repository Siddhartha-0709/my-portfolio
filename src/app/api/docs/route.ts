import docsModel from "../../../models/docs.model";
import dbConnect from "@/lib/dbConnect";
import { NextRequest,NextResponse } from "next/server";

dbConnect();
export async function POST(req:NextRequest) {
    try {
        // Parse the request body
        const body = await req.json();
        console.log("Received Payload:", body);
        const data = await docsModel.create(body);
        console.log("Saved Data:", data);
        return NextResponse.json({ message: "Payload received successfully!", body });
    } catch (error) {
        console.error("Error parsing payload:", error);
        return NextResponse.json({ error: "Failed to parse payload" }, { status: 400 });
    }
}

export async function GET(req:NextRequest) {
    try {
        const searchParams = req.nextUrl.searchParams;
        // console.log(searchParams);
        const chapterName = searchParams.get('id');
        const topicName = searchParams.get('topicName');
        console.log('chapterName',chapterName);
        console.log('topicName',topicName);
        
        const data = await docsModel.findOne({chapterName,topicName});
        return NextResponse.json(data);
    } catch (error) {
        console.log(error);
        return NextResponse.json({message:"Internal Server Error, cannot fetch docs."},{status:500});
    }
}