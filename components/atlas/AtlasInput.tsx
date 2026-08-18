"use client";

import { useState } from "react";

type AtlasInputProps = {
  onSend: (message: string) => void;
};

export default function AtlasInput({ onSend }: AtlasInputProps) {
  const [message, setMessage] = useState("");

  function handleSend() {
    if (!message.trim()) return;

    onSend(message);
    setMessage("");
  }

  return (
    <div className="flex gap-2 mt-4">
      <input
        type="text"
        placeholder="Converse com o Atlas..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSend();
        }}
        className="flex-1 rounded-xl bg-zinc-900 border border-cyan-500 px-4 py-2 text-white outline-none"
      />

      <button
        onClick={handleSend}
        className="rounded-xl bg-cyan-500 px-5 py-2 font-semibold text-black hover:bg-cyan-400 transition-colors"
      >
        Enviar
      </button>
    </div>
  );
}