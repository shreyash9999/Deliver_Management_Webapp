import ConnectDB from "@/lib/db";
import { NextResponse } from "next/server";
import users from "@/lib/models/users";
export async function POST(req) {
  try {
    const data = await req.json();

    await ConnectDB();
    const { username, password, email, mobileno, prn, image } = data;
    await users.create({ username, password, email, image, prn, mobileno });
    

    return NextResponse.json({ message: "user created successfully" });
  } catch (err) {
    console.log(err)
    return NextResponse.json({ error: "Server down" });
  }
}
