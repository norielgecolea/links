"use client";
import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    async function fetchCount() {
      try {
        // change the URL key to your domain (unique ID)
        const res = await fetch("https://api.countapi.xyz/hit/links.norielgecolea.com/visits");
        const data = await res.json();
        setCount(data.value);
      } catch (error) {
        console.error("Visitor counter error:", error);
      }
    }
    fetchCount();
  }, []);

  return (
    <div className="flex items-center justify-center gap-2 text-gray-400 text-xs sm:text-sm mt-6">
      <div className="flex items-center gap-2 bg-neutral-900/70 border border-neutral-700 px-4 py-2 rounded-full backdrop-blur-sm shadow-sm">
        <span className="text-green-400 text-base">👁️</span>
        <span>{count ? count.toLocaleString() : "—"} visits</span>
      </div>
    </div>
  );
}
