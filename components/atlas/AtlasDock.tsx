"use client";

import { useState } from "react";
import AtlasCore from "./AtlasCore";

export default function AtlasDock() {
    const [opened, setOpened] = useState(false);
    const [asking, setAsking] = useState(false);
    const [chatOpen, setChatOpen] = useState(false);

    function callAtlas() {
        setOpened(true);

        setTimeout(() => {
            setAsking(true);
        }, 400);
    }

    return (
        <div className="relative">

            {/* Botão inicial */}
            {!opened && (
                <button
                    onClick={callAtlas}
                    className="
                        w-full
                        overflow-hidden
                        rounded-3xl
                        border
                        border-cyan-500
                        bg-zinc-950
                        transition
                        hover:scale-[1.02]
                        hover:border-cyan-300
                    "
                >
                    <img
                        src="/images/atlas.png"
                        alt="Atlas"
                        className="w-full"
                    />
                </button>
            )}

            {/* Pergunta */}
            {asking && (
                <div className="rounded-2xl border border-cyan-500 bg-zinc-900 p-6">

                    <h2 className="text-2xl font-bold text-cyan-400">
                        👋 Olá!
                    </h2>

                    <p className="mt-4 text-zinc-300">
                        Eu sou o Atlas.
                    </p>

                    <p className="mt-2 text-zinc-300">
                        Posso ajudar você?
                    </p>

                    <div className="mt-6 flex gap-3">

                        <button
                            onClick={() => {
                                setAsking(false);
                                setChatOpen(true);
                            }}
                            className="
                                flex-1
                                rounded-xl
                                bg-cyan-500
                                py-3
                                font-bold
                                text-black
                            "
                        >
                            ✅ SIM
                        </button>

                        <button
                            onClick={() => {
                                setOpened(false);
                                setAsking(false);
                                setChatOpen(false);
                            }}
                            className="
                                flex-1
                                rounded-xl
                                border
                                border-zinc-700
                                py-3
                                text-white
                            "
                        >
                            ❌ NÃO
                        </button>

                    </div>

                </div>
            )}

            {/* Chat do Atlas */}
            {chatOpen && (
                <div className="mt-4">
                    <AtlasCore />
                </div>
            )}

        </div>
    );
}