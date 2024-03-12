import { NextResponse } from "next/server";

import ConnectDB from "@/lib/db";
import Order from "@/lib/models/orders";
export async function POST(req) {
    await ConnectDB();
    const data=await req.json();
    const { title, description, placedBy, isAccepted, acceptedBy } = data;
    if (!title || !placedBy || (isAccepted && !acceptedBy)) {
        console.log(isAccepted)
        return NextResponse.json({ message: 'Missing required fields in order data.' });
    }

    try {
        const newOrder=await Order.create({ title, description, placedBy, isAccepted, acceptedBy });
        return NextResponse.json({status: newOrder})
    } catch (error) {
        return NextResponse.json({error:error})
        
    }

}

