export default function AtlasStatusCard() {
    return (
        <div className="rounded-xl border border-cyan-500 bg-zinc-900 p-3">

            <div className="flex items-center justify-between">

                <span className="text-sm text-zinc-400">
                    Status
                </span>

                <span className="text-sm font-bold text-green-400">
                    ● Online
                </span>

            </div>

            <div className="mt-3">

                <div className="mb-1 flex justify-between text-xs">

                    <span>Energia</span>

                    <span>100%</span>

                </div>

                <div className="h-2 rounded-full bg-zinc-700">
                    <div className="h-2 w-full rounded-full bg-cyan-400" />
                </div>

            </div>

            <div className="mt-3">

                <p className="text-xs text-zinc-400">
                    Missão
                </p>

                <p className="mt-1 text-sm font-semibold text-white">
                    Ajudar cada jogador a encontrar seu próximo nível.
                </p>

            </div>

        </div>
    );
}