import styles from "./register.module.css"
import Image from "next/image"
import Link from "next/link"

export default function Register() {
  return (
    <>
      <title>GIV3R丨Register</title>
      <div className={styles.header}>
        <div className={styles.bar}></div>
        <h1 className={styles.heading}>Register</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <button className={styles.card}>
            <Link className={styles.link} href={"/register/ngo"}>
              <div className={styles.top}>
                <Image className={styles.image} src={"/ngo.png"} width={500} height={500} alt="NGO"/>
              </div>
              <div className={styles.bottom}>
                <p className={styles.text}>Are you a NGO?</p>
              </div>
            </Link>
          </button>
        </div>
        <div className={styles.mid}>
          <div className={styles.high}>
            <div className={styles.circle}>
              <Image className={styles.logo} src={"/title.png"} width={500} height={250} alt="GIV3R"/>
            </div>
          </div>
          <div className={styles.low}>
            <p className={styles.log}>Already have an account?<br/><Link className={styles.link} href={"/login"}><b className={styles.in}>Login</b></Link></p>
          </div>
        </div>
        <div className={styles.right}>
          <button className={styles.card}>
            <Link className={styles.link} href={"/register/donor"}>
              <div className={styles.top}>
                  <Image className={styles.image} src={"/donor.png"} width={500} height={500} alt="Donor"/>
                </div>
                <div className={styles.bottom}>
                  <p className={styles.text}>Are you a Donor?</p>
                </div>
              </Link>
          </button>
        </div>
      </div>
    </>
  )
}