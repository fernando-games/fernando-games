"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { banners } from "./BannerData";
import HeroButtons from "./HeroButtons";

type HeroBannerProps = {
    activeBanner?: number;
};

export default function HeroBanner({
    activeBanner,
}: HeroBannerProps) {

    const [currentBanner, setCurrentBanner] = useState(
        activeBanner ?? 0
    );

    const [visible, setVisible] = useState(true);

    // ============================================
    // SINCRONIZA COM O SISTEMA
    // ============================================

    useEffect(() => {
        if (activeBanner === undefined) return;

        if (activeBanner === currentBanner) return;

        setVisible(false);

        const timer = setTimeout(() => {
            setCurrentBanner(activeBanner);
            setVisible(true);
        }, 300);

        return () => clearTimeout(timer);
    }, [activeBanner, currentBanner]);

    // ============================================
    // CARROSSEL AUTOMÁTICO
    // ============================================

    useEffect(() => {

        const interval = setInterval(() => {

            setVisible(false);

            setTimeout(() => {
                setCurrentBanner((previous) => {
                    return (previous + 1) % banners.length;
                });

                setVisible(true);
            }, 300);

        }, 6000);

        return () => clearInterval(interval);

    }, []);

    // ============================================
    // TROCAR BANNER
    // ============================================

    function changeBanner(index: number) {

        if (index === currentBanner) return;

        setVisible(false);

        setTimeout(() => {
            setCurrentBanner(index);
            setVisible(true);
        }, 300);
    }

    const banner = banners[currentBanner];

    return (
        <section className="relative w-full overflow-hidden rounded-2xl border border-cyan-500 bg-zinc-950 shadow-lg shadow-cyan-500/10">

            {/* ====================================== */}
            {/* FUNDO FUTURISTA */}
            {/* ====================================== */}

            <div className="pointer-events-none absolute inset-0">

                <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />

                <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-purple-600/10 blur-3xl" />

                <div className="absolute left-0 right-0 top-1/2 h-px bg-cyan-500/10" />

                <div className="absolute bottom-10 left-0 right-0 h-px bg-cyan-500/10" />

            </div>

            {/* ====================================== */}
            {/* CONTEÚDO */}
            {/* ====================================== */}

            <div
                className={`relative z-10 grid min-h-[300px] grid-cols-1 transition-all duration-500 lg:grid-cols-2 ${visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0"
                    }`}
            >

                {/* ================================== */}
                {/* TEXTO */}
                {/* ================================== */}

                <div className="flex flex-col justify-center px-6 py-8 lg:px-10">

                    {/* STATUS */}

                    <div className="mb-4 flex w-fit items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-950/40 px-3 py-1 text-xs font-bold text-cyan-300">

                        <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />

                        SISTEMA ONLINE

                    </div>

                    {/* LINHA */}

                    <div className="mb-4 flex items-center gap-2">

                        <div className="h-px w-12 bg-cyan-400" />

                        <div className="h-1 w-1 rounded-full bg-cyan-400" />

                        <div className="h-px w-16 bg-cyan-500/30" />

                    </div>

                    {/* BADGE */}

                    <span className="mb-3 w-fit rounded-md border border-cyan-500/30 bg-zinc-900 px-3 py-1 text-xs font-bold text-cyan-300">

                        {banner.badge}

                    </span>

                    {/* TÍTULO */}

                    <h1 className="text-3xl font-black uppercase leading-none text-white md:text-5xl">

                        {banner.titleTop}

                    </h1>

                    <h2 className="mt-1 text-4xl font-black uppercase leading-none text-cyan-400 drop-shadow-lg md:text-6xl">

                        {banner.titleBottom}

                    </h2>

                    {/* DESCRIÇÃO */}

                    <p className="mt-4 max-w-lg text-sm leading-6 text-zinc-300 md:text-base">

                        {banner.description}

                    </p>

                    {/* BOTÕES */}

                    <div className="relative z-20 mt-2">

                        <HeroButtons
                            secondaryText={banner.secondaryButton}
                        />

                    </div>

                </div>

                {/* ================================== */}
                {/* ATLAS / IMAGEM */}
                {/* ================================== */}

                <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden px-5 py-6">

                    {/* CÍRCULO HOLOGRÁFICO */}

                    <div className="absolute h-64 w-64 rounded-full border border-cyan-400/20 shadow-2xl shadow-cyan-500/10" />

                    <div className="absolute h-48 w-48 rounded-full border border-cyan-400/10" />

                    {/* PAINEL ATLAS */}

                    <div className="absolute right-5 top-5 hidden rounded-lg border border-cyan-500/30 bg-zinc-950/80 px-3 py-2 text-xs font-bold text-cyan-300 lg:block">

                        <div>ATLAS</div>

                        <div className="mt-1 text-green-400">
                            ● ONLINE
                        </div>

                    </div>

                    {/* PAINEL XP */}

                    <div className="absolute bottom-5 right-5 hidden rounded-lg border border-purple-500/30 bg-zinc-950/80 px-3 py-2 text-xs font-bold text-purple-300 lg:block">

                        ATLAS XP

                        <div className="mt-1 text-cyan-400">
                            LEVEL 07
                        </div>

                    </div>

                    {/* IMAGEM */}

                    <Image
                        src={banner.image}
                        alt={`${banner.titleTop} ${banner.titleBottom}`}
                        width={600}
                        height={420}
                        priority
                        className="relative z-10 max-h-[280px] w-full object-contain drop-shadow-2xl"
                    />

                </div>

            </div>

            {/* ====================================== */}
            {/* BARRA DOS BANNERS */}
            {/* ====================================== */}

            <div className="relative z-20 flex items-center justify-center gap-2 border-t border-cyan-500/20 bg-black/30 py-3">

                {/* ANTERIOR */}

                <button
                    type="button"
                    onClick={() => {
                        const previous =
                            (currentBanner - 1 + banners.length) %
                            banners.length;

                        changeBanner(previous);
                    }}
                    className="mr-3 text-2xl text-cyan-400 transition hover:scale-125 hover:text-cyan-300"
                >
                    ‹
                </button>

                {/* INDICADORES */}

                {banners.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        onClick={() => changeBanner(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${currentBanner === index
                            ? "w-8 bg-cyan-400 shadow-lg shadow-cyan-400/50"
                            : "w-2 bg-zinc-600 hover:bg-zinc-400"
                            }`}
                    />
                ))}

                {/* PRÓXIMO */}

                <button
                    type="button"
                    onClick={() => {
                        const next =
                            (currentBanner + 1) % banners.length;

                        changeBanner(next);
                    }}
                    className="ml-3 text-2xl text-cyan-400 transition hover:scale-125 hover:text-cyan-300"
                >
                    ›
                </button>

            </div>

            {/* ====================================== */}
            {/* EFEITO DE BORDA */}
            {/* ====================================== */}

            <div className="pointer-events-none absolute inset-0 rounded-2xl border border-cyan-400/10" />

        </section>
    );
}