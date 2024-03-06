import { NextRequest } from "next/server";




export default function middleware(req){
    
    const path=req.nextUrl.pathname;
    
}

export const config={
    matcher:['/Login','/register']
}