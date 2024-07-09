import Image from "next/image";
import React from "react";
import footerLogo from "../../assets/footerLogo.svg";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="footer container max-w-[1440px] mx-auto py-[40px]">
        <ul className="footer__logo">
          <Image src={footerLogo} width={250} height={100} />
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
