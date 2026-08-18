type AtlasHudProps = {
    status: string;
    mission: string;
    energy?: number;
    xp?: number;
    level?: number;
};

export default function AtlasHud({
    status,
    mission,
    energy = 100,
    xp = 72,
    level = 12,
}: AtlasHudProps) {
    return (
        <div className="mt-4 rounded-2xl border border-cyan-500/40 bg-zinc-900/80 p-4">

            {/* Cabeçalho */}
            <div className="flex items-center justify-between">

                <div>
                    <h2 className="text-xl font-bold text-cyan-400">
                        🤖 ATLAS
                    </h2>

                    <p className="text-xs text-zinc-400">
                        Inteligência Fernando.Games
                    </p>
                </div>

                <div className="text-right">
                    <p className="text-xs text-zinc-500">
                        Status
                    </p>

                    <p className="font-bold text-green-400">
                        {status}
                    </p>
                </div>

            </div>

            {/* Energia */}
            <div className="mt-5">

                <div className="mb-1 flex justify-between text-xs">
                    <span className="text-zinc-400">
                        Energia
                    </span>

                    <span className="text-cyan-300">
                        {energy}%
                    </span>
                </div>

                <div className="h-2 rounded-full bg-zinc-700">

                    <div
                        className="h-2 rounded-full bg-cyan-400 transition-all"
                        style={{ width: `${energy}%` }}
                    />

                </div>

            </div>

            {/* XP */}
            <div className="mt-4">

                <div className="mb-1 flex justify-between text-xs">
                    <span className="text-zinc-400">
                        XP
                    </span>

                    <span className="text-cyan-300">
                        {xp}%
                    </span>
                </div>

                <div className="h-2 rounded-full bg-zinc-700">

                    <div
                        className="h-2 rounded-full bg-violet-500 transition-all"
                        style={{ width: `${xp}%` }}
                    />

                </div>

            </div>

            {/* Missão */}
            <div className="mt-5 rounded-xl border border-cyan-500/20 bg-black/40 p-3">

                <p className="text-xs uppercase tracking-widest text-cyan-400">
                    MISSÃO
                </p>

                <p className="mt-2 text-sm leading-6 text-zinc-200 transition-all duration-300">
                    {mission}
                </p>

            </div>

            {/* Rodapé */}
            <div className="mt-5 flex items-center justify-between rounded-xl border border-cyan-500/20 bg-black/40 p-3">

                <div>

                    <p className="text-xs text-zinc-500">
                        Rank
                    </p>

                    <p className="font-semibold text-orange-400">
                        Guardião Gamer
                    </p>

                </div>

                <div className="text-right">

                    <p className="text-xs text-zinc-500">
                        Nível
                    </p>

                    <p className="text-3xl font-extrabold text-cyan-400">
                        {level}
                    </p>

                </div>

            </div>

        </div>
    );
}