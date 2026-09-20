"use client";

import { useState } from "react";

type MouseWorkspaceProps = {
    onBack: () => void;
};

type MouseProduct = {
    id: string;
    name: string;
    image: string;
    price: string;
    rating: number;
    specs: string[];
    description: string;
    atlas: string;
    affiliateUrl: string;
    badge: string;
};

const mouseProducts: MouseProduct[] = [
    {
        id: "g203",
        name: "Logitech G203 LIGHTSYNC",
        image: "/images/peripherals/g203.png",
        price: "R$ 99",
        rating: 5,
        badge: "MAIS VENDIDO",
        affiliateUrl: "https://meli.la/2RCTGYw",
        specs: [
            "Até 8.000 DPI",
            "6 botões programáveis",
            "Iluminação RGB LIGHTSYNC",
            "Sensor de alta precisão",
        ],
        description:
            "Mouse gamer compacto, preciso e com excelente custo-benefício para jogos e uso diário.",
        atlas:
            "Se você está começando no mundo gamer e quer um mouse confiável sem gastar muito, o G203 é uma ótima escolha. Ele oferece boa precisão, 6 botões programáveis e iluminação RGB LIGHTSYNC.",
    },

    {
        id: "cobra",
        name: "Redragon Cobra M711",
        image: "/images/peripherals/cobra-m711.png",
        price: "R$ 242",
        rating: 5,
        badge: "CUSTO-BENEFÍCIO",
        affiliateUrl: "https://meli.la/2mAaAm3",
        specs: [
            "Sensor de alta precisão",
            "7 botões programáveis",
            "Iluminação RGB",
            "Design ergonômico",
        ],
        description:
            "Mouse gamer com bastante controle e recursos para quem gosta de personalização.",
        atlas:
            "O Cobra M711 é uma opção interessante para quem quer mais botões e bastante liberdade para configurar os comandos. Ele combina ergonomia, RGB e boa precisão para jogos.",
    },

    {
        id: "deathadder",
        name: "Razer DeathAdder Essential",
        image: "/images/peripherals/deathadder-essential.png",
        price: "R$ 142",
        rating: 5,
        badge: "CLÁSSICO",
        affiliateUrl: "https://meli.la/2euH2Xs",
        specs: [
            "Sensor óptico de alta precisão",
            "5 botões programáveis",
            "Design ergonômico",
            "Construção resistente",
        ],
        description:
            "Um dos formatos mais conhecidos para quem procura conforto e controle durante longas sessões.",
        atlas:
            "Se conforto é prioridade para você, o DeathAdder é um modelo que merece atenção. O formato foi pensado para encaixar bem na mão e proporcionar controle durante sessões prolongadas.",
    },

    {
        id: "g305",
        name: "Logitech G305 LIGHTSPEED",
        image: "/images/peripherals/g305.png",
        price: "R$ 422",
        rating: 5,
        badge: "SEM FIO",
        affiliateUrl: "https://meli.la/2H4E6zp",
        specs: [
            "Tecnologia sem fio LIGHTSPEED",
            "Até 12.000 DPI",
            "6 botões programáveis",
            "Baixa latência",
        ],
        description:
            "Mouse sem fio focado em liberdade de movimento e desempenho gamer.",
        atlas:
            "Aqui a grande vantagem é a liberdade. O G305 entrega uma experiência sem fio com baixa latência e desempenho suficiente para jogos competitivos.",
    },

    {
        id: "haste",
        name: "HyperX Pulsefire Haste 2",
        image: "/images/peripherals/pulsefire-haste-2.png",
        price: "R$ 272",
        rating: 5,
        badge: "ULTRA LEVE",
        affiliateUrl: "https://meli.la/1tJpy8v",
        specs: [
            "Design ultraleve",
            "Sensor de alta precisão",
            "Botões programáveis",
            "Ideal para movimentos rápidos",
        ],
        description:
            "Mouse leve e rápido pensado para jogadores que gostam de agilidade e movimentos precisos.",
        atlas:
            "Se você gosta de movimentos rápidos, esse é o tipo de mouse que pode fazer diferença. O Pulsefire Haste 2 aposta em baixo peso e resposta rápida.",
    },

    {
        id: "gladius",
        name: "ASUS ROG Gladius III",
        image: "/images/peripherals/asus-rog-gladius-iii.png",
        price: "R$ 349",
        rating: 5,
        badge: "PREMIUM",
        affiliateUrl: "https://meli.la/2UCRNhh",
        specs: [
            "Sensor de alta precisão",
            "Conexão com e sem fio",
            "Botões programáveis",
            "Design ergonômico",
        ],
        description:
            "Mouse gamer premium desenvolvido para jogadores que buscam precisão, conforto e alto desempenho.",
        atlas:
            "Se você procura um mouse mais premium, o ROG Gladius III é uma opção interessante. Ele combina precisão, conforto e recursos avançados para quem quer elevar o nível do setup.",
    },

    // ============================================================
    // NOVOS MOUSES
    // ============================================================

    {
        id: "g502-hero",
        name: "Logitech G502 HERO",
        image: "",
        price: "Em atualização",
        rating: 5,
        badge: "HERO 25K",
        affiliateUrl: "https://meli.la/2NDYuaZ",
        specs: [
            "Sensor HERO 25K",
            "11 botões programáveis",
            "RGB LIGHTSYNC",
            "Ajuste de peso",
        ],
        description:
            "Mouse gamer avançado com muitos controles e recursos de personalização.",
        atlas:
            "O G502 HERO é uma escolha para quem gosta de bastante controle. Os 11 botões programáveis e o sistema de ajuste de peso permitem adaptar o mouse ao seu estilo de jogo.",
    },

    {
        id: "basilisk-v3",
        name: "Razer Basilisk V3",
        image: "",
        price: "Em atualização",
        rating: 5,
        badge: "CHROMA RGB",
        affiliateUrl: "https://meli.la/14qBMcH",
        specs: [
            "Sensor Focus 26K",
            "11 botões programáveis",
            "Scroll HyperScroll",
            "Razer Chroma RGB",
        ],
        description:
            "Mouse gamer ergonômico com foco em precisão, personalização e controle.",
        atlas:
            "O Basilisk V3 combina um formato ergonômico com muitos controles e recursos de personalização. É interessante para quem quer adaptar vários comandos ao mouse.",
    },

    {
        id: "pulsefire-core",
        name: "HyperX Pulsefire Core",
        image: "",
        price: "Em atualização",
        rating: 5,
        badge: "HYPERX",
        affiliateUrl: "https://meli.la/2CuMMau",
        specs: [
            "Sensor Pixart",
            "7 botões programáveis",
            "Iluminação RGB",
            "Design ergonômico",
        ],
        description:
            "Mouse gamer focado em conforto, precisão e controles personalizáveis.",
        atlas:
            "O Pulsefire Core é uma opção interessante para quem procura um mouse gamer tradicional, confortável e com recursos suficientes para jogos e uso diário.",
    },

    {
        id: "m913",
        name: "Redragon Impact Elite M913",
        image: "",
        price: "Em atualização",
        rating: 5,
        badge: "IMPACT ELITE",
        affiliateUrl: "https://meli.la/22yfhYF",
        specs: [
            "Conexão sem fio e com fio",
            "Botões laterais programáveis",
            "RGB",
            "Design ergonômico",
        ],
        description:
            "Mouse gamer versátil com foco em personalização, conectividade e grande quantidade de controles.",
        atlas:
            "O Impact Elite M913 chama atenção para quem gosta de muitos comandos disponíveis no mouse. A possibilidade de usar conexão sem fio ou com fio também aumenta a versatilidade.",
    },
];

