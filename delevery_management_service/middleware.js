import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken'; // Import the jwt library for token verification

export default async function middleware(req) {
  /*const JWT_KEY = process.env.JWT_KEY;
  const data = await req.headers.get('authorization');

  if (!data || !data.startsWith('Bearer ')) {
    return NextResponse.redirect(new URL('/Login', req.url));
  }

  const token = data.split(' ')[1];

  try {
    const decoded = jwt.verify(token, JWT_KEY);
    req.user = decoded; // Attach decoded user data to request object
    return NextResponse.next({
        props: { user }, // Pass user data as props
      }); // Allow the request to proceed
  } catch (error) {
    console.error('JWT verification error:', error);
    return NextResponse.redirect(new URL('/Login', req.url));
  }*/
}
/*
export const config = {
  matcher: ['/api/postorder']
};
*/