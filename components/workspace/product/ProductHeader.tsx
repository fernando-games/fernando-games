export default function ProductHeader() {
    return (
        <div className="mb-8 rounded-2xl border border-cyan-500/30 bg-zinc-900 p-6">

            <div className="flex items-center justify-between">

                <div>
                    <h1 className="text-3xl font-bold text-white">
                        🛒 Produto Recomendado
                    </h1>

                    <p className="mt-2 text-zinc-400">
                        O Atlas encontrou a melhor opção para você.
                    </p>
                </div>

                <div className="rounded-full border border-cyan-500 bg-cyan-500/10 px-4 py-2 text-cyan-400 font-semibold">
                    ⭐ Recomendado pelo Atlas
                </div>

            </div>

        </div>
    );
}