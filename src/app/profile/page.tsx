import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function Login() {
    const session=await getServerSession()
    if(session){
        if(session.user?.email==="N"){
            redirect("/profile/ngo")
        }
        else if(session.user?.email==="D"){
            redirect("/profile/donor")
        }
    }
    else{
        redirect("/login")
    }
    return(
        <>
            <title>GIV3R丨Profile</title>
        </>
    )
}