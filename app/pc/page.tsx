import PcBuilder from "./PcBuilder";

export default function PcPage() {
    return (
        <main className="min-h-screen bg-zinc-950 text-white">
            <div className="mx-auto max-w-7xl px-8 py-12">

                <h1 className="text-5xl font-bold text-cyan-400">
                    🖥️ Central de Montagem de PC
                </h1>

                <p className="mt-4 text-xl text-zinc-400">
                    Monte seu computador ideal com a ajuda do Atlas.
                </p>

                <div className="mt-12 grid gap-6 lg:grid-cols-3">

                    {/* Atlas */}
                    <div className="rounded-2xl border border-cyan-500/30 bg-zinc-900 p-8">

                        <h2 className="text-3xl font-bold">
                            🤖 Atlas
                        </h2>

                        <p className="mt-4 text-zinc-300 leading-8">
                            Olá! Eu sou o Atlas.
                            <br />
                            Vou ajudar você a montar o computador perfeito para o seu orçamento.
                        </p>

                        <button className="mt-8 rounded-xl bg-cyan-500 px-8 py-4 font-bold text-black hover:bg-cyan-400 transition">
                            🚀 Começar montagem
                        </button>

                    </div>

                    <PcBuilder />

                </div>

            </div>
        </main>
    );
}