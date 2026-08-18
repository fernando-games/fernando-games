"use client";

import { products } from "../../data/games";

type AtlasGamesProps = {
    onSelect?: (game: string) => void;
};

export default function AtlasGames({
    onSelect,
}: AtlasGamesProps) {

    const games = products.filter(
        (product) => product.category === "game"
    );

    return (
        <div className="mt-5 rounded-2xl border border-cyan-500/20 bg-zinc-900 p-4">

            <p className="text-center text-sm leading-6 text-zinc-300">

                🎮{" "}
                <span className="font-semibold text-cyan-400">
                    Qual jogo você pretende jogar?
                </span>

            </p>

            <div className="mt-5 space-y-2">

                {games.map((game) => (

                    <button
                        key={game.id}
                        onClick={() => onSelect?.(game.title)}
                        className="w-full rounded-xl bg-cyan-500 py-2 font-semibold text-black transition hover:bg-cyan-400"
                    >
                        🎮 {game.title}
                    </button>

                ))}

                <button
                    onClick={() => onSelect?.("Outro jogo")}
                    className="w-full rounded-xl border border-cyan-500 py-2 text-cyan-300 transition hover:bg-cyan-500 hover:text-black"
                >
                    Outro jogo
                </button>

            </div>

        </div>
    );
}