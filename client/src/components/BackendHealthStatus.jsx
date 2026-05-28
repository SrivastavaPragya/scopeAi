"use client";

import { useEffect, useState } from "react";

const CHECK_INTERVAL_MS = 30000;

export default function BackendHealthStatus() {
  const [status, setStatus] = useState("checking");

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const checkHealth = async () => {
      if (!apiUrl) {
        setStatus("down");
        return;
      }

      try {
        const res = await fetch(`${apiUrl}/api/health`, {
          method: "GET",
          cache: "no-store",
        });
        setStatus(res.ok ? "up" : "down");
      } catch {
        setStatus("down");
      }
    };

    checkHealth();
    const intervalId = window.setInterval(checkHealth, CHECK_INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, []);

  const isUp = status === "up";
  const isChecking = status === "checking";
  const label = isChecking
    ? "Checking API"
    : isUp
      ? "API healthy"
      : "API offline";

  return (
    <div
      className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-300"
      title={label}
      aria-label={label}
    >
      <span
        className={`h-2.5 w-2.5 rounded-full ${
          isChecking
            ? "animate-pulse bg-yellow-400"
            : isUp
              ? "bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.75)]"
              : "bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.75)]"
        }`}
      />
      <span className="hidden lg:inline">{label}</span>
    </div>
  );
}
