export default function PcBuildPage() {
    return (
        <main className="min-h-screen bg-zinc-950 text-white">

            <div className="mx-auto max-w-7xl p-10">

                <h1 className="text-5xl font-bold text-cyan-400">
                    🖥️ Configuração criada pelo Atlas
                </h1>

                <p className="mt-3 text-zinc-400 text-xl">
                    Build personalizada para jogar GTA VI em Ultra.
                </p>

                <div className="mt-10 grid grid-cols-2 gap-10">

                    {/* Imagem */}
                    <div className="rounded-3xl border border-cyan-500 bg-zinc-900 p-8">

                        <div className="h-[420px] rounded-2xl bg-zinc-800 flex items-center justify-center text-4xl">
                            🖥️ IMAGEM DO PC
                        </div>

                    </div>

                    {/* Informações */}
                    <div className="space-y-5">

                        <Card titulo="🧠 Processador" valor="Ryzen 7 7700" />

                        <Card titulo="🎮 Placa de Vídeo" valor="RTX 4070" />

                        <Card titulo="⚡ Memória" valor="32GB DDR5" />

                        <Card titulo="💾 SSD" valor="SSD NVMe 1TB" />

                        <Card titulo="🔋 Fonte" valor="750W 80 Plus Gold" />

                        <Card titulo="🖥️ Placa-mãe" valor="B650M" />

                    </div>

                </div>

                <div className="mt-12 rounded-3xl border border-cyan-500 bg-zinc-900 p-8">

                    <h2 className="text-3xl font-bold text-cyan-400">
                        🎮 Desempenho estimado
                    </h2>

                    <div className="mt-6 space-y-3 text-xl">

                        <p>GTA VI → 140 FPS</p>

                        <p>Cyberpunk 2077 → 120 FPS</p>

                        <p>Red Dead Redemption 2 → 150 FPS</p>

                        <p>Black Myth Wukong → 95 FPS</p>

                    </div>

                </div>

                <div className="mt-12 rounded-3xl border border-cyan-500 bg-zinc-900 p-8">

                    <h2 className="text-3xl font-bold text-cyan-400">
                        🤖 Análise do Atlas
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-zinc-300">
                        Escolhi esta configuração porque ela oferece excelente desempenho
                        para GTA VI em qualidade Ultra, mantendo margem para upgrades
                        futuros e ótimo custo-benefício.
                    </p>

                </div>

            </div>

        </main>
    );
}

function Card({
    titulo,
    valor,
}: {
    titulo: string;
    valor: string;
}) {
    return (
        <div className="rounded-2xl border border-cyan-500 bg-zinc-900 p-5 transition-all duration-300 hover:border-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]">

            <div className="flex items-center justify-between">

                <div>

                    <h3 className="text-xl font-bold text-cyan-400">
                        {titulo}
                    </h3>

                    <p className="mt-2 text-lg text-zinc-300">
                        {valor}
                    </p>

                </div>

                <button className="rounded-xl bg-cyan-500 px-5 py-3 font-bold text-black transition hover:scale-105 hover:bg-cyan-400">

                    🔍 Ver Produto

                </button>

            </div>

        </div>
    );
}