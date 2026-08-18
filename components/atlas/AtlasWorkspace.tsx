import GamesWorkspace from "./workspaces/GamesWorkspace";
type AtlasWorkspaceProps = {
    mode: string;
};

export default function AtlasWorkspace({ mode }: AtlasWorkspaceProps) {
    return (
        <aside className="h-[700px] rounded-2xl border border-cyan-500 bg-zinc-950 flex flex-col overflow-hidden">

            {/* Cabeçalho */}
            <div className="border-b border-cyan-500/20 p-4">

                <h2 className="text-cyan-400 text-xl font-bold">
                    🤖 Atlas Command Center
                </h2>

                <p className="text-zinc-400 text-sm mt-1">
                    Tudo o que o Atlas recomendar aparecerá aqui.
                </p>

            </div>

            {/* Conteúdo */}

            <div className="flex-1 flex items-center justify-center">

                <div className="text-center px-8">

                    {mode === "empty" && (
                        <div className="text-center px-8">

                            <div className="text-7xl mb-6">
                                🚀
                            </div>

                            <h3 className="text-2xl text-cyan-400 font-bold">
                                Nenhuma recomendação
                            </h3>

                            <p className="text-zinc-400 mt-4 leading-7">
                                Converse com o Atlas.
                            </p>

                            <p className="text-zinc-500 mt-2">
                                Jogos, PCs, periféricos e promoções aparecerão aqui.
                            </p>

                        </div>
                    )}

                    {mode === "games" && <GamesWorkspace />}

                    {mode === "pc" && (
                        <div className="text-center px-8">

                            <div className="text-7xl mb-6">
                                🖥️
                            </div>

                            <h3 className="text-2xl text-cyan-400 font-bold">
                                Montagem de PC
                            </h3>

                            <p className="text-zinc-400 mt-4">
                                Vamos montar uma configuração perfeita.
                            </p>

                        </div>
                    )}

                    {mode === "peripherals" && (
                        <div className="text-center px-8">

                            <div className="text-7xl mb-6">
                                🎧
                            </div>

                            <h3 className="text-2xl text-cyan-400 font-bold">
                                Periféricos
                            </h3>

                            <p className="text-zinc-400 mt-4">
                                Mouse, teclado, headset e muito mais.
                            </p>

                        </div>
                    )}

                    {mode === "promotions" && (
                        <div className="text-center px-8">

                            <div className="text-7xl mb-6">
                                🔥
                            </div>

                            <h3 className="text-2xl text-cyan-400 font-bold">
                                Promoções
                            </h3>

                            <p className="text-zinc-400 mt-4">
                                As melhores ofertas selecionadas pelo Atlas.
                            </p>

                        </div>
                    )}

                    {mode === "surprise" && (
                        <div className="text-center px-8">

                            <div className="text-7xl mb-6">
                                🎲
                            </div>

                            <h3 className="text-2xl text-cyan-400 font-bold">
                                Surpresa!
                            </h3>

                            <p className="text-zinc-400 mt-4">
                                O Atlas escolheu algo especial para você.
                            </p>

                        </div>
                    )}
                </div>

            </div>

            {/* Rodapé */}

            <div className="border-t border-cyan-500/20 p-4 text-center text-zinc-500">
                ◀────────────▶
            </div>

        </aside>
    );
}