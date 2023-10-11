import CopyToClipboard from "../components/CopyToClipboard";
import ButtonMailto from "../components/ButtonMailto";
import ProtonMail from "../assets/protonmail.svg";
import Session from "../assets/session.svg";
import SimpleX from "../assets/simplex.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContactPopup from "./ContactPopup";

import "./contact-popup.css";

export default function Contact() {
  // Post Dropdown Menu open/close functionality
  const [openCopiedToClipboard, setOpenCopiedToClipboard] = useState(false);

  const handleContactButton = () => {
    setOpenCopiedToClipboard(!openCopiedToClipboard);
  };

  useEffect(() => {
    if (openCopiedToClipboard) {
      const timeout = setTimeout(() => {
        setOpenCopiedToClipboard(false);
      }, 5000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [openCopiedToClipboard]);

  return (
    <>
      <div className="flex flex-col lg3:flex-row gap-[20px] mt-[30px]">
        <div className="w-[350px] h-[100px] truncate flex items-center gap-[10px] px-[10px] py-[10px] rounded-[5px] hover:bg-white hover:bg-opacity-10">
          <div className="h-[40px] w-[40px] bg-white rounded-full flex items-center justify-center">
            <img src={ProtonMail} alt="Email" className="h-[20px]" />
          </div>
          <div>
            <p className="text-[#707070]">Email address</p>
            <ButtonMailto
              label="unknownuser0709@proton.me"
              mailto="mailto:unknownuser0709@proton.me"
            />
          </div>
        </div>
        <div className="w-[350px] h-[100px] truncate flex items-center gap-[10px] px-[10px] py-[10px] rounded-[5px] hover:bg-white hover:bg-opacity-10">
          <img
            src={Session}
            alt="Session Messenger"
            className="h-[40px] w-[40px]"
          />
          <div>
            <p className="text-[#707070]">Session</p>
            <button onClick={handleContactButton}>
              <CopyToClipboard />
            </button>
          </div>
        </div>
        <div className="w-[350px] h-[100px] text-ellipsis flex items-center gap-[10px] px-[10px] py-[10px] rounded-[5px] hover:bg-white hover:bg-opacity-10">
          <div className="h-[40px] w-[40px] bg-white rounded-full flex items-center justify-center">
            <img
              src={SimpleX}
              alt="SimpleX Chat"
              className="h-[30px] w-[30px]"
            />
          </div>
          <div>
            <p className="text-[#707070]">SimpleX</p>
            <Link
              to="https://simplex.chat/contact#/?v=1-2&smp=smp%3A%2F%2F0YuTwO05YJWS8rkjn9eLJDjQhFKvIYd8d4xG8X1blIU%3D%40smp8.simplex.im%2FT8hXg42LKJ0NS6irlr2dAZrGmFdcEkx-%23%2F%3Fv%3D1-2%26dh%3DMCowBQYDK2VuAyEAYbBGwUuV1VtUgRLXLrV0BZje8GW7zD8YK8Lm-XpNWwA%253D%26srv%3Dbeccx4yfxxbvyhqypaavemqurytl6hozr47wfc7uuecacjqdvwpw2xid.onion"
              target="_blank"
              className="font-semibold transition-all hover:text-blue-500 hover:underline"
            >
              Link to QR-code
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`fixed top-[110px] z-50 w-flex flex items-center transition ease-in-out duration-200 slide-in-out
          ${
            openCopiedToClipboard
              ? "activeContactPopup"
              : "inactiveContactPopup"
          }`}
      >
        {openCopiedToClipboard && <ContactPopup />}
      </div>
    </>
  );
}
