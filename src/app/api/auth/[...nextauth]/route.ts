import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import { compare } from "bcrypt"
import { sql } from "@vercel/postgres"

const handler = NextAuth({
    session:{
        strategy: "jwt"
    },
    pages:{
        signIn: "/login"
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
                console.log({passwordCheck})
                if(passwordCheck){
                    return{
                        id: ngo.id,
                        name: ngo.name
                    }
                }
            }
            else if(credentials?.category==="Donor"){
                const response=await sql`select * from donor where username=${credentials?.username}`
                const ngo=response.rows[0]
                const passwordCheck=await compare(credentials?.password || "",ngo.password)
                console.log({passwordCheck})
                if(passwordCheck){
                    return{
                        id: ngo.id,
                        name: ngo.name
                    }
                }
            }
            return null
          }
    })]
})

export { handler as GET,handler as POST }