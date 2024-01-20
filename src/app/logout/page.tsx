import { getServerSession } from "next-auth"
import Button from "./button"

export default async function Logout() {
    const session=await getServerSession()
    return(
        <nav>
            {!!session && <Button/>}
        </nav>
    )
}