import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import Profile from "./profile"

export default async function donorProfile() {
    const session=await getServerSession()
    if(session){
        if(session.user?.email==="N"){
            redirect(`/profile/ngo/${session.user.name}`)
        }
    }
    else{
        redirect("/login")
    }
    return(
        <>
          <title>GIV3R丨Profile</title>
          <Profile/>
        </>
  )
}
