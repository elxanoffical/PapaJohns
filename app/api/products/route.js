import { verifyJWT } from "@/lib/auth";
import { connectDB } from "@/lib/db";
import Product from "@/lib/models/Product";
import Admin from "@/lib/models/Admin";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        await connectDB()

        // CHECK TOKEN
        const token = request.cookies.get("token")?.value;
        if (!token) {
            return NextResponse.json({ mes: "aut error" }, { status: 401 });
        }

         const { payload } = await verifyJWT(token);
         const findAdmin = await Admin.findOne({ _id: payload._id })
         if(!findAdmin)
            return NextResponse.json({ mes: "aut error" }, { status: 401 });

        // take body
        const body = await request.json()

        // create User model with body
        const productModel = await new Product({
            title: body.title,
            subTitle: body.subTitle
        })
        await productModel.save()

        return NextResponse.json({ mes: "Product added successfully!" }, { status: 201 })
    } catch (error) {
        if(error.code==="ERR_JWS_INVALID")
            return NextResponse.json({ mes: "aut error" }, { status: 401 });

        return NextResponse.json({ mes: error.message }, { status: 500 });
    }
}