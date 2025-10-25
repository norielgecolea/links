"use client";
import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    async function recordVisit() {
      try {
        const res = await fetch("https://visitor.6developer.com/visit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            domain: "links.norielgecolea.com", // your site domain
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            page_path: window.location.pathname,
            page_title: document.title,
            referrer: document.referrer,
          }),
        });

        const data = await res.json();
        if (data.totalCount) {
          setCount(data.totalCount);
        } else {
          console.warn("Unexpected response:", data);
        }
      } catch (error) {
        console.error("Visitor counter error:", error);
      }
    }

    recordVisit();
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
