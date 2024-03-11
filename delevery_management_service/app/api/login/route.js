import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import ConnectDB from "@/lib/db";
import User from "@/lib/models/users";
import bcryptjs from "bcryptjs";

export async function POST(req) {
  try {
    // Retrieve and validate request data
    const data = await req.json();

    if (!data || !data.email || !data.password) {
      return NextResponse.json({ error: "Missing required fields (email, password)" }, { status: 400 });
    }

    const { email, password } = data;

    // Connect to the database
    await ConnectDB();

    // Find user by email and select the password field
    const user = await User.findOne({ email }).select("+password");

    // Validate credentials
    if (!user || !bcryptjs.compareSync(password, user.password)) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    // Generate JWT token
    const secretKey = process.env.JWT_KEY;
    const token = jwt.sign({ _id: user._id }, secretKey, { expiresIn: "30d" });

    // Sanitize user data
    const sanitizedUser = {
      _id: user._id,
      username: user.username,
      email: user.email,
      // ... other non-sensitive user data
    };

    // Return successful response with token and sanitized user data
    return NextResponse.json({
      message: "Login successful",
      user: sanitizedUser,
      token,
    });
  } catch (error) {
    console.error("Error in login API:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
