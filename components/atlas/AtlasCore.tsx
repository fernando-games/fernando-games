"use client";

import { useState } from "react";

import AtlasAvatar from "./AtlasAvatar";
import AtlasStatus from "./AtlasStatus";
import AtlasSpeech from "./AtlasSpeech";

import { useHome } from "@/context/HomeContext";

export default function AtlasCore() {
    const { changeMode } = useHome();

    const [active, setActive] = useState(false);

    const [messages, setMessages] = useState([
        "Sistema em espera..."
    ]);

    async function typeMessage(text: string) {
    setMessages([""]);

    let current = "";

    for (let i = 0; i < text.length; i += 3) {
        current += text.slice(i, i + 3);

        setMessages([current]);

        await new Promise(resolve =>
            setTimeout(resolve, 12)
        );
    }
}

    async function handleCommand(command: string) {
        try {
            setActive(true);

            const response = await fetch("/api/atlas", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    message: command,
                }),
            });

            if (!response.ok) {
                throw new Error(
                    `Erro na API do Atlas: ${response.status}`
                );
            }

            const data = await response.json();

            await typeMessage(
                data?.message ??
                "Não recebi uma resposta do meu sistema de inteligência. 🤖"
            );

            switch (data?.action) {
                case "build-pc":
                    changeMode("pc");
                    break;

                case "open-promotions":
                    changeMode("promotion");
                    break;

                case "open-games":
                    changeMode("games");
                    break;
            }

        } catch (error) {
            console.error("Erro ao chamar Atlas:", error);

            await typeMessage(
                "Tive um problema para me conectar ao meu sistema de inteligência. 🤖"
            );
        }
    }

    return (
        <div className="rounded-2xl border border-cyan-500 bg-zinc-900 p-6">

            <AtlasAvatar />

            <div className="mt-4">
                <AtlasStatus />
            </div>

            <div className="mt-6">
                <AtlasSpeech
                    messages={messages}
                />
            </div>

            <button
                onClick={() => handleCommand("Olá")}
                className="
                    mt-6
                    w-full
                    rounded-xl
                    border
                    border-cyan-400
                    bg-cyan-500/10
                    py-3
                    font-bold
                    text-cyan-300
                    transition
                    hover:bg-cyan-500/20
                "
            >
                {active
                    ? "🟢 ATLAS ONLINE"
                    : "⚡ ATIVAR ATLAS"}
            </button>

        </div>
    );
}