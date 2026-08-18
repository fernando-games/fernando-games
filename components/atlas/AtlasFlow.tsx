
import AtlasGames from "./AtlasGames";
type AtlasState =
    | "welcome"
    | "budget"
    | "games"
    | "parts"
    | "resolution"
    | "recommendation"
    | "finished";

type AtlasFlowProps = {
    state: AtlasState;
    setState: React.Dispatch<React.SetStateAction<AtlasState>>;
};

export default function AtlasFlow({
    state,
    setState,
}: AtlasFlowProps) {

    switch (state) {

        case "welcome":
            return null;

        case "budget":
            return (

                <div className="mt-5 rounded-2xl border border-cyan-500/20 bg-zinc-900 p-4">

                    <p className="text-center text-sm leading-6 text-zinc-300">

                        💰 <span className="font-semibold text-cyan-400">
                            Qual é o seu orçamento?
                        </span>

                    </p>

                    <div className="mt-5 space-y-2">

                        <button
                            onClick={() => setState("games")}
                            className="w-full rounded-xl bg-cyan-500 py-2 font-semibold text-black hover:bg-cyan-400 transition"
                        >
                            Até R$ 3.000
                        </button>

                        <button className="w-full rounded-xl bg-cyan-500 py-2 font-semibold text-black hover:bg-cyan-400 transition">
                            Até R$ 5.000
                        </button>

                        <button className="w-full rounded-xl bg-cyan-500 py-2 font-semibold text-black hover:bg-cyan-400 transition">
                            Até R$ 8.000
                        </button>

                        <button className="w-full rounded-xl border border-cyan-500 py-2 text-cyan-300 hover:bg-cyan-500 hover:text-black transition">
                            Outro valor
                        </button>

                    </div>

                </div>

            );

        case "recommendation":
            return (
                <div className="mt-5 rounded-2xl border border-cyan-500/20 bg-zinc-900 p-4">

                    <p className="text-center text-sm leading-6 text-zinc-200">

                        🤖{" "}
                        <span className="font-semibold text-cyan-400">
                            Boa escolha!
                        </span>

                    </p>

                    <p className="mt-3 text-center text-sm leading-6 text-zinc-400">
                        Vou analisar esse jogo e encontrar as melhores opções
                        para você.
                    </p>

                    <button
                        onClick={() => setState("finished")}
                        className="mt-5 w-full rounded-xl bg-cyan-500 py-2 font-semibold text-black transition hover:bg-cyan-400"
                    >
                        🔎 Ver recomendação
                    </button>

                </div>
            );

        case "parts":
        case "resolution":
        case "finished":
            return null;
    }
}