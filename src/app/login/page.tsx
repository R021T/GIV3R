import styles from "./login.module.css"
import Image from "next/image"

export default function Login() {
  return (
    <main>
      <title>GIV3R丨Login</title>
      <div className={styles.bar}></div>
      <div className={styles.circle}>
        <Image className={styles.logo} priority={true} src={"/logo.png"} width={500} height={250} alt="GIV3R"/>
      </div>
    </main>
  )
}
