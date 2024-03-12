import ConnectDB from "@/lib/db";
import Order from "@/lib/models/orders";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    // Ensure database connection before query
    await ConnectDB();
    const { searchParams } = new URL(req.url)
    const placedBy = searchParams.get('acceptedBy')
    
    if (!acceptedBy) {
        return NextResponse.json({ error: "AcceptedBy parameter is required" });
      }
    // Use async/await directly for cleaner syntax
    const orders = await Order.find({placedBy})

    return NextResponse.json({ orders }); // Explicit status code for success
  } catch (error) {
    console.error(error); // Log the error for debugging
    return NextResponse.json({ error: error }); // More specific error message
  }
}
