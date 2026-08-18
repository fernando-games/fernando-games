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
        price: "R$ 119,90",
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
        price: "R$ 129,90",
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
        price: "R$ 149,90",
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
        price: "R$ 229,90",
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
        price: "R$ 299,90",
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
        price: "R$ 349,90",
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

            {/* CABEÇALHO */}
            <div className="mb-5 flex items-center justify-between">

                <div>
                    <h1 className="text-3xl font-extrabold text-white">
                        🖱️ Mouses Gamer
                    </h1>

                    <p className="mt-1 text-sm text-zinc-400">
                        Escolha o mouse perfeito para elevar seu desempenho.
                    </p>
                </div>

                <button
                    onClick={onBack}
                    className="rounded-xl border border-cyan-400/50 bg-cyan-500 px-5 py-3 font-bold text-black transition hover:bg-cyan-400"
                >
                    ⬅️ Voltar
                </button>
            </div>

            {/* ÁREA PRINCIPAL */}
            <div className="grid flex-1 grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_380px]">

                {/* VITRINE */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-3">

                    {mouseProducts.map((mouse) => {
                        const selected = selectedMouse.id === mouse.id;

                        return (
                            <button
                                key={mouse.id}
                                onClick={() => setSelectedMouse(mouse)}
                                className={`group flex min-h-[330px] flex-col overflow-hidden rounded-2xl border text-left transition duration-200 hover:-translate-y-1 ${selected
                                    ? "border-cyan-400 shadow-lg shadow-cyan-500/20"
                                    : "border-zinc-700 hover:border-cyan-500/60"
                                    } bg-zinc-900`}
                            >

                                {/* IMAGEM */}
                                <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-950 to-black">

                                    <span
                                        className={`absolute left-3 top-3 z-10 rounded-full px-3 py-1 text-[10px] font-extrabold ${selected
                                            ? "bg-cyan-400 text-black"
                                            : "bg-zinc-800 text-cyan-400"
                                            }`}
                                    >
                                        {mouse.badge}
                                    </span>

                                    <img
                                        src={mouse.image}
                                        alt={mouse.name}
                                        className="h-full w-full object-contain p-6 transition duration-300 group-hover:scale-105"
                                    />
                                </div>

                                {/* INFORMAÇÕES */}
                                <div className="flex flex-1 flex-col p-4">

                                    <h2
                                        className={`text-lg font-bold leading-tight ${selected
                                            ? "text-cyan-400"
                                            : "text-white group-hover:text-cyan-400"
                                            }`}
                                    >
                                        {mouse.name}
                                    </h2>

                                    <div className="mt-2 text-sm text-yellow-400">
                                        {"★".repeat(mouse.rating)}
                                    </div>

                                    <p className="mt-1 text-lg font-extrabold text-cyan-400">
                                        {mouse.price}
                                    </p>

                                    <div className="mt-auto pt-3">
                                        <span className="block rounded-lg border border-cyan-500/60 py-2 text-center text-sm font-bold text-cyan-400 transition group-hover:bg-cyan-500 group-hover:text-black">
                                            Ver detalhes
                                        </span>
                                    </div>

                                </div>
                            </button>
                        );
                    })}

                </div>

                {/* PAINEL DIREITO */}
                <aside className="flex flex-col overflow-hidden rounded-2xl border border-cyan-500/60 bg-zinc-950">

                    {/* IMAGEM PRINCIPAL */}
                    <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-950 to-black">

                        <span className="absolute left-4 top-4 z-10 rounded-full border border-cyan-500/60 bg-black/80 px-3 py-1 text-[10px] font-bold text-cyan-400">
                            ⭐ PRODUTO SELECIONADO
                        </span>

                        <img
                            src={selectedMouse.image}
                            alt={selectedMouse.name}
                            className="h-full w-full object-contain p-6"
                        />
                    </div>

                    {/* CONTEÚDO */}
                    <div className="flex flex-1 flex-col p-5">

                        <span className="mb-3 w-fit rounded-full border border-cyan-500/50 px-3 py-1 text-[10px] font-bold text-cyan-400">
                            PRODUTO SELECIONADO
                        </span>

                        <h2 className="text-2xl font-extrabold leading-tight text-white">
                            {selectedMouse.name}
                        </h2>

                        <div className="mt-2 text-yellow-400">
                            {"★".repeat(selectedMouse.rating)}
                        </div>

                        <p className="mt-2 text-2xl font-extrabold text-cyan-400">
                            {selectedMouse.price}
                        </p>

                        <p className="mt-3 text-sm leading-6 text-zinc-300">
                            {selectedMouse.description}
                        </p>

                        {/* ESPECIFICAÇÕES */}
                        <div className="mt-4">

                            <h3 className="font-bold text-white">
                                ⚙️ Especificações
                            </h3>

                            <ul className="mt-2 space-y-2 text-sm text-zinc-400">
                                {selectedMouse.specs.map((spec) => (
                                    <li key={spec}>
                                        ✓ {spec}
                                    </li>
                                ))}
                            </ul>

                        </div>

                        {/* ATLAS */}
                        <div className="mt-4 rounded-xl border border-cyan-500/30 bg-zinc-900 p-4">

                            <h3 className="font-bold text-cyan-400">
                                🤖 Atlas
                            </h3>

                            <p className="mt-2 text-sm leading-5 text-zinc-300">
                                {selectedMouse.atlas}
                            </p>

                        </div>

                        {/* COMPRA */}
                        <div className="mt-auto pt-4">

                            <button
                                onClick={handleBuy}
                                className="w-full rounded-xl bg-cyan-500 py-4 font-extrabold text-black transition hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
                            >
                                🛒 COMPRAR AGORA
                            </button>

                            <p className="mt-2 text-center text-[11px] text-zinc-500">
                                Você será redirecionado para o site parceiro.
                            </p>

                        </div>

                    </div>

                </aside>

            </div>
        </div>
    );
}