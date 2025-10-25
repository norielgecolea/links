"use client";
import "./globals.css";
import { FaTwitter, FaDribbble, FaGithub, FaLinkedin, FaCoffee } from "react-icons/fa";
import { useEffect, useState } from "react";
import VisitorCounter from "./visitorcounter";
type VerseDetails = {
  text: string;
  reference: string;
};
export default function Home() {
  const [verse, setVerse] = useState<VerseDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDailyVerse() {
      try {
        const res = await fetch("https://beta.ourmanna.com/api/v1/get/?format=json");
        const data = await res.json();
        setVerse(data.verse.details);
      } catch (error) {
        console.error("Error fetching daily verse:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchDailyVerse();
  }, []);
  return (
    <main className="flex flex-col items-center py-16 px-5 sm:px-6 text-center max-w-lg mx-auto font-hanken">
      {/* Profile */}
      <img
        src="./mecartoon.png"
        alt="Profile"
        className="w-24 h-24 sm:w-28 sm:h-28 rounded-full mb-4 border-2 border-gray-700"
      />
      <h1 className="text-xl sm:text-2xl font-semibold">Noriel Fernando Gecolea</h1>
      <p className="text-xs sm:text-sm text-gray-400 mb-2">Computer Engineer | Philippines</p>
      <p className="text-xs sm:text-sm text-gray-400 mb-1 px-3">
        A self-taught Software Engineer passionate about building intuitive and impactful user experiences.
      </p>
      <p className="no-select text-xs sm:text-xs text-gray-400 mb-3 px-3">
        norielgecolea23@gmail.com
      </p>

      {/* 📖 Daily Verse */}
      <div className="text-center mb-6 border border-gray-700 p-4 rounded-xl bg-[#1a1a1a]/70 max-w-m w-full max-w-m">
        {loading ? (
          <div className="animate-pulse space-y-5">
            <div className="h-8 bg-gray-700/50 rounded w-5/6 mx-auto"></div>
            <div className="h-3 bg-gray-700/40 rounded w-2/3 mx-auto"></div>
          </div>
        ) : verse ? (
          <>
            <p className="text-gray-300 italic">“{verse.text}”</p>
            <p className="text-gray-500 text-sm mt-2">— {verse.reference}</p>
          </>
        ) : (
          <p className="text-gray-500 text-sm">Unable to load verse.</p>
        )}
      </div>

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
                <img className="h-8" src={`${link.icon}`} alt={link.name} />
                <span className="text-neutral-300/90 text-sm sm:text-base font-bold">{link.name}</span>
              </div>
              <span className="text-gray-400 text-sm">→</span>
            </a>
          ))}
        </div>
      </section>

      {/* Contacts */}
      <section className="w-full mb-8">
        <h2 className="text-neutral-400 tracking-widest font-bold uppercase text-xs mb-4">Contacts</h2>
        <div className="space-y-3">
          {[
            { name: "Email", icon: "./email.png", link: "mailto:norielgecolea23@gmail.com" },
            { name: "Phone", icon: "./phone.png", link: "tel:+639128240698" },
            { name: "Viber", icon: "./viber.png", link: "viber://chat?number=+639128240698" },
            { name: "WhatsApp", icon: "./whatsapp.png", link: "https://wa.me/639128240698" },
          ].map((link, i) => (
            <a
              key={i}
              href={`${link.link}`}
              target="_blank"
              className="flex items-center justify-between border border-neutral-500/50 px-5 py-4 rounded-full hover:bg-green-900/60 hover:border-green-300/60 transition-all duration-200 active:scale-95"
            >
              <div className="flex items-center space-x-3">
                <img className="h-8" src={`${link.icon}`} alt={link.name} />
                <span className="text-neutral-300/90 text-sm sm:text-base font-bold">{link.name}</span>
              </div>
              <span className="text-gray-400 text-sm">→</span>
            </a>
          ))}
        </div>
      </section>

      {/* Socials */}
      <section className="w-full mb-8">
        <h2 className="text-neutral-400 tracking-widest font-bold uppercase text-xs mb-4">Socials</h2>
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
                <img className="h-8" src={`${link.icon}`} alt={link.name} />
                <span className="text-neutral-300/90 text-sm sm:text-base font-bold">{link.name}</span>
              </div>
              <span className="text-gray-400 text-sm">→</span>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-10 text-[10px] sm:text-xs text-gray-500">
        <VisitorCounter/>
        <span className="text-white">© 2025 Noriel Gecolea </span>
        <span className="text-pink-500">❤</span> All rights reserved.
        <br />
      </footer>
    </main>
  );
}
