import { sql } from "@vercel/postgres"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"

export async function POST(request:Request) {
    try{
        const session=await getServerSession()
        const{id,name,description,amount,volunteers}=await request.json()
        console.log(id)
    }
    catch(e){
        console.log({e})
    }

    return NextResponse.json({response:"success"})
}