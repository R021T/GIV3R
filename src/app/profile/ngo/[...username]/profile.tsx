"use client"
import React, { useState, useEffect } from 'react'
import styles from "./ngo.module.css"
import Image from "next/image"
import Link from 'next/link'
import { signOut } from 'next-auth/react'

interface ApiResponse {
  data: {
    name: string,
    username: string
  }
}

export default function Profile() {
  const [data, setData] = useState<ApiResponse | null>(null)
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch("/api/profile/ngo")
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

  return (
    <>
      <div className={styles.canvas}>
        <div className={styles.bar}>
          <div className={styles.one}>
            <Image className={styles.logo} priority={true} src={"/logo.png"} width={300} height={150} alt="GIV3R"/>
          </div>
          <div className={styles.two}>
            <div className={styles.select}>
              <Link className={styles.link} href={`/profile/ngo/${data.data.username}`}>
                <button className={styles.active}>Dashboard</button>
              </Link>
            </div>
            <div className={styles.select}>
              <Link className={styles.link} href={`/profile/ngo/${data.data.username}`}>
                <button className={styles.button}>Donations</button>
              </Link>
            </div>
            <div className={styles.select}>
              <Link className={styles.link} href={`/profile/ngo/${data.data.username}`}>
                <button className={styles.button}>Campaigns</button>
              </Link>
            </div>
            <div className={styles.select}>
              <Link className={styles.link} href={`/profile/ngo/${data.data.username}`}>
                <button className={styles.button}>Volunteers</button>
              </Link>
            </div>
          </div>
          <div className={styles.three}>
            <button className={styles.logout} onClick={()=>{signOut()}}>Logout</button>
          </div>
        </div>
        <div className={styles.dashboard}>
          <div className={styles.info}>
            <div className={styles.left}>
              <div className={styles.top}>
                <div className={styles.details}>
                  <div className={styles.high}>
                    <div className={styles.lt}>
                      <Image className={styles.dp} priority={true} src={"/profile.png"} width={175} height={175} alt="Profile"/>
                    </div>
                    <div className={styles.rt}>
                      <h1 className={styles.name}>{data.data.name}</h1>
                    </div>
                  </div>
                  <div className={styles.low}>
                    <p>Wallet details:</p>
                  </div>
                </div>
              </div>
              <div className={styles.bottom}>
                <div className={styles.west}>
                  <div className={styles.volunteers}>
                    <p>Number of volunteers:</p>
                  </div>
                </div>
                <div className={styles.east}>
                  <div className={styles.campaigns}>
                    <p>Number of campaigns:</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.recent}>
                <p>Recent donations:</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
