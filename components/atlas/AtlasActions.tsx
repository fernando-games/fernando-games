type AtlasActionsProps = {
    onSelect: (
        action:
            | "pc"
            | "games"
            | "peripherals"
            | "promotion"
    ) => void;
};

export default function AtlasActions({
    onSelect,
}: AtlasActionsProps) {
    return (
        <div className="mt-5 space-y-2">

            <button
                onClick={() => onSelect("pc")}
                className="w-full rounded-xl bg-cyan-500 py-3 font-semibold text-black transition hover:bg-cyan-400"
            >
                🖥️ PCs Gamer
            </button>

            <button
                onClick={() => onSelect("games")}
                className="w-full rounded-xl border border-cyan-500 py-3 text-cyan-300 transition hover:bg-cyan-500 hover:text-black"
            >
                🎮 Jogos
            </button>

            <button
                onClick={() => onSelect("peripherals")}
                className="w-full rounded-xl border border-cyan-500 py-3 text-cyan-300 transition hover:bg-cyan-500 hover:text-black"
            >
                🎧 Periféricos
            </button>

            <button
                onClick={() => onSelect("promotion")}
                className="w-full rounded-xl border border-cyan-500 py-3 text-cyan-300 transition hover:bg-cyan-500 hover:text-black"
            >
                🔥 Promoções
            </button>

        </div>
    );
}