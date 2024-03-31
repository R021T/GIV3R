"use client"
import { useRouter } from "next/navigation"
import React, { useState, useEffect, FormEvent } from 'react'
import styles from "./needy.module.css"
import Image from "next/image"

interface ApiResponse {
  data: {
    map(arg0: (ngo: any) => React.JSX.Element): React.ReactNode
    name: string
  }
}

export default function Form() {
  const [data, setData] = useState<ApiResponse | null>(null)
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch("/api/auth/register/needy")
      .then((res) => res.json())
      .then((apiData: ApiResponse) => {
        setData(apiData)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching data:", error)
        setError("An error occurred while fetching data.")
        setLoading(false);
      })
  }, [])

  if (isLoading){
    return (
      <>
        <div className={styles.canvas}>
          <div className={styles.above}>
            <Image className={styles.loading} priority={true} src={"/loading.png"} width={300} height={300} alt="Loading"/>
          </div>
          <div className={styles.below}>
            <h1>Loading...</h1>
          </div>
        </div>
      </>
    )
  }

  if (error){
    return (
      <>
        <div className={styles.canvas}>
          <div className={styles.above}>
            <Image className={styles.error} priority={true} src={"/error.png"} width={300} height={300} alt="Error"/>
          </div>
          <div className={styles.below}>
            <h1>Error loading profile!</h1>
          </div>
        </div>
      </>
    )
  }

  if (!data){
    return (
      <>
        <div className={styles.canvas}>
          <div className={styles.above}>
            <Image className={styles.missing} priority={true} src={"/missing.png"} width={300} height={300} alt="Missing"/>
          </div>
          <div className={styles.below}>
            <h1>No profile data.</h1>
          </div>
        </div>
      </>
    )
  }

  const router=useRouter()
    const handleSubmit=async (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const formData=new FormData(e.currentTarget)
        const ngos=formData.getAll('ngo');
        const response=await fetch("/api/auth/register/needy",{
            method:"POST",
            body: JSON.stringify({
                ngo: ngos,
                firstname: formData.get("firstname"),
                middlename: formData.get("middlename"),
                lastname: formData.get("lastname"),
                age: formData.get("age"),
                email: formData.get("email"),
                phone: formData.get("phone"),
                wallet: formData.get("wallet"),
                username: formData.get("username"),
                password: formData.get("password")
            })
        })
        if(response){
            router.push("/profile")
            router.refresh()
        }
    }


  return (
    <>
      <form className={styles.enter} onSubmit={handleSubmit}>
            <div className={styles.ngo}>
                <label>NGO:</label>
                <select multiple name="ngo" defaultValue={""}>
                    <option value={""} disabled>Select NGO</option>
                    {data?.data.map((ngo: any) => (
                        <option key={ngo.id} value={ngo.id}>{ngo.name}</option>
                    ))}
                </select>
            </div>
            <div className={styles.firstname}>
                <label>First name :</label>
                <input name="firstname" type="text" placeholder="No constraints" required/>
            </div>
            <div className={styles.middlename}>
                <label>Middle name :</label>
                <input name="middlename" type="text" placeholder="Not compulsory"/>
            </div>
            <div className={styles.lastname}>
                <label>Last name :</label>
                <input name="lastname" type="text" placeholder="Not compulsory"/>
            </div>
            <div className={styles.age}>
                <label>Age :</label>
                <input name="age" type="number" placeholder="No constraints" required/>
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
    </>
  )
}
