import styles from "./login.module.css"
import Image from "next/image"
import Link from "next/link"

export default function Login() {
  return (
    <>
      <title>GIV3R丨Login</title>
      <div className={styles.header}>
        <div className={styles.bar}></div>
        <h1 className={styles.heading}>Login</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <button className={styles.card}>
            <Link className={styles.link} href={"/login/ngo"}>
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
              <Image className={styles.logo} priority={true} src={"/logo.png"} width={500} height={250} alt="GIV3R"/>
            </div>
          </div>
          <div className={styles.low}>
            <p className={styles.log}>Don't have an account?<br/><Link className={styles.link} href={"/register"}><b className={styles.in}>Register</b></Link></p>
          </div>
        </div>
        <div className={styles.right}>
          <button className={styles.card}>
            <Link className={styles.link} href={"/login/donor"}>
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