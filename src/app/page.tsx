import Image from "next/image"

export default function Home() {
  return (
    <body>
      <title>GIV3R</title>
      <div className="giv3r-heart">
        <Image className="heart" src={'/heart.png'} width={375} height={750} alt="GIV3R"/>
      </div>
      <div className="giv3r-logo">
        <div className="giv3r">
          <Image className="logo" src={'/title.png'} width={600} height={300} alt="GIV3R"/>
        </div>
      </div>
      <div className="start">
        <button className="login">Login</button>
        <br/>
        <button className="register">Register</button>
      </div>
    </body>
  )
}
