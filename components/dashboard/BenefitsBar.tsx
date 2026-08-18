export default function BenefitsBar() {
    return (
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-2xl border border-cyan-500 bg-zinc-900 p-5 text-center">
                <div className="text-3xl">🚚</div>

                <h3 className="mt-3 text-lg font-bold text-white">
                    Entrega Rápida
                </h3>

                <p className="mt-2 text-sm text-zinc-400">
                    Envio para todo o Brasil.
                </p>
            </div>

            <div className="rounded-2xl border border-cyan-500 bg-zinc-900 p-5 text-center">
                <div className="text-3xl">🔒</div>

                <h3 className="mt-3 text-lg font-bold text-white">
                    Compra Segura
                </h3>

                <p className="mt-2 text-sm text-zinc-400">
                    Ambiente protegido para suas compras.
                </p>
            </div>

            <div className="rounded-2xl border border-cyan-500 bg-zinc-900 p-5 text-center">
                <div className="text-3xl">💳</div>

                <h3 className="mt-3 text-lg font-bold text-white">
                    Parcelamento
                </h3>

                <p className="mt-2 text-sm text-zinc-400">
                    Pague da forma que preferir.
                </p>
            </div>

            <div className="rounded-2xl border border-cyan-500 bg-zinc-900 p-5 text-center">
                <div className="text-3xl">🎧</div>

                <h3 className="mt-3 text-lg font-bold text-white">
                    Suporte Gamer
                </h3>

                <p className="mt-2 text-sm text-zinc-400">
                    O Atlas está pronto para ajudar você.
                </p>
            </div>

        </section>
    );
}