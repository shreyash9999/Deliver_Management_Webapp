import { NextResponse } from "next/server";

import ConnectDB from "@/lib/db";
import bcryptjs from "bcryptjs";
import User from "@/lib/models/users";

export async function POST(req) {
  try {
    const data = await req.json();
    if (!data) {
      return NextResponse.json({ error: "Invalid request body" });
    }

 
    const { username, password, email, mobileno, prn, image } = data; 


    await ConnectDB();

    const existingUserByEmail = await User.findOne({ email });
    if (existingUserByEmail) {
      return NextResponse.json({ error: `Email already exists: ${email}` });
    }

    const existingUserByUsername = await User.findOne({ username });
    if (existingUserByUsername) {
      return NextResponse.json({ error: "Duplicate username" });
    }

  
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = await User.create({
      username,
      password: hashedPassword, 
      email,
      mobileno,
      prn,
      image,
    });


    return NextResponse.json({ message: "User created successfully" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Internal server error" });
  }
}
