"use client";

import { useState } from "react";

type KeyboardWorkspaceProps = {
    onBack: () => void;
};

type KeyboardProduct = {
    id: string;
    name: string;
    image: string;
    price: string;
    rating: number;
    badge: string;
    specs: string[];
    description: string;
    atlas: string;
    affiliateUrl: string;
};

const keyboardProducts: KeyboardProduct[] = [
    {
        id: "g213",
        name: "Logitech G213 Prodigy",
        image: "/images/peripherals/g213.png",
        price: "R$ 480",
        rating: 5,
        badge: "GAMER",
        affiliateUrl: "https://meli.la/33EmhdQ",
        specs: [
            "Teclas resistentes a respingos",
            "Iluminação RGB",
            "Teclas multimídia",
            "Apoio para pulso",
        ],
        description:
            "Teclado gamer completo para quem busca conforto, iluminação RGB e praticidade no dia a dia.",
        atlas:
            "O G213 é uma escolha equilibrada para quem quer entrar no mundo dos teclados gamer. Ele combina iluminação RGB, teclas multimídia e uma construção pensada para uso diário.",
    },

    {
        id: "kumara",
        name: "Redragon Kumara K552",
        image: "/images/peripherals/kumara-k552.png",
        price: "R$ 279",
        rating: 5,
        badge: "MAIS VENDIDO",
        affiliateUrl: "https://meli.la/1S8mAm8",
        specs: [
            "Switches mecânicos",
            "Layout compacto",
            "Iluminação RGB",
            "Construção resistente",
        ],
        description:
            "Teclado mecânico compacto com excelente custo-benefício para jogadores que procuram resposta rápida.",
        atlas:
            "O Kumara K552 é uma das opções mais interessantes para quem quer experimentar um teclado mecânico sem gastar tanto. Compacto, resistente e direto ao ponto.",
    },

    {
        id: "ornata",
        name: "Razer Ornata V3",
        image: "/images/peripherals/ornata-v3.png",
        price: "R$ 388",
        rating: 5,
        badge: "PREMIUM",
        affiliateUrl: "https://meli.la/13xSwYe",
        specs: [
            "Switches mecha-membrane",
            "Iluminação RGB",
            "Teclas multimídia",
            "Apoio de pulso",
        ],
        description:
            "Teclado gamer focado em conforto, iluminação e uma experiência diferenciada de digitação.",
        atlas:
            "O Ornata V3 fica entre o mundo mecânico e o membrana. É uma opção interessante para quem quer uma experiência confortável com bastante personalidade visual.",
    },

    {
        id: "alloy",
        name: "HyperX Alloy Origins",
        image: "/images/peripherals/alloy-origins.png",
        price: "R$ 307",
        rating: 5,
        badge: "PRO",
        affiliateUrl: "https://meli.la/2WRmi3s",
        specs: [
            "Switches mecânicos",
            "Estrutura em alumínio",
            "Iluminação RGB",
            "Memória integrada",
        ],
        description:
            "Teclado mecânico de alto desempenho com construção robusta e visual profissional.",
        atlas:
            "Se você quer algo mais próximo de um equipamento profissional, o Alloy Origins é uma ótima opção. A construção em alumínio transmite bastante qualidade.",
    },

    {
        id: "rog-scope",
        name: "ASUS ROG Strix Scope",
        image: "/images/peripherals/rog-scope.png",
        price: "R$ 901",
        rating: 5,
        badge: "ROG",
        affiliateUrl: "https://meli.la/1hQykcJ",
        specs: [
            "Switches mecânicos",
            "Iluminação RGB",
            "Tecla Ctrl ampliada",
            "Construção premium",
        ],
        description:
            "Teclado gamer premium desenvolvido para jogadores que procuram desempenho e recursos avançados.",
        atlas:
            "O ROG Strix Scope é voltado para quem quer um teclado mais completo. O foco aqui é desempenho, construção e recursos voltados ao público gamer.",
    },

    {
        id: "k60",
        name: "Corsair K60 RGB Pro",
        image: "/images/peripherals/k60-rgb.png",
        price: "R$ 469",
        rating: 5,
        badge: "RGB",
        affiliateUrl: "https://meli.la/1WDaxKh",
        specs: [
            "Switches mecânicos",
            "Iluminação RGB",
            "Estrutura em alumínio",
            "Compatível com software Corsair",
        ],
        description:
            "Teclado mecânico com iluminação RGB e construção premium para setups gamer.",
        atlas:
            "O K60 RGB Pro é uma opção para quem quer montar um setup mais completo. O acabamento e a iluminação combinam muito bem com uma configuração gamer.",
    },
];

