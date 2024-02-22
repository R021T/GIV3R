import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <head>
        <title>GIV3R</title>
      </head>
      <body>
        <nav className="navbar">
          <Link href="#LetsSpreadSmiles">
            <button className="home">HOME</button>
          </Link>
          <Link href="#WeAreGIV3R">
            <button className="about">ABOUT</button>
          </Link>
          <button className="campaigns">CAMPAIGNS</button>
          <Image className="title" priority={true} src={"/logo.png"} width={600} height={300} alt="GIV3R"/>
          <button className="volunteer">VOLUNTEER</button>
          <button className="contact">CONTACT</button>
          <Link href={"/login"}>
            <button className="login">LOGIN</button>
          </Link>
        </nav>
        <div className="rectangle"></div>
        <div className="image" id="LetsSpreadSmiles">
          <p className="tagline">Spreading smiles, without borders!</p>
          <Image className="smile" src={"/smile.png"} width={1000} height={500} alt="Smile"/>
        </div>
        <Link href="#WeAreGIV3R">
          <div className="scroll"></div>
          <div className="dot"></div>
        </Link>
        <div className="bar"></div>
        <div className="what" id="WeAreGIV3R">
          <div className="card">
            <div className="front">
              <p className="is">What <br/>is <br/><b className="giv3r">GIV3R</b>?</p>
            </div>
            <div className="back">
              <p className="desc">GIV3R is a decentralized charity portal which aims at integrating security, transparency and tracking for your valuable donations to various NGOs.</p>
            </div>
          </div>
        </div>
        <div className="why">
          <div className="card">
            <div className="front">
              <p className="is">Why <br/>use <br/><b className="giv3r">GIV3R</b>?</p>
            </div>
            <div className="back">
              <p className="desc">GIV3R is a decentralized charity portal which aims at integrating security, transparency and tracking for your valuable donations to various NGOs.</p>
            </div>
          </div>
        </div>
        <div className="how">
          <div className="card">
            <div className="front">
              <p className="is">How <br/>to use <br/><b className="giv3r">GIV3R</b>?</p>
            </div>
            <div className="back">
              <p className="desc">GIV3R is a decentralized charity portal which aims at integrating security, transparency and tracking for your valuable donations to various NGOs.</p>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <p className="flip">Flip to find out!</p>
      </body>
    </>
  )
}
