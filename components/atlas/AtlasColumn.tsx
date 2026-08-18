"use client";

import { useState } from "react";
import AtlasDock from "./AtlasDock";

import AtlasFlow from "./AtlasFlow";
import { useHome } from "../../context/HomeContext";
import AtlasSpeech from "../../atlas/AtlasSpeech";


type AtlasState =
    | "welcome"
    | "budget"
    | "games"
    | "parts"
    | "resolution"
    | "recommendation"
    | "finished";

export default function AtlasColumn() {

    const { changeMode } = useHome();

    const [atlasState, setAtlasState] =
        useState<AtlasState>("welcome");

    return (

        <div className="flex h-full flex-col rounded-2xl bg-gradient-to-b from-zinc-900 to-black p-6">

            <div className="flex flex-col items-center">

                <div className="relative w-full max-w-xs">

                    <AtlasDock />

                </div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-wider text-cyan-400">
                    ATLAS
                </h2>

                <p className="mt-2 text-center text-sm text-zinc-400">
                    Inteligência Artificial
                    <br />
                    Fernando.Games
                </p>

                <div className="mt-6 h-1 w-32 rounded-full bg-cyan-500" />

                <div className="mt-4 rounded-full border border-cyan-500/40 px-4 py-1 text-xs font-semibold text-cyan-300">
                    ● ONLINE
                </div>

            </div>

            <AtlasSpeech
                message="Olá! 👋 Eu sou o Atlas."
            />

            <AtlasFlow
                state={atlasState}
                setState={setAtlasState}
            />

        </div>

    );

}