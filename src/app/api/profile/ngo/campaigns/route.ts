import { NextResponse } from "next/server"
import { sql } from "@vercel/postgres"
import { getServerSession } from "next-auth"

export async function GET(){
    const session=await getServerSession()
    const response=await sql`select * from campaign where ngo=${session?.user?.name}`
    const data=response.rows
    return NextResponse.json({data})
}

export async function POST(request:Request) {
    try{
        const session=await getServerSession()
        const{name,description,amount,volunteers}=await request.json()
        const ngo=session?.user?.name
        console.log({ngo,name,description,amount,volunteers})
        const response=await sql`insert into campaign(ngo,name,description,amount,volunteers) values(${ngo},${name},${description},${amount},${volunteers})`
        if(response){
            const update=await sql`update ngo set campaigns=campaigns+1 where username=${ngo}`
        }
    }
    catch(e){
        console.log({e})
    }

    return NextResponse.json({response:"success"})
}
