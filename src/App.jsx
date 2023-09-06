import "./App.css";
import * as React from "react";
import Blop from "./assets/bellatrix.svg";
import FooterGradient from "./assets/footer-gradient.svg";
import Noise from "./assets/noise.svg";
import Instagram from "./assets/instagram.svg";
import Twitter from "./assets/twitter.svg";
import Nostr from "./assets/nostr.png";
import ProtonMail from "./assets/protonmail.svg";
import Session from "./assets/session.svg";
import SimpleX from "./assets/simplex.svg";
import VisitBtn from "./components/common/VisitBtn";
import { Link } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import CopyToClipboard from "./components/CopyToClipboard";

function App() {
  return (
    <>
      <Navbar />
      <div id="home" className="relative h-[100vh] w-[100%]">
        <header className="flex justify-center h-[100%] w-[100%] z-10">
          <h1 className="mt-[200px] z-10 text-[50px] font-black text-center leading-[60px]">
            UPCOMING
            <br />
            WEB / APP DEVELOPER
          </h1>
        </header>
        <img
          src={Noise}
          className="absolute z-[0] top-0 w-full"
          alt="Decoration"
        />
        <img
          src={Blop}
          className="absolute z-[-1] opacity-50 top-[-90%] right-[-30%] h-[120rem]"
          alt="Decoration"
        />
      </div>
      <div className="flex justify-center h-[100vh] z-10">
        <div className="md:flex md:gap-[100px] lg:w-[50%] md:w-[75%] w-[90%]">
          <h1 className="font-['Montserrat'] text-[50px] font-bold leading-[70px]">
            PRIVACY.
            <br />
            FREEDOM.
            <br />
            ANONYMITY.
          </h1>
          <div className="flex flex-col gap-[15px] mt-[50px] text-[16px] opacity-90">
            <p className="font-semibold">I believe privacy is a human right.</p>
            <p>
              Without the freedom to use technology that empowers anonymity, we
              don’t have any privacy.
            </p>
            <p>
              The essence of privacy hinges on our ability to harness technology
              that empowers anonymity. Without this capability, the very concept
              of privacy becomes fragile.
            </p>
            <p>
              We are witnessing the introduction and enactment of legislation
              that directly challenges our right to privacy. For instance, the
              British government has put forward a bill that seeks to outlaw
              end-to-end encrypted messaging.
            </p>
            <p>
              Governments worldwide seem to be in opposition to our fundamental
              privacy rights. It is our duty to resist their encroachments.
              Otherwise, we risk descending into a state of tyranny, and
              reclaiming our freedoms may prove to be an arduous journey.
            </p>
          </div>
        </div>
      </div>

      {/* My projects */}
      <div id="projects" className="w-full flex justify-center">
        <div className="lg:w-[50%] md:w-[75%] w-[90%] flex flex-col">
          <h1 className="font-bold text-[50px] leading-[40px] w-[370px] mt-[100px] text-stroke text-[#010101] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-900 hover:to-blue-500">
            MY PROJECTS
          </h1>
          <div className="flex flex-col gap-[150px] mt-[100px]">
            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-[30px]">
              <div className="col-span-[1 / 2] flex flex-col items-start gap-[10px]">
                <h2 className="text-[25px] font-bold">BLOPstr!</h2>
                <p className="text-[15px]">
                  BLOPstr is a beautiful and easy-to-use social media built on
                  the open-protocol called Nostr.
                  <br />
                  Nostr is a decentralized global communications protocol that
                  truly enables freedom and anti-censorship. Nostr has many
                  great use-cases, like building marketplaces, messaging apps,
                  social medias, and much more!
                </p>
                <VisitBtn to="https://www.blopstr.com/" />
              </div>
              {/* Image of project */}
              <div className="md:col-span-[1/2] bg-white rounded-[15px] h-[250px] flex justify-center items-center text-[#707070] text-center">
                <p>An image or video will be here showcasing the platform.</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-[30px] ">
              <div className="col-span-[1 / 2] md:order-2 flex flex-col items-start gap-[10px]">
                <h2 className="text-[25px] font-bold">CRYPTOWITHOUTKYC</h2>
                <p className="text-[15px]">
                  An open-source, decentralized, and peer-to-peer crypto trading
                  platform where users can buy and sell bitcoin and monero
                  without any KYC-verification. The platform is running on the
                  Nostr protocol using NIP-15 (the Nostr marketplace).
                </p>
                <VisitBtn to="#" />
              </div>
              {/* Image of project */}
              <div className="md:col-span-[1/2] w-full md:h-full h-[250px] bg-white rounded-[15px] flex justify-center items-center text-[#707070] text-center">
                <p>An image or video will be here showcasing the platform.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <div id="about" className="flex justify-center">
        <div className="flex flex-col gap-[30px] w-[50%]">
          <h1 className="font-bold text-[50px] text-center mt-[100px]">
            ABOUT ME
          </h1>
          <div className="text-[15px] flex flex-col gap-[15px]">
            <p>
              Hi, I’m Frederik! 20-years-old from Denmark 🇩🇰
              <br />
              Currently, I’m studying for a degree in Software Engineering.
            </p>
            <p>
              As reiterated earlier, I firmly believe in privacy as a
              fundamental human right.
              <br />
              It is imperative that we retain the liberty to utilize
              technologies that bolster both privacy and anonymity. Depriving us
              of the freedom to employ encrypted messaging apps,
              cryptocurrencies, and similar tools ultimately erodes our capacity
              for anonymity, consequently jeopardizing our right to privacy.
            </p>
            <p>
              People often trade their privacy for the sake of convenience, and
              I'm no exception. The reality is that it's quite challenging to
              maintain a convenient lifestyle while prioritizing robust privacy
              measures. Practically every app we use in our daily routines
              encroaches upon our privacy. While there are apps and technologies
              that respect privacy, they often suffer from clunkiness and a lack
              of user-friendliness. It's important to note that just because an
              application offers exceptional privacy and anonymity doesn't mean
              it should compromise the user experience.
            </p>
            <p>
              It is indeed possible to develop applications that provide
              top-notch privacy and an outstanding user experience. This is
              precisely the goal I aspire to pursue throughout my career.
            </p>
          </div>
        </div>
      </div>

      {/* Contact & Footer */}
      <div id="contact" className="relative h-[100vh]">
        <div className="relative z-10 h-full flex flex-col items-center">
          <div className="flex flex-col items-center mt-[100px]">
            <h1 className="text-[50px] font-bold">CONTACT</h1>
            {/* Contact Options */}
            <div className="flex gap-[20px] mt-[30px]">
              <div className="w-[350px] h-[100px] truncate flex items-center gap-[10px] px-[10px] py-[10px] rounded-[5px] hover:bg-white hover:bg-opacity-10">
                <div className="h-[40px] w-[40px] bg-white rounded-full flex items-center justify-center">
                  <img src={ProtonMail} alt="Email" className="h-[20px]" />
                </div>
                <div>
                  <p className="text-[#707070]">Email address</p>
                  <p className="font-semibold">contact@frederikdiamond.com</p>
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
                  <CopyToClipboard />
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
                    className="font-semibold text-white transition-all hover:text-blue-500 hover:underline"
                  >
                    Link to QR-code
                  </Link>
                </div>
              </div>
            </div>
            {/* Social Links */}
            <div className="flex gap-[40px] mt-[60px]">
              {/* Twitter */}
              <Link to="https://twitter.com/frederikdiamond" target="_blank">
                <img
                  src={Twitter}
                  alt="Twitter"
                  className="rounded-full h-[60px] hover:scale-150 transition-all ease-in-out"
                />
              </Link>
              {/* Nostr */}
              <Link
                to="https://snort.social/p/npub1nj0crmtetu84a7j43yegy358mp8u0e4ye7ndkhtd8dg0edll4mpqn52gqz"
                target="_blank"
              >
                <img
                  src={Nostr}
                  alt="Nostr"
                  className="rounded-full h-[60px] hover:scale-150 transition-all ease-in-out"
                />
              </Link>
              {/* Instagram */}
              <Link
                to="https://www.instagram.com/frederik_diamond/"
                target="_blank"
              >
                <img
                  src={Instagram}
                  alt="Instagram"
                  className="rounded-full h-[60px] hover:scale-150 transition-all ease-in-out"
                />
              </Link>
            </div>
            <p className="mt-[60px] text-center text-[#5F5F5F]">
              This website is open-source.
              <br />
              Check the code here:
            </p>
            <Link
              to="https://github.com/frederikdiamond/frederikdiamond-personal_website"
              target="_blank"
              className="flex items-center gap-[5px] mt-[15px] px-[10px] py-[10px] border-solid border-white border-[3px] rounded-lg font-medium text-[17px] group hover:bg-white hover:drop-shadow-[0_5px_40px_rgba(255,255,255,0.35)] transition-all ease-in-out"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="h-[40px] fill-white group-hover:fill-black"
              >
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
              </svg>
              <p className="text-[20px] font-medium group-hover:text-black">
                GitHub
              </p>
            </Link>
          </div>
          <p className="absolute bottom-[20px] text-[15px]">
            MADE WITH ❤️ BY{" "}
            <span className="font-semibold">FREDERIK DIAMOND</span>
          </p>
        </div>
        <div>
          <img
            src={Noise}
            className="absolute z-[-1] bottom-0 w-full"
            alt="Decoration"
          />
          <img
            src={FooterGradient}
            className="absolute z-[-2] bottom-0 w-full"
            alt="Decoration"
          />
        </div>
      </div>
    </>
  );
}

export default App;
