import { getServerSession } from "next-auth"
import Button from "./button"
import styles from "./logout.module.css"
import Image from "next/image"
import { redirect } from "next/navigation"

export default async function Logout() {
    const session=await getServerSession()
    return(
        <div className={styles.canvas}>
            <title>GIV3R丨Logout</title>
            <div className={styles.top}>
                <div className={styles.circle}>
                    <Image className={styles.logo} priority={true} src={"/logo.png"} width={500} height={250} alt="GIV3R"/>
                </div>
            </div>
            <div className={styles.bottom}>
                {!!session && <Button/>}
                {!session && redirect("/login")}
            </div>
        </div>
    )
}