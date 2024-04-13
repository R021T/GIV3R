import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import { compare } from "bcrypt"
import { sql } from "@vercel/postgres"

const handler = NextAuth({
    session:{
        strategy: "jwt"
    },
    providers: [CredentialsProvider({
        credentials: {
            category: {},
            username: {},
            password: {}
          },
          async authorize (credentials, req) {
            if(credentials?.category==="NGO"){
                const response=await sql`select * from ngo where username=${credentials?.username}`
                const ngo=response.rows[0]
                const passwordCheck=await compare(credentials?.password || "",ngo.password)
                if(passwordCheck){
                    return{
                        id: ngo.id,
                        name: ngo.username,
                        email: "N"
                    }
                }
            }
            else if(credentials?.category==="Donor"){
                const response=await sql`select * from donor where username=${credentials?.username}`
                const donor=response.rows[0]
                const passwordCheck=await compare(credentials?.password || "",donor.password)
                if(passwordCheck){
                    return{
                        id: donor.id,
                        name: donor.username,
                        email: "D"
                    }
                }
            }
            else if(credentials?.category==="Beneficiary"){
                const response=await sql`select * from needy where username=${credentials.username}`
                const needy=response.rows[0]
                const passwordCheck=await compare(credentials.password || "",needy.password)
                if(passwordCheck){
                    return{
                        id: needy.id,
                        name: needy.username,
                        email: "B"
                    }
                }
            }
            else if(credentials?.category==="Service Provider"){
                const response=await sql`select * from service where username=${credentials.username}`
                const needy=response.rows[0]
                const passwordCheck=await compare(credentials.password || "",needy.password)
                if(passwordCheck){
                    return{
                        id: needy.id,
                        name: needy.username,
                        email: "S"
                    }
                }
            }
            return null
          }
    })]
})

export { handler as GET,handler as POST }