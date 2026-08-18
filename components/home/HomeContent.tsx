"use client";

import { useState } from "react";

import { useHome } from "../../context/HomeContext";

import HeroBanner from "./HeroBanner";
import StatsBar from "../dashboard/StatsBar";
import FeaturedSection from "../dashboard/FeaturedSection";
import FooterBar from "../dashboard/FooterBar";

import GamesWorkspace from "../atlas/workspaces/GamesWorkspace";
import MouseWorkspace from "../workspace/MouseWorkspace";
import KeyboardWorkspace from "../workspace/KeyboardWorkspace";

type HomeContentProps = {};

type PeripheralWorkspace = "none" | "mouse" | "keyboard";

export default function HomeContent({ }: HomeContentProps) {
    const { homeState, changeMode } = useHome();

    const activeBanner = homeState.banner;

    const [peripheralWorkspace, setPeripheralWorkspace] =
        useState<PeripheralWorkspace>("none");

    // =========================
    // WORKSPACE TECLADOS
    // =========================
    if (peripheralWorkspace === "keyboard") {
        return (
            <div className="h-[calc(100vh-140px)] overflow-y-auto pr-2">
                <KeyboardWorkspace
                    onBack={() => setPeripheralWorkspace("none")}
                />
            </div>
        );
    }

    // =========================
    // WORKSPACE MOUSE
    // =========================
    if (peripheralWorkspace === "mouse") {
        return (
            <div className="h-[calc(100vh-140px)] overflow-y-auto pr-2">
                <MouseWorkspace
                    onBack={() => setPeripheralWorkspace("none")}
                />
            </div>
        );
    }

    // =========================
    // WORKSPACE PC
    // =========================
    if (homeState.workspace === "pc") {
        return (
            <div className="flex h-full flex-col items-center justify-center gap-6 rounded-2xl border border-cyan-500 bg-zinc-900">
                <h1 className="text-3xl font-bold text-cyan-400">
                    🖥️ Central de Montagem de PC
                </h1>

                <button
                    onClick={() => changeMode("atlas")}
                    className="rounded-xl bg-cyan-500 px-6 py-3 font-bold text-black hover:bg-cyan-400"
                >
                    ⬅️ Voltar
                </button>
            </div>
        );
    }

    // =========================
    // WORKSPACE JOGOS
    // =========================
    if (homeState.workspace === "games") {
        return <GamesWorkspace />;
    }

    // =========================
    // WORKSPACE PROMOÇÕES
    // =========================
    if (homeState.workspace === "promotion") {
        return (
            <div className="flex h-full flex-col items-center justify-center gap-6 rounded-2xl border border-cyan-500 bg-zinc-900">
                <h1 className="text-3xl font-bold text-cyan-400">
                    🔥 Área de Promoções
                </h1>

                <button
                    onClick={() => changeMode("atlas")}
                    className="rounded-xl bg-cyan-500 px-6 py-3 font-bold text-black hover:bg-cyan-400"
                >
                    ⬅️ Voltar
                </button>
            </div>
        );
    }

    // =========================
    // HOME
    // =========================
    return (
        <div className="h-[calc(100vh-140px)] overflow-y-auto pr-2">
            <div className="flex flex-col gap-3">

                <HeroBanner activeBanner={activeBanner} />

                <StatsBar />

                <FeaturedSection
                    onMouseClick={() => {
                        setPeripheralWorkspace("mouse");
                    }}
                    onKeyboardClick={() => {
                        setPeripheralWorkspace("keyboard");
                    }}
                />

                <FooterBar />

            </div>
        </div>
    );
}