import AtlasHero from "./AtlasHero";
import HeroButtons from "./HeroButtons";

export default function Hero() {
    return (
        <section className="mx-auto flex min-h-[80vh] max-w-7xl items-center justify-between gap-16 px-8 py-16">

            {/* Atlas */}
            <div className="flex-1">
                <div className="text-white text-4xl">
                    ATLAS TESTE
                </div>
            </div>

            {/* Texto */}
            <div className="flex-1">
                <span className="rounded-full border border-cyan-500 px-4 py-1 text-sm text-cyan-400">
                    🤖 Guardião do Fernando.Games
                </span>

                <h1 className="mt-6 text-6xl font-extrabold text-white leading-tight">
                    Olá,
                    <br />
                    Explorador.
                </h1>

                <p className="mt-6 text-xl text-zinc-300 leading-9">
                    Eu sou o{" "}
                    <span className="font-semibold text-cyan-400">
                        Atlas
                    </span>
                    .
                    <br />
                    Meu trabalho é ajudar você a encontrar
                    <br />
                    o seu próximo nível.
                </p>

                <div className="mt-10">
                    <HeroButtons secondaryText="Explorar Loja" />
                </div>
            </div>
        </section>
    );
}