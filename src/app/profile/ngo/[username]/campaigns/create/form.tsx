"use client"
import { FormEvent } from "react"
import styles from "./create.module.css"
import { useRouter } from "next/navigation"

export default function Form() {
    const router=useRouter()
    const handleSubmit=async (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const formData=new FormData(e.currentTarget)
        const response=await fetch("/api/profile/ngo/campaigns",{
            method:"POST",
            body: JSON.stringify({
                name: formData.get("name"),
                description: formData.get("description"),
                amount: formData.get("amount"),
                volunteers: formData.get("volunteers")
            })
        })
        if(response){
            router.push("/profile")
            router.refresh()
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.one}>
                <label>Campaign name:</label>
                <input name="name" type="text" placeholder="No constraints" required/>
            </div>
            <div className={styles.two}>
                <label>Description:</label>
                <textarea name="description" placeholder="200 words max" required></textarea>
            </div>
            <div className={styles.three}>
                <div className={styles.west}>
                    <div className={styles.north}>
                        <label>Amount required:</label>
                    </div>
                    <div className={styles.south}>
                        <input name="amount" type="number" placeholder="No constraints" required></input>
                    </div>
                </div>
                <div className={styles.east}>
                    <div className={styles.north}>
                        <label>Volunteers required:</label>
                    </div>
                    <div className={styles.south}>
                        <input name="volunteers" type="number" placeholder="No constraints" required></input>
                    </div>
                </div>
            </div>
            <div className={styles.four}>
                <input type="submit"></input>
            </div>
        </form>
    )
}