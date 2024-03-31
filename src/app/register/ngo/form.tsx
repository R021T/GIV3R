"use client"
import { FormEvent } from "react"
import styles from "./ngo.module.css"
import { useRouter } from "next/navigation"

export default function Form() {
    const router=useRouter()
    const handleSubmit=async (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const formData=new FormData(e.currentTarget)
        const response=await fetch("/api/auth/register/ngo",{
            method:"POST",
            body: JSON.stringify({
                name: formData.get("name"),
                email: formData.get("email"),
                phone: formData.get("phone"),
                username: formData.get("username"),
                wallet: formData.get("wallet"),
                password: formData.get("password")
            })
        })
        if(response){
            router.push("/profile")
            router.refresh()
        }
    }

    return (
        <form className={styles.enter} onSubmit={handleSubmit}>
            <div className={styles.name}>
                <label>Name :</label>
                <input name="name" type="text" placeholder="No constraints" required/>
            </div>
            <div className={styles.email}>
                <label>Email :</label>
                <input name="email" type="email" placeholder="No constraints" required/>
            </div>
            <div className={styles.phone}>
                <label>Phone :</label>
                <input name="phone" type="tel" pattern="[0-9]{10}" placeholder="10 digits" required/>
            </div>
            <div className={styles.wallet}>
                <label>Wallet ID:</label>
                <input name="wallet" type="text" placeholder="Not compulsory"/>
            </div>
            <div className={styles.username}>
                <label>Username :</label>
                <input name="username" type="text" maxLength={25} placeholder="Max length 25" required/>
            </div>
            <div className={styles.password}>
                <label>Password :</label>
                <input name="password" type="password" maxLength={25} placeholder="No constraints" required/>
            </div>
            <div className={styles.submit}>
                <input type="submit"/>
            </div>
        </form>
    )
}