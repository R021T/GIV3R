import { NextResponse } from "next/server"
import { sql } from "@vercel/postgres"

export async function POST(request:Request) {
    try{
        const{id,type,from,to,left,amount}=await request.json()
        if(type==='DB'){
            const to_data=await sql`select * from needy where wallet=${to};`
            const to_id=to_data.rows[0].id
            const to_firstname=to_data.rows[0].firstname
            const to_middlename=to_data.rows[0].middlename
            const to_lastname=to_data.rows[0].lastname
            const to_name=`${to_firstname} ${to_middlename} ${to_lastname}`
            const from_data=await sql`select * from donor where wallet=${from};`
            const from_id=from_data.rows[0].id
            const from_firstname=from_data.rows[0].firstname
            const from_middlename=from_data.rows[0].middlename
            const from_lastname=from_data.rows[0].lastname
            const from_name=`${from_firstname} ${from_middlename} ${from_lastname}`
            const ngo=await sql`select * from campaign where id=${id};`
            const ngo_id=ngo.rows[0].ngo_id
            const response=await sql`insert into payment(from_id,from_name,to_id,to_name,amount,type,campaign_id,ngo_id) values(${from_id},${from_name},${to_id},${to_name},${amount},${type},${id},${ngo_id});`
            if(response){
                const campaign=await sql`select * from campaign where id=${id};`
                const campaign_target=campaign.rows[0].target
                const update=await sql`update campaign set raised=raised+${amount} where id=${id};`
                const raise=await sql`select * from campaign where id=${id};`
                const raised=raise.rows[0].raised
                if(raised>=campaign_target){
                    const complete=await sql`update campaign set status='Complete' where id=${id};`
                }
                const total=await sql`update donor set total=total+${amount} where id=${from_id};`
                const number=await sql`update donor set number=number+1 where id=${from_id};`
            }
        }
        else{
            const to_data=await sql`select * from ngo where wallet=${to};`
            const to_id=to_data.rows[0].id
            const to_name=to_data.rows[0].name
            const from_data=await sql`select * from donor where wallet=${from};`
            const from_id=from_data.rows[0].id
            const from_firstname=from_data.rows[0].firstname
            const from_middlename=from_data.rows[0].middlename
            const from_lastname=from_data.rows[0].lastname
            const from_name=`${from_firstname} ${from_middlename} ${from_lastname}`
            const ngo=await sql`select * from campaign where id=${id};`
            const ngo_id=ngo.rows[0].ngo_id
            const response=await sql`insert into payment(from_id,from_name,to_id,to_name,amount,type,campaign_id,ngo_id) values(${from_id},${from_name},${to_id},${to_name},${amount},${type},${id},${ngo_id});`
            if(response){
                const campaign=await sql`select * from campaign where id=${id};`
                const campaign_target=campaign.rows[0].target
                const update=await sql`update campaign set raised=raised+${amount} where id=${id};`
                const raise=await sql`select * from campaign where id=${id};`
                const raised=raise.rows[0].raised
                if(raised>=campaign_target){
                    const complete=await sql`update campaign set status='Complete' where id=${id};`
                }
                const total=await sql`update donor set total=total+${amount} where id=${from_id};`
                const number=await sql`update donor set number=number+1 where id=${from_id};`
            }
        }
    }
    catch(e){
        console.log({e})
    }

    return NextResponse.json({response:"success"})
}