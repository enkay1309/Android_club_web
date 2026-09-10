import {NextResponse} from "next/server";
import {connectDB } from "@/lib/mongodb";
import Member from "@/models/Member";

export async function GET() {
try {
    await connectDB() ;
    const members = await Member.find();
    return NextResponse.json(members);
  } 
catch (error) {
    console.error("DATABASE ERROR:", error);
    return NextResponse.json(
      { error: String(error)},
      { status: 500 }
    );
  }
}

export async function POST(request: Request){
    try{
        await connectDB();
        const body= await request.json();
        const member= await Member.create(body);
        return NextResponse.json(member, {status:201});
    }
    catch(error){
        console.error("DATABASE ERROR:", error);
        return NextResponse.json(
            {error: String(error)},
            {status:500}
        );
    }
}