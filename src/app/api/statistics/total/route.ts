import { sql } from "@vercel/postgres"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"

export async function GET(){
    const session=await getServerSession()
    let data
    if(session || !session){
        const response=await sql`select sum(amount) as id_count from payment;`
        data=response.rows[0]
    }
    return NextResponse.json({data})
}