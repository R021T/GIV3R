import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <body>
      <section className="top">
        <div className="vertical"></div>
        <div className="horizontal"></div>
        <div className="circle">
          <Image className="logo" src={"/title.png"} width={400} height={200} alt="GIV3R"/>
        </div>
      </section>
      <section className="base">
        <title>GIV3R</title>
        <nav className="navbar">
          <Link href="#LetsSpreadSmiles">
            <button className="home">HOME</button>
          </Link>
          <Link href="#WeAreGIV3R">
            <button className="about">ABOUT</button>
          </Link>
          <button className="events">EVENTS</button>
          <Image className="title" src={"/title.png"} width={600} height={300} alt="GIV3R"/>
          <button className="volunteer">VOLUNTEER</button>
          <button className="login">LOGIN</button>
          <Link href={"/register"}>
            <button className="register">REGISTER</button>
          </Link>
        </nav>
        <div className="image" id="LetsSpreadSmiles">
          <a className="tagline">Spreading smiles, without borders!</a>
          <Image className="smile" src={"/smile.png"} width={1000} height={500} alt="Smile"/>
        </div>
        <a href="#what">
          <div className="scroll"></div>
          <div className="dot"></div>
        </a>
        <div className="bar"></div>
        <div className="what" id="WeAreGIV3R">
          <div className="card">
            <div className="front">
              <p className="is">What
                <br/>
                is
                <br/>
                <b className="giv3r">GIV3R</b>
                ?
              </p>
            </div>
            <div className="back">
              <p className="desc">GIV3R is a decentralized charity portal which aims at integrating security, transparency and tracking for your valuable donations to various NGOs.</p>
            </div>
          </div>
        </div>
        <div className="why">
          <div className="card">
            <div className="front">
              <p className="is">Why
                <br/>
                use
                <br/>
                <b className="giv3r">GIV3R</b>
                ?
              </p>
            </div>
            <div className="back">
              <p className="desc">GIV3R is a decentralized charity portal which aims at integrating security, transparency and tracking for your valuable donations to various NGOs.</p>
            </div>
          </div>
        </div>
        <div className="how">
          <div className="card">
            <div className="front">
              <p className="is">How
                <br/>
                to use
                <br/>
                <b className="giv3r">GIV3R</b>
                ?
              </p>
            </div>
            <div className="back">
              <p className="desc">GIV3R is a decentralized charity portal which aims at integrating security, transparency and tracking for your valuable donations to various NGOs.</p>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <p className="flip">Flip to find out!</p>
      </section>
    </body>
  )
}
