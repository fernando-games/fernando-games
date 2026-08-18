"use client";

type AtlasCommandProps = {
    onPc?: () => void;
    onGames?: () => void;
    onPeripherals?: () => void;
};

export default function AtlasCommand({
    onPc,
    onGames,
    onPeripherals,
}: AtlasCommandProps) {
    return (
        <div className="mt-6 space-y-3">

            <button
                onClick={onPc}
                className="w-full rounded-xl border border-cyan-500 bg-zinc-900 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-500 hover:text-black"
            >
                🖥️ Montar um PC
            </button>

            <button
                onClick={onGames}
                className="w-full rounded-xl border border-cyan-500 bg-zinc-900 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-500 hover:text-black"
            >
                🎮 Encontrar Jogos
            </button>

            <button
                onClick={onPeripherals}
                className="w-full rounded-xl border border-cyan-500 bg-zinc-900 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-500 hover:text-black"
            >
                🎧 Periféricos
            </button>

        </div>
    );
}