export default function StatsBar() {
    return (
        <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-2xl border border-cyan-500 bg-zinc-900 p-5">
                <p className="text-xs text-zinc-400">👥 Visitantes</p>
                <h3 className="mt-2 text-xl md:text-2xl font-bold text-cyan-400">
                    12.548
                </h3>
            </div>

            <div className="rounded-2xl border border-cyan-500 bg-zinc-900 p-5">
                <p className="text-xs text-zinc-400">🎮 Jogos</p>
                <h3 className="mt-2 text-xl md:text-2xl font-bold text-cyan-400">
                    +8.500
                </h3>
            </div>

            <div className="rounded-2xl border border-cyan-500 bg-zinc-900 p-5">
                <p className="text-xs text-zinc-400">⭐ Avaliação</p>
                <h3 className="mt-2 text-xl md:text-2xl font-bold text-cyan-400">
                    4.9/5
                </h3>
            </div>

            <div className="rounded-2xl border border-cyan-500 bg-zinc-900 p-5">
                <p className="text-xs text-zinc-400">🚚 Entrega</p>
                <h3 className="mt-2 text-xl md:text-2xl font-bold text-cyan-400">
                    Todo Brasil
                </h3>
            </div>

        </section>
    );
}