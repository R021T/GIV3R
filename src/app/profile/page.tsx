import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function Profile() {
    const session=await getServerSession()
    if(!session){
        redirect("/login")
    }
    return(
        <>
            <title>GIV3R丨Profile</title>
            <h1>Profile</h1>
        </>
    )
}