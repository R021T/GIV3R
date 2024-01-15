import styles from "./register.module.css"
import Image from "next/image"

export default function Register() {
  return (
    <main>
      <title>GIV3R</title>
      <div className={styles.bar}></div>
      <div className={styles.circle}>
        <Image className={styles.logo} src={"/title.png"} width={500} height={250} alt="GIV3R"/>
      </div>
    </main>
  )
}
