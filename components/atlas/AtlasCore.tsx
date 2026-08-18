"use client";

import { useState } from "react";

import AtlasAvatar from "./AtlasAvatar";
import AtlasStatus from "./AtlasStatus";
import AtlasSpeech from "./AtlasSpeech";
import AtlasCommand from "./AtlasCommand";

import { AtlasEngine } from "@/atlas/core/AtlasEngine";
import { useHome } from "@/context/HomeContext";

const atlasEngine = new AtlasEngine();

export default function AtlasCore() {

    const { changeMode } = useHome();

    const [active, setActive] = useState(false);

    const [messages, setMessages] = useState([
        "Sistema em espera..."
    ]);

    async function typeMessage(text: string) {

        setMessages([""]);

        let current = "";

        for (const letter of text) {

            current += letter;

            setMessages([current]);

            await new Promise(resolve =>
                setTimeout(resolve, 18)
            );
        }
    }

    async function handleCommand(command: string) {

        setActive(true);

        const response = await atlasEngine.process({
            role: "user",
            content: command,
        });

        await typeMessage(response.message);

        switch (response.action) {

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
                {active ? "🟢 ATLAS ONLINE" : "⚡ ATIVAR ATLAS"}
            </button>

            <div className="mt-6">
                <AtlasCommand
                    onPc={() => handleCommand("pc")}
                    onGames={() => handleCommand("games")}
                    onPeripherals={() => handleCommand("peripherals")}
                />
            </div>

        </div>
    );
}