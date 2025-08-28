// src/components/landing/UpcomingEvents.jsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

function formatDateRange(evt) {
  const start = evt.start?.dateTime || evt.start?.date;
  const end = evt.end?.dateTime || evt.end?.date;
  const s = start ? new Date(start) : null;
  const e = end ? new Date(end) : null;
  const opts = { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" };

  if (!s) return "TBA";
  if (!e || start.length === 10) {
    // All-day event or no end
    return s.toLocaleString("en-CA", { month: "short", day: "numeric" });
  }
  const sameDay = s.toDateString() === e.toDateString();
  if (sameDay) {
    return `${s.toLocaleString("en-CA", opts)} to ${e.toLocaleString("en-CA", { hour: "numeric", minute: "2-digit" })}`;
  }
  return `${s.toLocaleString("en-CA", opts)} to ${e.toLocaleString("en-CA", opts)}`;
}

export default function UpcomingEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/events");
        if (!res.ok) throw new Error("Failed to load events");
        const data = await res.json();
        setEvents(data?.events?.slice(0, 3) || []);
      } catch (e) {
        setErr(e.message);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[0,1,2].map((i) => (
          <div key={i} className="bg-[#0b1c3d] rounded-xl p-4 animate-pulse">
            <div className="h-5 w-1/2 bg-white/20 rounded mb-3" />
            <div className="h-4 w-3/4 bg-white/10 rounded mb-2" />
            <div className="h-4 w-2/3 bg-white/10 rounded" />
          </div>
        ))}
      </div>
    );
  }

  if (err) {
    return <p className="text-red-300">Could not load events. Please try again later.</p>;
  }

  if (!events.length) {
    return <p className="text-gray-300">No upcoming events found.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {events.map((evt) => (
        <Link href={evt.htmlLink || "/congress/meeting-links"} key={evt.id} className="block" target="_blank">
          <div className="bg-[#0b1c3d] rounded-xl p-4 hover:bg-[#1a2f57] transition">
            <p className="text-yellow-400 font-semibold">
              {evt.summary || "Untitled Event"}
            </p>
            <p className="text-gray-300 text-sm">{formatDateRange(evt)}</p>
            {evt.location && (
              <p className="text-gray-400 text-xs mt-1">{evt.location}</p>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}
