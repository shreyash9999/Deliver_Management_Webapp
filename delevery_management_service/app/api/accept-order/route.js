import ConnectDB from "@/lib/db";
import { NextResponse } from "next/server";

export default async function UPDATE(req){
    const data=await req.json();
    const {acceptedBy,orderId}=data;
    await ConnectDB();
    

    return NextResponse.json({message:"API to accept the order"})
}