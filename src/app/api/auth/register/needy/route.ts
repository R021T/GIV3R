import { NextResponse } from "next/server"
import { sql } from "@vercel/postgres"
import { hash } from "bcrypt"

export async function GET(){
    const response=await sql`select * from ngo`
    const data=response.rows
    return NextResponse.json({data})
}

export async function POST(request:Request) {
    try{
        const{ngo,firstname,middlename,lastname,age,email,phone,wallet,username,password}=await request.json()
        const ngos=ngo.map((str: string) => parseInt(str, 10))
        const hashedPassword=await hash(password,10)
        const response=await sql`insert into needy(ngo,firstname,middlename,lastname,age,email,phone,wallet,username,password) values(${ngos},${firstname},${middlename},${lastname},${age},${email},${phone},${wallet},${username},${hashedPassword}) returning id,ngo`
        if(response){
            const ngo_id=response.rows[0].ngo
            const needy_id=response.rows[0].id
            if(ngo_id && needy_id){
                for (let i=0;i<ngo_id.length;i++){
                    let id=ngo_id[i];
                    const approve=await sql`insert into approval(ngo,needy) values(${id},${needy_id})`
                }
            }
        }
    }
    catch(e){
        console.log({e})
    }

    return NextResponse.json({response:"success"})
}