import React, { useEffect, useState } from "react";

type ServerStatus = {
  online: boolean;
  motd?: { clean?: string[] };
  players?: { online: number; max: number };
  icon?: string;
};

export default function MinecraftStatusCard() {
  const [status, setStatus] = useState<ServerStatus | null>(null);
  const serverIP = "minecraft.norielgecolea.com";
  const serverTitle = "VIP SQUAD";

  useEffect(() => {
    fetch(`https://api.mcsrvstat.us/2/${serverIP}`)
      .then((res) => res.json())
      .then(setStatus)
      .catch(() => setStatus({ online: false }));
  }, []);

  const motd =
    status?.motd?.clean?.length ? status.motd.clean.join(" ") : "No MOTD";

  const iconSrc = status?.icon
    ? status.icon
    : "/server-icon.png"; // fallback icon in /public

  const isOnline = status?.online;

  return (
    <div
           className={`w-full max-w-md mx-auto border border-slate-700 rounded-lg p-3 flex items-center gap-3 shadow-lg hover:border-green-500 transition-colors duration-200`}
      style={{
        backgroundImage: "url('/minecarft.png')", // put your texture here
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
        backgroundColor: "#1e293b", // dark fallback
      }}
    
    
    
    >
      {/* 🖼️ Server Icon */}
      <img
        src={iconSrc}
        alt="Server Icon"
        className="w-16 h-16 rounded-4xl bject-cover border border-slate-500"
      />

      {/* 📋 Server Details */}
      <div className="flex-1 flex flex-col justify-center items-center text-white">
        {/* Title */}
        <div className="flex justify-between items-center text-center">
          <h2 className="font-bold  text-green-400 text-lg">{serverTitle}</h2>

          {/* Fake ping indicator (like in Minecraft) */}
    
        </div>

        {/* MOTD */}
        <p className="text-sm text-gray-300 truncate">{motd} </p>

        {/* Player Count */}
        {isOnline ? (
          <p className="text-xs text-green-400">
            {status.players?.online}/{status.players?.max} players online
          </p>
        ) : (
          <p className="text-xs text-red-400">Server Offline</p>
        )}

        {/* Server IP */}
        <p className="text-[11px] text-gray-400 mt-1">{serverIP}</p>
      </div>
    </div>
  );
}
