import { verifyJWT } from "@/lib/auth";
import { connectDB } from "@/lib/db";
import User from "@/lib/models/Admin";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        await connectDB()
        const token = request.cookies.get("token")?.value;
        if (!token) {
            return NextResponse.json({ mes: "aut error" }, { status: 401 });
        }

        const { payload } = await verifyJWT(token);
        const findUser = await User.findOne({ _id: payload._id })

        return NextResponse.json({ data: findUser }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ mes: error.message }, { status: 500 });
    }
}