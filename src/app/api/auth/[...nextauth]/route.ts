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
                        name: ngo.username
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
                        name: donor.username
                    }
                }
            }
            return null
          }
    })]
})

export { handler as GET,handler as POST }