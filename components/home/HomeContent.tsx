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

type PeripheralWorkspace =
    | "none"
    | "hub"
    | "mouse"
    | "keyboard";

export default function HomeContent({ }: HomeContentProps) {
    const { homeState, changeMode } = useHome();

    const activeBanner = homeState.banner;

    const [peripheralWorkspace, setPeripheralWorkspace] =
        useState<PeripheralWorkspace>("none");

    // =========================
    // CENTRAL DE PERIFÉRICOS
    // =========================
    if (peripheralWorkspace === "hub") {
        return (
            <div className="h-[calc(100vh-140px)] overflow-y-auto pr-2">
                <div className="rounded-2xl border border-cyan-500/30 bg-zinc-950/80 p-6 shadow-2xl shadow-cyan-500/5">

                    <div className="mb-8">
                        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                            Fernando.Games
                        </span>

                        <h1 className="mt-2 text-4xl font-black uppercase tracking-tight text-white">
                            Central de Periféricos
                        </h1>

                        <p className="mt-2 max-w-2xl text-zinc-400">
                            Escolha o equipamento que você quer encontrar
                            para completar seu setup.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                        {/* MOUSE */}
                        <button
                            type="button"
                            onClick={() =>
                                setPeripheralWorkspace("mouse")
                            }
                            className="
                                group
                                rounded-2xl
                                border
                                border-cyan-500/20
                                bg-zinc-900
                                p-8
                                text-left
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:border-cyan-400
                                hover:bg-cyan-500/10
                            "
                        >
                            <div className="mb-5 text-5xl">
                                🖱️
                            </div>

                            <h2 className="text-2xl font-bold text-white">
                                Mouses Gamer
                            </h2>

                            <p className="mt-2 text-sm leading-6 text-zinc-500">
                                Encontre mouses para precisão, velocidade
                                e competitividade.
                            </p>

                            <div className="mt-6 text-sm font-bold text-cyan-400">
                                EXPLORAR MOUSES →
                            </div>
                        </button>

                        {/* TECLADO */}
                        <button
                            type="button"
                            onClick={() =>
                                setPeripheralWorkspace("keyboard")
                            }
                            className="
                                group
                                rounded-2xl
                                border
                                border-cyan-500/20
                                bg-zinc-900
                                p-8
                                text-left
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:border-cyan-400
                                hover:bg-cyan-500/10
                            "
                        >
                            <div className="mb-5 text-5xl">
                                ⌨️
                            </div>

                            <h2 className="text-2xl font-bold text-white">
                                Teclados Gamer
                            </h2>

                            <p className="mt-2 text-sm leading-6 text-zinc-500">
                                Mecânicos, RGB e modelos para elevar
                                seu setup.
                            </p>

                            <div className="mt-6 text-sm font-bold text-cyan-400">
                                EXPLORAR TECLADOS →
                            </div>
                        </button>

                    </div>

                    {/* VOLTAR PARA A LOJA */}
                    <div className="mt-8">
                        <button
                            type="button"
                            onClick={() => {
                                setPeripheralWorkspace("none");
                                changeMode("store");
                            }}
                            className="
                                rounded-xl
                                border
                                border-zinc-700
                                px-5
                                py-3
                                font-semibold
                                text-zinc-300
                                transition
                                hover:border-cyan-400
                                hover:text-cyan-400
                            "
                        >
                            ← Voltar
                        </button>
                    </div>

                </div>
            </div>
        );
    }

    // =========================
    // WORKSPACE TECLADOS
    // =========================
    if (peripheralWorkspace === "keyboard") {
        return (
            <div className="h-[calc(100vh-140px)] overflow-y-auto pr-2">
                <KeyboardWorkspace
                    onBack={() =>
                        setPeripheralWorkspace("hub")
                    }
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
                    onBack={() =>
                        setPeripheralWorkspace("hub")
                    }
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
    // WORKSPACE LOJA
    // =========================
    if (homeState.workspace === "store") {
        return (
            <div className="h-[calc(100vh-140px)] overflow-y-auto pr-2">

                <div className="rounded-2xl border border-cyan-500/30 bg-zinc-950/80 p-6 shadow-2xl shadow-cyan-500/5">

                    {/* CABEÇALHO */}
                    <div className="mb-8">

                        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                            Fernando.Games
                        </span>

                        <h1 className="mt-2 text-4xl font-black uppercase tracking-tight text-white">
                            Central da Loja
                        </h1>

                        <p className="mt-2 max-w-2xl text-zinc-400">
                            Encontre jogos, periféricos, computadores e tudo
                            para elevar seu setup ao próximo nível.
                        </p>

                    </div>

                    {/* BUSCA */}
                    <div className="mb-8">

                        <div className="flex items-center gap-3 rounded-xl border border-zinc-700 bg-zinc-900/80 px-5 py-4 transition focus-within:border-cyan-400">

                            <span className="text-xl">
                                🔎
                            </span>

                            <input
                                type="text"
                                placeholder="O que você está procurando?"
                                className="w-full bg-transparent text-white outline-none placeholder:text-zinc-500"
                            />

                        </div>

                    </div>

                    {/* CATEGORIAS */}
                    <div>

                        <div className="mb-4 flex items-center justify-between">

                            <h2 className="text-xl font-bold text-white">
                                Explore por categoria
                            </h2>

                            <span className="text-xs uppercase tracking-widest text-cyan-400">
                                FERNANDO.GAMES
                            </span>

                        </div>

                        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">

                            {/* PC */}
                            <button
                                type="button"
                                onClick={() => changeMode("pc")}
                                className="group rounded-2xl border border-cyan-500/20 bg-zinc-900 p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-500/10"
                            >
                                <div className="mb-4 text-4xl">
                                    🖥️
                                </div>

                                <h3 className="text-lg font-bold text-white">
                                    PC Gamer
                                </h3>

                                <p className="mt-1 text-sm text-zinc-500">
                                    Componentes e máquinas
                                </p>
                            </button>

                            {/* PERIFÉRICOS */}
                            <button
                                type="button"
                                onClick={() =>
                                    setPeripheralWorkspace("hub")
                                }
                                className="group rounded-2xl border border-cyan-500/20 bg-zinc-900 p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-500/10"
                            >
                                <div className="mb-4 text-4xl">
                                    🎧
                                </div>

                                <h3 className="text-lg font-bold text-white">
                                    Periféricos
                                </h3>

                                <p className="mt-1 text-sm text-zinc-500">
                                    Mouse, teclado e headset
                                </p>
                            </button>

                            {/* JOGOS */}
                            <button
                                type="button"
                                onClick={() => changeMode("games")}
                                className="group rounded-2xl border border-cyan-500/20 bg-zinc-900 p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-500/10"
                            >
                                <div className="mb-4 text-4xl">
                                    🎮
                                </div>

                                <h3 className="text-lg font-bold text-white">
                                    Jogos
                                </h3>

                                <p className="mt-1 text-sm text-zinc-500">
                                    Games para sua coleção
                                </p>
                            </button>

                            {/* MONITORES */}
                            <button
                                type="button"
                                className="group rounded-2xl border border-cyan-500/20 bg-zinc-900 p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-500/10"
                            >
                                <div className="mb-4 text-4xl">
                                    🖥️
                                </div>

                                <h3 className="text-lg font-bold text-white">
                                    Monitores
                                </h3>

                                <p className="mt-1 text-sm text-zinc-500">
                                    Imersão para seu setup
                                </p>
                            </button>

                            {/* PROMOÇÕES */}
                            <button
                                type="button"
                                onClick={() => changeMode("promotion")}
                                className="group rounded-2xl border border-cyan-500/20 bg-zinc-900 p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-500/10"
                            >
                                <div className="mb-4 text-4xl">
                                    🔥
                                </div>

                                <h3 className="text-lg font-bold text-white">
                                    Promoções
                                </h3>

                                <p className="mt-1 text-sm text-zinc-500">
                                    Ofertas em destaque
                                </p>
                            </button>

                            {/* OFERTAS */}
                            <button
                                type="button"
                                className="group rounded-2xl border border-cyan-500/20 bg-zinc-900 p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-500/10"
                            >
                                <div className="mb-4 text-4xl">
                                    ⚡
                                </div>

                                <h3 className="text-lg font-bold text-white">
                                    Ofertas
                                </h3>

                                <p className="mt-1 text-sm text-zinc-500">
                                    Produtos selecionados
                                </p>
                            </button>

                        </div>

                    </div>

                    {/* ATLAS */}
                    <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">

                        <div className="flex items-center gap-4">

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-2xl">
                                🤖
                            </div>

                            <div>

                                <h3 className="font-bold text-white">
                                    Precisa de ajuda?
                                </h3>

                                <p className="text-sm text-zinc-400">
                                    O Atlas pode encontrar o produto ideal
                                    para você.
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* VOLTAR */}
                    <div className="mt-8">

                        <button
                            type="button"
                            onClick={() => changeMode("atlas")}
                            className="rounded-xl border border-zinc-700 px-5 py-3 font-semibold text-zinc-300 transition hover:border-cyan-400 hover:text-cyan-400"
                        >
                            ← Voltar
                        </button>

                    </div>

                </div>

            </div>
        );
    }

    // =========================
    // HOME
    // =========================
    return (
        <div className="h-[calc(100vh-140px)] overflow-y-auto pr-2">

            <div className="flex flex-col gap-3">

                <HeroBanner
                    activeBanner={activeBanner}
                />

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