"use client"
import { signOut } from "next-auth/react"
import styles from "./logout.module.css"

export default function Button() {
    return(
        <button className={styles.logout} onClick={()=>{signOut()}}>Logout</button>
    )
}