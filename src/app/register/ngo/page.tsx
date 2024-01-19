"use client"
import styles from "./ngo.module.css"
import Image from "next/image"
import Link from "next/link"
import { FormEvent } from "react"

export default async function Register() {
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
                password: formData.get("password")
            })
        })
    }

    return (
        <>
            <title>GIV3R丨Register</title>
            <div className={styles.canvas}>
                <div className={styles.left}>
                    <div className={styles.bar}></div>
                    <div className={styles.circle}>
                        <Image className={styles.logo} priority={true} src={"/logo.png"} width={500} height={250} alt="GIV3R"/>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.top}>
                        <h1 className={styles.title}>Enter your details</h1>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.details}>
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}