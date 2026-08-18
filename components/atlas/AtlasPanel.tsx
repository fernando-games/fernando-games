"use client";

import AtlasChat from "../atlas/AtlasChat";

export default function ChatPanel() {
  return (
    <section className="h-full rounded-3xl border border-cyan-500 bg-zinc-900 p-4">
      <AtlasChat />
    </section>
  );
}