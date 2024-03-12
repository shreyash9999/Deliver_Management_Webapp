import { NextResponse } from "next/server";

import ConnectDB from "@/lib/db";
import Order from "@/lib/models/orders";

export async function PUT(req) {
  await ConnectDB();
  const data = await req.json();

  // Extract relevant fields from request body
  const { id, acceptedBy } = data;

  // Validate presence of required fields (id and acceptedBy)
  if (!id || !acceptedBy) {
    return NextResponse.json({ message: "Missing required fields (id and acceptedBy)." });
  }

  try {
    // Find the order by ID
    const orderToUpdate = await Order.findById(id);

    if (!orderToUpdate) {
      return NextResponse.json({ message: "Order not found." });
    }

    // Update isAccepted to true
    orderToUpdate.isAccepted = true;
    orderToUpdate.acceptedBy = acceptedBy;

    // Save the updated order
    await orderToUpdate.save();

    return NextResponse.json({ status: "Order accepted successfully." });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
