"use client";

import { useState } from "react";

type GamesWorkspaceProps = {
    onBack?: () => void;
};

const fc25 = {
    id: "MLB5126243921",
    title: "EA Sports FC 25",
    platform: "PS5",
    type: "Jogo físico",
    description:
        "EA Sports FC 25 para PlayStation 5. Edição física.",
    affiliateUrl: "https://meli.la/2MSY4bn",
};

export default function GamesWorkspace({
    onBack,
}: GamesWorkspaceProps) {

    const [search, setSearch] = useState("");
    const [found, setFound] = useState(false);

    function handleSearch() {

        const query = search.toLowerCase().trim();

        if (!query) {
            return;
        }

        const isFc25 =
            query.includes("fc") ||
            query.includes("fifa") ||
            query.includes("25") ||
            query.includes("futebol");

        setFound(isFc25);
    }

    return (
        <div className="h-[calc(100vh-140px)] overflow-y-auto pr-2">

            <div className="rounded-2xl border border-cyan-500/30 bg-zinc-950/80 p-6">

                {/* CABEÇALHO */}

                <div className="mb-8 flex items-center justify-between gap-4">

                    <div>

                        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                            Fernando.Games
                        </span>

                        <h1 className="mt-2 text-4xl font-black text-white">
                            Jogos
                        </h1>

                        <p className="mt-2 text-zinc-400">
                            Diga ao Atlas qual jogo você está procurando.
                        </p>

                    </div>

                    {onBack && (
                        <button
                            type="button"
                            onClick={onBack}
                            className="rounded-xl border border-zinc-700 px-5 py-3 font-semibold text-zinc-300 transition hover:border-cyan-400 hover:text-cyan-400"
                        >
                            ← Voltar
                        </button>
                    )}

                </div>

                {/* BUSCA */}

                <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">

                    <div className="mb-4 flex items-center gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10">
                            🤖
                        </div>

                        <div>

                            <h2 className="font-bold text-white">
                                Procure seu jogo
                            </h2>

                            <p className="text-sm text-zinc-500">
                                Você procura. O Atlas encontra.
                            </p>

                        </div>

                    </div>

                    <div className="flex gap-3">

                        <input
                            type="text"
                            value={search}
                            onChange={(event) =>
                                setSearch(event.target.value)
                            }
                            onKeyDown={(event) => {
                                if (event.key === "Enter") {
                                    handleSearch();
                                }
                            }}
                            placeholder="Ex.: FC 25 para PS5..."
                            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-5 py-4 text-white outline-none placeholder:text-zinc-600 focus:border-cyan-400"
                        />

                        <button
                            type="button"
                            onClick={handleSearch}
                            className="rounded-xl bg-cyan-500 px-7 font-black text-black transition hover:bg-cyan-400"
                        >
                            🔎 BUSCAR
                        </button>

                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">

                        {[
                            "FC 25 para PS5",
                            "jogo de futebol",
                            "GTA para PC",
                            "jogo de corrida",
                        ].map((item) => (
                            <button
                                key={item}
                                type="button"
                                onClick={() => setSearch(item)}
                                className="rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2 text-xs text-zinc-400 transition hover:border-cyan-400 hover:text-cyan-400"
                            >
                                {item}
                            </button>
                        ))}

                    </div>

                </div>

                {/* RESULTADO */}

                <div className="mt-8">

                    {!found && (
                        <div className="rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/50 p-12 text-center">

                            <div className="text-5xl">
                                🎮
                            </div>

                            <h2 className="mt-4 text-xl font-bold text-white">
                                O que você quer jogar?
                            </h2>

                            <p className="mt-2 text-sm text-zinc-500">
                                Digite o nome do jogo que você procura.
                            </p>

                        </div>
                    )}

                    {found && (
                        <div>

                            <div className="mb-4 text-sm font-bold uppercase tracking-widest text-cyan-400">
                                ● Atlas encontrou
                            </div>

                            <div className="overflow-hidden rounded-2xl border border-cyan-500/30 bg-zinc-900">

                                <div className="grid md:grid-cols-[220px_1fr]">

                                    {/* PRODUTO */}

                                    <div className="flex min-h-[250px] items-center justify-center bg-gradient-to-br from-cyan-500/10 via-zinc-950 to-purple-500/10">

                                        <div className="text-center">

                                            <div className="text-7xl">
                                                ⚽
                                            </div>

                                            <div className="mt-4 font-black text-cyan-400">
                                                EA SPORTS
                                            </div>

                                            <div className="text-3xl font-black italic text-white">
                                                FC 25
                                            </div>

                                            <div className="mt-3 text-xs font-bold uppercase tracking-widest text-zinc-500">
                                                PS5
                                            </div>

                                        </div>

                                    </div>

                                    {/* INFORMAÇÕES */}

                                    <div className="p-6">

                                        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                                            {fc25.type}
                                        </span>

                                        <h2 className="mt-2 text-3xl font-black text-white">
                                            {fc25.title}
                                        </h2>

                                        <p className="mt-2 text-sm text-zinc-500">
                                            Plataforma:{" "}
                                            <span className="font-bold text-zinc-300">
                                                {fc25.platform}
                                            </span>
                                        </p>

                                        <p className="mt-5 text-sm leading-6 text-zinc-400">
                                            {fc25.description}
                                        </p>

                                        <div className="mt-6 flex flex-wrap gap-3">

                                            <a
                                                href={fc25.affiliateUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="rounded-xl bg-cyan-500 px-6 py-3 font-black text-black transition hover:bg-cyan-400"
                                            >
                                                🛒 COMPRAR AGORA
                                            </a>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>
                    )}

                </div>

                {/* ATLAS */}

                <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">

                    <div className="flex items-center gap-4">

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-2xl">
                            🤖
                        </div>

                        <div>

                            <h3 className="font-bold text-white">
                                Atlas está pronto
                            </h3>

                            <p className="text-sm text-zinc-400">
                                Procure pelo nome do jogo.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}