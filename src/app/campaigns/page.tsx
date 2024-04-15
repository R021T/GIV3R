import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import styles from "./campaigns.module.css"
import Image from "next/image"
import CampaignsPage from "./campaigns";

export default async function Campaigns(){
    const session=await getServerSession()
    if(!session){
        redirect("/login")
    }

    return(
        <>
            <div className={styles.canvas}>
                <title>GIV3R丨Campaigns</title>
                <div className={styles.top}>
                    <div className={styles.one}>
                        <div className={styles.circle}>
                            <Image className={styles.logo} priority={true} src={"/logo.png"} width={500} height={250} alt="GIV3R"/>
                        </div>
                    </div>
                    <div className={styles.two}></div>
                    <div className={styles.three}>
                        <h1>Campaigns</h1>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <CampaignsPage/>
                </div>
            </div>
        </>
    )
}