export default function Header() {
    return (
        <header className="h-16 border-b border-cyan-500/20 bg-zinc-950">

            <div className="mx-auto flex h-full max-w-[1700px] items-center justify-between px-4">

                {/* Logo */}
                <div>

                    <h1 className="text-2xl font-extrabold text-cyan-400">
                        Fernando.Games
                    </h1>

                    <p className="text-xs text-zinc-500">
                        Seu próximo nível começa aqui.
                    </p>

                </div>

                {/* Busca */}
                <div className="w-[420px]">

                    <input
                        type="text"
                        placeholder="Pesquisar jogos, PCs e periféricos..."
                        className="w-full rounded-lg border border-cyan-500/20 bg-zinc-900 px-4 py-2 text-sm text-white outline-none focus:border-cyan-400"
                    />

                </div>

                {/* Ações */}
                <div className="flex items-center gap-4 text-xl">

                    <button className="transition hover:scale-110">❤️</button>

                    <button className="transition hover:scale-110">🔔</button>

                    <button className="transition hover:scale-110">🛒</button>

                    <button className="transition hover:scale-110">👤</button>

                </div>

            </div>

        </header>
    );
}