export default function MouseWorkspace({
    onBack,
}: MouseWorkspaceProps) {
    const [selectedMouse, setSelectedMouse] = useState(mouseProducts[0]);

    const handleBuy = () => {
        if (!selectedMouse.affiliateUrl) {
            alert(
                "O link de compra deste produto ainda não foi configurado."
            );
            return;
        }

        window.open(
            selectedMouse.affiliateUrl,
            "_blank",
            "noopener,noreferrer"
        );
    };

    return (
        <div className="flex h-full min-h-[calc(100vh-140px)] flex-col rounded-2xl border border-cyan-500/70 bg-zinc-950 p-5">

            {/* =====================================================
                CABEÇALHO
            ====================================================== */}

            <div className="mb-5 flex items-center justify-between">

                <div>
                    <div className="flex items-center gap-3">
                        <h1 className="text-3xl font-extrabold text-white">
                            🖱️ Mouses Gamer
                        </h1>

                        <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-xs font-bold text-cyan-400">
                            10 PRODUTOS
                        </span>
                    </div>

                    <p className="mt-1 text-sm text-zinc-400">
                        Escolha o mouse perfeito para elevar seu desempenho.
                    </p>
                </div>

                <button
                    type="button"
                    onClick={onBack}
                    className="rounded-xl border border-cyan-400/50 bg-cyan-500 px-5 py-3 font-bold text-black transition hover:bg-cyan-400"
                >
                    ⬅️ Voltar
                </button>

            </div>

            {/* =====================================================
                ÁREA PRINCIPAL
            ====================================================== */}

            <div className="grid min-h-0 flex-1 grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_380px]">

                {/* =================================================
                    GRADE 5 X 5
                ================================================== */}

                <div className="min-h-0 overflow-y-auto pr-2">

                    <div className="mb-3 flex items-center justify-between">

                        <div>
                            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                                Catálogo de Mouses
                            </h2>

                            <p className="mt-1 text-xs text-zinc-600">
                                Selecione um produto para visualizar os detalhes.
                            </p>
                        </div>

                        <span className="text-xs font-bold text-zinc-500">
                            10 PRODUTOS
                        </span>

                    </div>

                    {/* GRADE 5 COLUNAS */}

                    <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 xl:grid-cols-5">

                        {mouseProducts.map((mouse) => {

                            const selected =
                                selectedMouse.id === mouse.id;

                            return (
                                <button
                                    type="button"
                                    key={mouse.id}
                                    onClick={() =>
                                        setSelectedMouse(mouse)
                                    }
                                    className={`group flex min-h-[250px] flex-col overflow-hidden rounded-xl border text-left transition duration-200 hover:-translate-y-1 ${selected
                                        ? "border-cyan-400 shadow-lg shadow-cyan-500/20"
                                        : "border-zinc-800 hover:border-cyan-500/60"
                                        } bg-zinc-900`}
                                >

                                    {/* IMAGEM */}

                                    <div className="relative flex h-36 items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-950 to-black">

                                        <span
                                            className={`absolute left-2 top-2 z-10 rounded-full px-2 py-1 text-[8px] font-extrabold ${selected
                                                ? "bg-cyan-400 text-black"
                                                : "bg-zinc-800 text-cyan-400"
                                                }`}
                                        >
                                            {mouse.badge}
                                        </span>

                                        {mouse.image ? (
                                            <img
                                                src={mouse.image}
                                                alt={mouse.name}
                                                className="h-full w-full object-contain p-4 transition duration-300 group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className="flex flex-col items-center justify-center gap-2">
                                                <span className="text-5xl">
                                                    🖱️
                                                </span>

                                                <span className="text-[8px] font-bold uppercase tracking-wider text-zinc-600">
                                                    Imagem em preparação
                                                </span>
                                            </div>
                                        )}

                                    </div>

                                    {/* INFORMAÇÕES */}

                                    <div className="flex flex-1 flex-col p-3">

                                        <h2
                                            className={`text-sm font-bold leading-tight ${selected
                                                ? "text-cyan-400"
                                                : "text-white group-hover:text-cyan-400"
                                                }`}
                                        >
                                            {mouse.name}
                                        </h2>

                                        <div className="mt-2 text-xs text-yellow-400">
                                            {"★".repeat(mouse.rating)}
                                        </div>

                                        <div className="mt-auto pt-3">

                                            <span className="block rounded-lg border border-cyan-500/40 py-2 text-center text-[10px] font-bold text-cyan-400 transition group-hover:bg-cyan-500 group-hover:text-black">
                                                VER STATUS
                                            </span>

                                        </div>

                                    </div>

                                </button>
                            );
                        })}

                    </div>

                </div>

                {/* =================================================
                    PAINEL LATERAL DE STATUS
                ================================================== */}

                <aside className="flex min-h-0 flex-col overflow-hidden rounded-2xl border border-cyan-500/60 bg-zinc-950">

                    {/* STATUS SUPERIOR */}

                    <div className="border-b border-zinc-800 bg-zinc-900/60 p-4">

                        <div className="flex items-center justify-between">

                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400">
                                    Status do Produto
                                </p>

                                <p className="mt-1 text-xs text-zinc-500">
                                    Monitoramento do catálogo
                                </p>
                            </div>

                            <span className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[10px] font-bold text-emerald-400">
                                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                                ATIVO
                            </span>

                        </div>

                    </div>

                    <div className="min-h-0 flex-1 overflow-y-auto">

                        {/* =================================================
                            IMAGEM PRINCIPAL
                        ================================================== */}

                        <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-950 to-black">

                            <span className="absolute left-4 top-4 z-10 rounded-full border border-cyan-500/60 bg-black/80 px-3 py-1 text-[9px] font-bold text-cyan-400">
                                ⭐ SELECIONADO
                            </span>

                            {selectedMouse.image ? (
                                <img
                                    src={selectedMouse.image}
                                    alt={selectedMouse.name}
                                    className="h-full w-full object-contain p-6"
                                />
                            ) : (
                                <div className="flex flex-col items-center gap-3">

                                    <span className="text-7xl">
                                        🖱️
                                    </span>

                                    <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-600">
                                        Imagem em preparação
                                    </span>

                                </div>
                            )}

                        </div>

                        {/* =================================================
                            DADOS DO PRODUTO
                        ================================================== */}

                        <div className="p-5">

                            <span className="inline-block rounded-full border border-cyan-500/50 px-3 py-1 text-[9px] font-bold text-cyan-400">
                                {selectedMouse.badge}
                            </span>

                            <h2 className="mt-3 text-2xl font-extrabold leading-tight text-white">
                                {selectedMouse.name}
                            </h2>

                            <div className="mt-2 text-yellow-400">
                                {"★".repeat(selectedMouse.rating)}
                            </div>

                            {/* STATUS */}

                            <div className="mt-5 grid grid-cols-2 gap-2">

                                <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-3">
                                    <p className="text-[9px] uppercase tracking-wider text-zinc-600">
                                        Catálogo
                                    </p>

                                    <p className="mt-1 text-xs font-bold text-emerald-400">
                                        ● ATIVO
                                    </p>
                                </div>

                                <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-3">
                                    <p className="text-[9px] uppercase tracking-wider text-zinc-600">
                                        Afiliado
                                    </p>

                                    <p className="mt-1 text-xs font-bold text-cyan-400">
                                        ● CONFIGURADO
                                    </p>
                                </div>

                            </div>

                            {/* PREÇO */}

                            <div className="mt-5">

                                <p className="text-[9px] font-bold uppercase tracking-wider text-zinc-500">
                                    Preço
                                </p>

                                <p className="mt-1 text-2xl font-extrabold text-cyan-400">
                                    {selectedMouse.price}
                                </p>

                            </div>

                            {/* DESCRIÇÃO */}

                            <p className="mt-4 text-sm leading-6 text-zinc-300">
                                {selectedMouse.description}
                            </p>

                            {/* ESPECIFICAÇÕES */}

                            <div className="mt-5">

                                <h3 className="font-bold text-white">
                                    ⚙️ Especificações
                                </h3>

                                <ul className="mt-3 space-y-2">

                                    {selectedMouse.specs.map((spec) => (
                                        <li
                                            key={spec}
                                            className="flex items-start gap-2 text-xs text-zinc-400"
                                        >
                                            <span className="text-cyan-400">
                                                ✓
                                            </span>

                                            <span>
                                                {spec}
                                            </span>
                                        </li>
                                    ))}

                                </ul>

                            </div>

                            {/* ATLAS */}

                            <div className="mt-5 rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-4">

                                <div className="flex items-center gap-2">

                                    <span className="text-xl">
                                        🤖
                                    </span>

                                    <h3 className="font-bold text-cyan-400">
                                        Análise do Atlas
                                    </h3>

                                </div>

                                <p className="mt-3 text-xs leading-5 text-zinc-300">
                                    {selectedMouse.atlas}
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* =================================================
                        BOTÃO DE COMPRA
                    ================================================== */}

                    <div className="border-t border-zinc-800 bg-zinc-900/50 p-4">

                        <button
                            type="button"
                            onClick={handleBuy}
                            className="w-full rounded-xl bg-cyan-500 py-4 font-extrabold text-black transition hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
                        >
                            🛒 COMPRAR AGORA
                        </button>

                        <p className="mt-2 text-center text-[9px] text-zinc-600">
                            Você será redirecionado para o Mercado Livre.
                        </p>

                    </div>

                </aside>

            </div>

        </div>
    );
}