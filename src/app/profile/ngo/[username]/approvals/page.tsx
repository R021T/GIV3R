import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import Approvals from "./approvals"

export default async function ngoProfile() {
    const session=await getServerSession()
    if(session){
        if(session.user?.email==="D"){
            redirect(`/profile/donor/${session.user.name}`)
        }
        else if(session.user?.email==="B"){
            redirect(`/profile/needy/${session.user.name}`)
        }
        else if(session.user?.email==="S"){
            redirect(`/profile/service/${session.user.name}`)
        }
    }
    else{
        redirect("/login")
    }
    return(
        <>
            <title>GIV3R丨Profile</title>
            <Approvals session={session.user?.name || ''}/>
        </>
  )
}
