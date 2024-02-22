import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import Campaigns from "./campaigns"

export default async function ngoProfile() {
    const session=await getServerSession()
    if(session){
        if(session.user?.email==="D"){
            redirect(`/profile/donor/${session.user.name}`)
        }
    }
    else{
        redirect("/login")
    }
    return(
        <>
            <title>GIV3R丨Profile</title>
            <Campaigns/>
        </>
  )
}