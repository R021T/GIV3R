import { sql } from "@vercel/postgres"
import { NextResponse } from "next/server"

export async function GET(){
    const response=await sql`select * from campaign where status='Active'`
    const data=response.rows
    return NextResponse.json({data})
}