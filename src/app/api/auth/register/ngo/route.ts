import { NextResponse } from "next/server"
import { hash } from "bcrypt"
import { sql } from "@vercel/postgres"

export async function POST(request:Request) {
    try{
        const{name,email,phone,username,password}=await request.json()
        console.log({name,email,phone,username,password})
        const hashedPassword=await hash(password,10)
        const response=await sql`insert into ngo(name,email,phone,username,password) values(${name},${email},${phone},${username},${hashedPassword})`
    }
    catch(e){
        console.log({e})
    }

    return NextResponse.json({response:"success"})
}