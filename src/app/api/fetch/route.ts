import { sql } from "@vercel/postgres"
import { NextResponse } from "next/server"

export async function GET(){
    const response=await sql`select * from donor where username='test'`
    const data=response.rows[0]
    return NextResponse.json({data})
}