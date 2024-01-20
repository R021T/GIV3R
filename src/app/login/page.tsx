import { getServerSession } from "next-auth"
import Form from "./form"
import styles from "./login.module.css"
import Image from "next/image"
import { redirect } from "next/navigation"

export default async function Login() {
    const session=await getServerSession()
    if(session){
        redirect("/Profile")
    }
    return(
        <>
            <title>GIV3R丨Login</title>
            <div className={styles.canvas}>
                <div className={styles.left}>
                    <div className={styles.bar}></div>
                    <div className={styles.circle}>
                        <Image className={styles.logo} priority={true} src={"/logo.png"} width={500} height={250} alt="GIV3R"/>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.top}>
                        <h1 className={styles.title}>Enter your credentials</h1>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.details}>
                            <Form/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}