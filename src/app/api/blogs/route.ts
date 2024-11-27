import dbConnect from "@/lib/dbConnect";
import blogs from "../../../models/blog.model.js";
import { NextRequest,NextResponse } from "next/server";

dbConnect();

export async function GET(req:NextRequest) {
    try {
        const data = await blogs.find();
        return NextResponse.json(data);
    } catch (error) {
        console.log(error);
        return NextResponse.json({message:"Internal Server Error, cannot fetch blogs."},{status:500});
    }
}

export async function POST(req:NextRequest) {
    try {
        const data = await blogs.create(req.body);
        return NextResponse.json(data);
    } catch (error) {
        console.log(error);
        return NextResponse.json({message:"Internal Server Error, cannot create blog."},{status:500});
    }
}