export default function KeyboardWorkspace({
    onBack,
}: KeyboardWorkspaceProps) {
    const [selectedKeyboard, setSelectedKeyboard] = useState(
        keyboardProducts[0]
    );

    const handleBuy = () => {
        if (!selectedKeyboard.affiliateUrl) {
            alert(
                "O link de compra deste teclado ainda não foi configurado."
            );
            return;
        }

        window.open(
            selectedKeyboard.affiliateUrl,
            "_blank",
            "noopener,noreferrer"
        );
    };

    return (
        <div className="relative flex min-h-[calc(100vh-140px)] flex-col overflow-hidden rounded-2xl border border-cyan-500/70 bg-black p-5">

            {/* EFEITOS DE FUNDO */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
                <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

                <div
                    className="absolute inset-0 opacity-[0.035]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(0,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,.7) 1px, transparent 1px)",
                        backgroundSize: "35px 35px",
                    }}
                />
            </div>

            {/* CONTEÚDO */}
            <div className="relative z-10">

                {/* CABEÇALHO */}
                <div className="mb-5 flex items-center justify-between">

                    <div>
                        <div className="mb-2 flex items-center gap-2">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />

                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                                Fernando.Games / Periféricos
                            </span>
                        </div>

                        <h1 className="text-3xl font-black tracking-tight text-white md:text-4xl">
                            ⌨️ TECLADOS{" "}
                            <span className="text-cyan-400">
                                GAMER
                            </span>
                        </h1>

                        <p className="mt-1 text-sm text-zinc-400">
                            Escolha o teclado perfeito para elevar o seu setup.
                        </p>
                    </div>

                    <button
                        onClick={onBack}
                        className="rounded-xl border border-cyan-400/60 bg-cyan-500/10 px-5 py-3 font-bold text-cyan-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]"
                    >
                        ⬅️ Voltar
                    </button>
                </div>

                {/* LINHA DE STATUS */}
                <div className="mb-5 flex flex-wrap gap-2">
                    <div className="rounded-full border border-cyan-500/30 bg-cyan-500/5 px-3 py-1 text-[10px] font-bold text-cyan-400">
                        ● 6 MODELOS
                    </div>

                    <div className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-[10px] font-bold text-zinc-400">
                        RGB
                    </div>

                    <div className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-[10px] font-bold text-zinc-400">
                        MECÂNICOS
                    </div>

                    <div className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-[10px] font-bold text-zinc-400">
                        GAMER
                    </div>
                </div>

                {/* ÁREA PRINCIPAL */}
                <div className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_390px]">

                    {/* 6 TECLADOS */}
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-3">

                        {keyboardProducts.map((keyboard) => {
                            const selected =
                                selectedKeyboard.id === keyboard.id;

                            return (
                                <button
                                    key={keyboard.id}
                                    onClick={() =>
                                        setSelectedKeyboard(keyboard)
                                    }
                                    className={`group relative flex min-h-[350px] flex-col overflow-hidden rounded-2xl border text-left transition-all duration-300 ${selected
                                        ? "border-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.18)]"
                                        : "border-zinc-800 hover:-translate-y-1 hover:border-cyan-500/70 hover:shadow-[0_0_25px_rgba(34,211,238,0.12)]"
                                        } bg-zinc-950`}
                                >

                                    {/* BRILHO DO CARD */}
                                    <div
                                        className={`pointer-events-none absolute inset-x-0 top-0 h-px transition ${selected
                                            ? "bg-cyan-300 shadow-[0_0_15px_rgba(34,211,238,1)]"
                                            : "bg-cyan-500/20 group-hover:bg-cyan-400/70"
                                            }`}
                                    />

                                    {/* IMAGEM */}
                                    <div className="relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-950 to-black">

                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_65%)]" />

                                        <span
                                            className={`absolute left-3 top-3 z-10 rounded-full border px-3 py-1 text-[9px] font-black tracking-wider ${selected
                                                ? "border-cyan-300 bg-cyan-400 text-black"
                                                : "border-cyan-500/40 bg-black/80 text-cyan-400"
                                                }`}
                                        >
                                            {keyboard.badge}
                                        </span>

                                        {selected && (
                                            <span className="absolute right-3 top-3 z-10 rounded-full border border-cyan-400/40 bg-black/80 px-2 py-1 text-[9px] font-bold text-cyan-300">
                                                ✓ SELECIONADO
                                            </span>
                                        )}

                                        <img
                                            src={keyboard.image}
                                            alt={keyboard.name}
                                            className="relative z-[1] h-full w-full object-contain p-6 transition duration-500 group-hover:scale-110"
                                        />

                                    </div>

                                    {/* INFORMAÇÕES */}
                                    <div className="flex flex-1 flex-col border-t border-zinc-800 bg-zinc-950 p-4">

                                        <h2
                                            className={`text-lg font-black leading-tight ${selected
                                                ? "text-cyan-400"
                                                : "text-white group-hover:text-cyan-400"
                                                }`}
                                        >
                                            {keyboard.name}
                                        </h2>

                                        <div className="mt-2 flex items-center gap-2">
                                            <span className="text-sm tracking-widest text-yellow-400">
                                                {"★".repeat(keyboard.rating)}
                                            </span>

                                            <span className="text-[10px] text-zinc-600">
                                                5.0
                                            </span>
                                        </div>

                                        <div className="mt-auto pt-4">
                                            <span
                                                className={`block rounded-lg border py-2.5 text-center text-xs font-black uppercase tracking-wider transition-all ${selected
                                                    ? "border-cyan-400 bg-cyan-500 text-black shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                                                    : "border-cyan-500/40 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black"
                                                    }`}
                                            >
                                                {selected
                                                    ? "✓ Selecionado"
                                                    : "Ver detalhes"}
                                            </span>
                                        </div>

                                    </div>
                                </button>
                            );
                        })}

                    </div>

                    {/* PAINEL DIREITO */}
                    <aside className="flex flex-col overflow-hidden rounded-2xl border border-cyan-500/60 bg-zinc-950 shadow-[0_0_35px_rgba(34,211,238,0.08)]">

                        {/* IMAGEM PRINCIPAL */}
                        <div className="relative flex h-72 items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-900 via-black to-zinc-950">

                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_65%)]" />

                            <div className="absolute left-4 top-4 z-10 rounded-full border border-cyan-500/50 bg-black/80 px-3 py-1 text-[10px] font-black tracking-wider text-cyan-400">
                                ⭐ PRODUTO SELECIONADO
                            </div>

                            <div className="absolute bottom-4 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

                            <img
                                src={selectedKeyboard.image}
                                alt={selectedKeyboard.name}
                                className="relative z-[1] h-full w-full object-contain p-8 transition-all duration-300"
                            />
                        </div>

                        {/* INFORMAÇÕES */}
                        <div className="flex flex-1 flex-col p-5">

                            <span className="mb-3 w-fit rounded-full border border-cyan-500/40 bg-cyan-500/5 px-3 py-1 text-[9px] font-black tracking-wider text-cyan-400">
                                {selectedKeyboard.badge}
                            </span>

                            <h2 className="text-2xl font-black leading-tight text-white">
                                {selectedKeyboard.name}
                            </h2>

                            <div className="mt-2 flex items-center gap-2">
                                <span className="tracking-widest text-yellow-400">
                                    {"★".repeat(selectedKeyboard.rating)}
                                </span>

                                <span className="text-xs text-zinc-500">
                                    Excelente avaliação
                                </span>
                            </div>

                            <div className="mt-3">
                                <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                                    A partir de
                                </p>
                                <p className="text-3xl font-black text-cyan-400">
                                    {selectedKeyboard.price}
                                </p>
                            </div>

                            <div className="my-4 h-px bg-gradient-to-r from-cyan-500/40 via-zinc-800 to-transparent" />

                            <p className="text-sm leading-6 text-zinc-300">
                                {selectedKeyboard.description}
                            </p>

                            {/* ESPECIFICAÇÕES */}
                            <div className="mt-5">

                                <h3 className="mb-3 text-sm font-black uppercase tracking-wider text-white">
                                    ⚙️ Especificações
                                </h3>

                                <div className="grid grid-cols-1 gap-2">
                                    {selectedKeyboard.specs.map((spec) => (
                                        <div
                                            key={spec}
                                            className="rounded-lg border border-zinc-800 bg-zinc-900/70 px-3 py-2 text-xs text-zinc-300"
                                        >
                                            <span className="mr-2 text-cyan-400">
                                                ✓
                                            </span>

                                            {spec}
                                        </div>
                                    ))}
                                </div>

                            </div>

                            {/* ATLAS */}
                            <div className="mt-5 rounded-xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/5 to-zinc-900 p-4">

                                <div className="flex items-center gap-2">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-400/50 bg-cyan-500/10">
                                        🤖
                                    </div>

                                    <div>
                                        <h3 className="text-sm font-black text-cyan-400">
                                            Atlas recomenda
                                        </h3>

                                        <p className="text-[9px] uppercase tracking-wider text-zinc-600">
                                            Análise Fernando.Games
                                        </p>
                                    </div>
                                </div>

                                <p className="mt-3 text-xs leading-5 text-zinc-300">
                                    {selectedKeyboard.atlas}
                                </p>

                            </div>

                            {/* COMPRA */}
                            <div className="mt-auto pt-5">

                                <button
                                    onClick={handleBuy}
                                    className="group relative w-full overflow-hidden rounded-xl bg-cyan-500 py-4 font-black tracking-wide text-black transition-all duration-200 hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]"
                                >
                                    <span className="relative z-10">
                                        🛒 COMPRAR AGORA
                                    </span>

                                    <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
                                </button>

                                <p className="mt-2 text-center text-[10px] text-zinc-600">
                                    Você será redirecionado para o site parceiro.
                                </p>

                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </div>
    );
}