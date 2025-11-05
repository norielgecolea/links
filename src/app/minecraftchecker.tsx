import React, { useEffect, useState } from "react";

type ServerStatus = {
  online: boolean;
  motd?: { clean?: string[] };
  players?: {
    online: number;
    max: number;
    list?: string[];
    uuid?: Record<string, string>;
  };
  icon?: string;
};

export default function MinecraftStatusCard() {
  const [status, setStatus] = useState<ServerStatus | null>(null);
  const [expanded, setExpanded] = useState(false);
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

  const iconSrc = status?.icon ? status.icon : "/server-icon.png";
  const isOnline = status?.online;

  const playerList = status?.players?.list ?? [];
  const playerUUIDs = status?.players?.uuid ?? {};

  return (
    <div
      onClick={() => setExpanded((prev) => !prev)}
      className={`w-full max-w-md mx-auto border border-slate-700 rounded-lg p-3 flex flex-col gap-3 shadow-lg transition-all duration-300 hover:border-green-500 cursor-pointer ${
        expanded ? "max-h-[450px]" : "max-h-[120px]"
      } overflow-hidden`}
      style={{
        backgroundImage: "url('/minecarft.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
        backgroundColor: "#1e293b",
      }}
    >
      {/* Header Section */}
      <div className="flex items-center gap-3">
        <img
          src={iconSrc}
          alt="Server Icon"
          className="w-16 h-16 rounded-2xl object-cover border border-slate-500"
        />

        <div className="flex-1 flex flex-col justify-center items-center text-white">
          <h2 className="font-bold text-green-400 text-lg">{serverTitle}</h2>
          <p className="text-sm text-gray-300 truncate">{motd}</p>

          {isOnline ? (
            <p className="text-xs text-green-400">
              {status.players?.online}/{status.players?.max} players online
            </p>
          ) : (
            <p className="text-xs text-red-400">Server Offline</p>
          )}

          <p className="text-[11px] text-gray-400 mt-1">{serverIP}</p>
        </div>
      </div>

      {/* Expanded Player List */}
      {expanded && isOnline && (
        <div className="mt-2 border-t border-slate-600 pt-2">
          <h3 className="text-sm text-green-300 font-semibold mb-2 text-center">
            Online Players
          </h3>

          {playerList.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-4">
              {playerList.map((name) => {
                const uuid = playerUUIDs[name];
                const headUrl = uuid
                  ? `https://mc-heads.net/avatar/${name}/48`
                  : `https://mc-heads.net/avatar/${name}/48`;

                return (
                  <div
                    key={name}
                    className="flex flex-col items-center w-14 text-center"
                  >
                    <img
                      src={headUrl}
                      alt={name}
                      className="rounded-md border border-slate-600"
                    />
                    <p className="text-[10px] text-gray-300 truncate w-full">
                      {name}
                    </p>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-gray-400 text-xs text-center">
              No players online
            </p>
          )}
        </div>
      )}
    </div>
  );
}
