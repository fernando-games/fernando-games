export default function AtlasXpCard() {
    return (
        <div className="rounded-2xl border border-cyan-500/30 bg-zinc-900 p-3">

            <div className="flex items-center justify-between">
                <span className="text-sm text-zinc-400">
                    Nível
                </span>

                <span className="text-lg font-bold text-cyan-400">
                    12
                </span>
            </div>

            <div className="mt-3">

                <div className="mb-1 flex justify-between text-xs">
                    <span className="text-zinc-500">
                        XP
                    </span>

                    <span className="text-cyan-400">
                        8.450 / 10.000
                    </span>
                </div>

                <div className="h-2 rounded-full bg-zinc-800">

                    <div className="h-2 w-[84%] rounded-full bg-cyan-400"></div>

                </div>

            </div>

        </div>
    );
}