import dbConnect from "@/lib/dbConnect";
import blogs from "@/models/blog.model";
import { NextRequest, NextResponse } from "next/server";
dbConnect();

export async function GET(req:NextRequest) {
    try {
        const blogId = req.nextUrl.searchParams.get('id');
        const data = await blogs.findById(blogId);
        return NextResponse.json(data);
    } catch (error) {
        console.log(error);
        return NextResponse.json({message:"Internal Server Error, cannot fetch blogs."},{status:500});
    }
    
}