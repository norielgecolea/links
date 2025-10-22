"use client";
import { FaTwitter, FaDribbble, FaGithub, FaLinkedin, FaCoffee } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex flex-col items-center py-16 px-5 sm:px-6 text-center max-w-lg mx-auto font-hanken">
      {/* Profile */}
      <img
        src="/mecartoon.png"
        alt="Profile"
        className="w-24 h-24 sm:w-28 sm:h-28 rounded-full mb-4 border-2 border-gray-700"
      />
      <h1 className="text-xl sm:text-2xl font-semibold">Noriel Fernando Gecolea</h1>
      <p className="text-xs sm:text-sm text-gray-400 mb-2">Computer Engineer | Philippines</p>
      <p className="text-xs sm:text-sm text-gray-400 mb-6 px-3">
        A self-taught Product Designer, Illustrator & Developer. Currently shaping user experiences at Brainfish.
      </p>
      <p className="no-select text-xs sm:text-xs text-gray-400 mb-6 px-3">norielgecolea23@gmail.com<br/>09763998690</p>

      {/* Social Icons */}
      <div className="flex space-x-4 mb-8 justify-center">
        <a href="#" className="text-gray-400 hover:text-white text-lg transition"><FaTwitter /></a>
        <a href="#" className="text-gray-400 hover:text-white text-lg transition"><FaDribbble /></a>
        <a href="#" className="text-gray-400 hover:text-white text-lg transition"><FaGithub /></a>
        <a href="#" className="text-gray-400 hover:text-white text-lg transition"><FaLinkedin /></a>
        <a href="#" className="text-gray-400 hover:text-white text-lg transition"><FaCoffee /></a>
      </div>

      {/* Featured Links */}
      <section className="w-full mb-8">
        <h2 className="text-neutral-400 tracking-widest font-bold uppercase text-xs mb-4">
          Featured Links
        </h2>
        <div className="space-y-3">
          {[
            { name: "My Portfolio", icon: "./internet.png", link: "https://www.norielgecolea.com" },
            { name: "My Resume", icon: "./cv.png", link: "https://www.norielgecolea.com/NORIEL_GECOLEA_RESUME.pdf" },

          ].map((link, i) => (
            <a
              key={i}
              href={`${link.link}`}
              target="_blank"
              className="flex items-center justify-between border border-neutral-500/50 px-5 py-4 rounded-full hover:bg-green-900/60 hover:border-green-300/60 transition-all duration-200 active:scale-95"
            >
              <div className="flex items-center space-x-3">
                <img className=" h-8 " src={`${link.icon}`}></img>

                <span className="text-neutral-300/90 text-sm sm:text-base font-bold">
                  {link.name}
                </span>
              </div>
              <span className="text-gray-400 text-sm">→</span>
            </a>
          ))}
        </div>
      </section>

      {/* Other Links */}
      <section className="w-full mb-8">
        <h2 className="text-neutral-400 tracking-widest font-bold uppercase text-xs mb-4">
          Socials
        </h2>
        <div className="space-y-3">
          {[
            { name: "Facebook", icon: "./communication.png", link: "https://facebook.norielgecolea.com" },
            { name: "Instagram", icon: "./instagram.png", link: "https://instagram.norielgecolea.com/" },

          ].map((link, i) => (
            <a
              key={i}
              href={`${link.link}`}
              target="_blank"
              className="flex items-center justify-between border border-neutral-500/50 px-5 py-4 rounded-full hover:bg-green-900/60 hover:border-green-300/60 transition-all duration-200 active:scale-95"
            >
              <div className="flex items-center space-x-3">
                <img className=" h-8 " src={`${link.icon}`}></img>
                <span className="text-neutral-300/90 text-sm sm:text-base font-bold">
                  {link.name}
                </span>
              </div>
              <span className="text-gray-400 text-sm">→</span>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-10 text-[10px] sm:text-xs text-gray-500">

        <span className="text-white">© 2025 Noriel Gecoleaaa </span>
        <span className="text-pink-500">❤</span> All rights reserved.
        <br />

      </footer>
    </main>
  );
}
