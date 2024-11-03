import Button from "./button";
import Image from "next/image";
import { CiFacebook } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { RxInstagramLogo } from "react-icons/rx";
export default function Header() {
  return (
    <header id="head">
      {/* header-container */}
      <div className="header-container">
        {/* left-container */}
        <div className="left">
        <h3>Hi, it&apos;s me</h3>
          <h1>Shiraz Ali</h1>
          <h2>
            And I&apos;m a <span>Frontend Developer</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum earum
            non dolorum blanditiis inventore ab dicta soluta eos dignissimos
            nihil. Officia, molestias?
          </p>
          {/* icons */}
          <div className="icons-container">
            <CiFacebook className="icon icon1" />
            <TiSocialLinkedinCircular className="icon icon2" />
            <VscGithub className="icon icon3" />
            <RxInstagramLogo className="icon icon4" />
          </div>
          <div className="download-cv">

          <Button
            border="none"
            bgColor="#F86F03"
            color="white"
            text="Download CV"
          />
          </div>
        </div>
        {/* right-container */}
        <div className="right">
          <Image
            alt="header-image"
            src="/header/hero_image.png"
            width={550}
            height={550}
            layout="responsive"
          />
        </div>
      </div>
    </header>
  );
}
