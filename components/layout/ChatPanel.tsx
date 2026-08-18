"use client";

import AtlasChat from "../atlas/AtlasChat";

export default function ChatPanel() {
  return (
    <section className="flex h-full min-h-0 flex-col overflow-hidden rounded-3xl border border-cyan-500 bg-zinc-900 p-6">

      <h2 className="mb-4 shrink-0 text-3xl font-bold text-cyan-400">
        💬 Chat Atlas
      </h2>

      <div className="flex-1 min-h-0 overflow-hidden">
        <AtlasChat />
      </div>

    </section>
  );
}