import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import ConnectDB from "@/lib/db";
import User from "@/lib/models/users";
import bcryptjs from "bcryptjs"
export async function POST(req) {
  const data =await req.json();
  const { email, password } = data;
    console.log(data);
  await ConnectDB();

  const user = await User.find({ email }).select("+password")
  console.log(user)
  if (!user || !await bcryptjs.compare(password, user.password)) {
    return NextResponse.json({ error: "Invalid credentials" });
  }
  const secretKey = process.env.JWT_KEY;
  const token = jwt.sign({ _id: user._id }, secretKey, { expiresIn: "30d" });
  const sanitizedUser = {
    _id: user._id,
    username: user.username,
    email: user.email,
    // ... other non-sensitive user data
  };
  


  return NextResponse.json({
    message: "Login successful",
    user: sanitizedUser,
    token, 
  });
}
