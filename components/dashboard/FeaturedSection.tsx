"use client";

import { products } from "../../data";

type FeaturedSectionProps = {
    onMouseClick: () => void;
    onKeyboardClick: () => void;
};

function getStars(rating: number) {
    const fullStars = Math.round(rating);

    return "★".repeat(fullStars) + "☆".repeat(5 - fullStars);
}

export default function FeaturedSection({
    onMouseClick,
    onKeyboardClick,
}: FeaturedSectionProps) {

    const g203 = products.find(
        (product) => product.id === 2003
    );

    const otherProducts = products
        .filter((product) => product.id !== 2003)
        .slice(0, 3);

    /*
     * O primeiro produto depois do G203 era o GTA VI.
     * Ele será substituído visualmente pelo card de TECLADOS.
     * Os outros dois continuam normalmente.
     */

    const secondProduct = otherProducts[1];
    const thirdProduct = otherProducts[2];

    return (
        <section className="rounded-2xl border border-cyan-500 bg-zinc-950 p-6">

            <h2 className="mb-6 text-xl font-bold text-white md:text-2xl">
                🛒 Produtos em Destaque
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

                {/* ========================= */}
                {/* G203 */}
                {/* ========================= */}

                {g203 && (
                    <div
                        onClick={onMouseClick}
                        className="cursor-pointer overflow-hidden rounded-xl border border-cyan-500 bg-zinc-900 transition hover:scale-105 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
                    >

                        <div className="flex h-40 items-center justify-center bg-zinc-800">

                            {g203.image ? (
                                <img
                                    src={g203.image}
                                    alt={g203.title}
                                    className="h-full w-full object-contain p-4"
                                />
                            ) : (
                                <span className="text-zinc-500">
                                    IMAGEM
                                </span>
                            )}

                        </div>

                        <div className="p-4">

                            <h3 className="font-bold text-white">
                                {g203.title}
                            </h3>

                            <p className="mt-2 text-yellow-400">
                                {getStars(g203.rating)}
                            </p>

                            <p className="mt-3 text-lg font-bold text-cyan-400 md:text-xl">
                                {g203.price.toLocaleString("pt-BR", {
                                    style: "currency",
                                    currency: "BRL",
                                })}
                            </p>

                            <button
                                onClick={(event) => {
                                    event.stopPropagation();
                                    onMouseClick();
                                }}
                                className="mt-4 w-full rounded-lg bg-cyan-500 py-2 font-bold text-black transition hover:bg-cyan-400"
                            >
                                Ver Mouses
                            </button>

                        </div>

                    </div>
                )}

                {/* ========================= */}
                {/* TECLADOS */}
                {/* ========================= */}

                <div
                    onClick={onKeyboardClick}
                    className="cursor-pointer overflow-hidden rounded-xl border border-cyan-500 bg-zinc-900 transition hover:scale-105 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
                >

                    <div className="relative flex h-40 items-center justify-center bg-zinc-800">

                        <span className="absolute left-3 top-3 z-10 rounded-full bg-zinc-950 px-2 py-1 text-xs font-bold text-cyan-400">
                            PERIFÉRICO
                        </span>

                        <img
                            src="/images/peripherals/g213.png"
                            alt="Teclados Gamer"
                            className="h-full w-full object-contain p-4"
                        />

                    </div>

                    <div className="p-4">

                        <h3 className="font-bold text-white">
                            Teclados Gamer
                        </h3>

                        <p className="mt-2 text-yellow-400">
                            ★★★★★
                        </p>

                        <p className="mt-3 text-lg font-bold text-cyan-400 md:text-xl">
                            6 modelos
                        </p>

                        <button
                            onClick={(event) => {
                                event.stopPropagation();
                                onKeyboardClick();
                            }}
                            className="mt-4 w-full rounded-lg bg-cyan-500 py-2 font-bold text-black transition hover:bg-cyan-400"
                        >
                            Ver Teclados
                        </button>

                    </div>

                </div>

                {/* ========================= */}
                {/* MINECRAFT */}
                {/* ========================= */}

                {secondProduct && (
                    <div
                        className="overflow-hidden rounded-xl border border-cyan-500 bg-zinc-900 transition hover:scale-105 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
                    >

                        <div className="flex h-40 items-center justify-center bg-zinc-800">

                            {secondProduct.image ? (
                                <img
                                    src={secondProduct.image}
                                    alt={secondProduct.title}
                                    className="h-full w-full object-contain p-4"
                                />
                            ) : (
                                <span className="text-zinc-500">
                                    IMAGEM
                                </span>
                            )}

                        </div>

                        <div className="p-4">

                            <h3 className="font-bold text-white">
                                {secondProduct.title}
                            </h3>

                            <p className="mt-2 text-yellow-400">
                                {getStars(secondProduct.rating)}
                            </p>

                            <p className="mt-3 text-lg font-bold text-cyan-400 md:text-xl">
                                {secondProduct.price.toLocaleString("pt-BR", {
                                    style: "currency",
                                    currency: "BRL",
                                })}
                            </p>

                            <button
                                className="mt-4 w-full rounded-lg bg-cyan-500 py-2 font-bold text-black transition hover:bg-cyan-400"
                            >
                                Comprar
                            </button>

                        </div>

                    </div>
                )}

                {/* ========================= */}
                {/* ELDEN RING */}
                {/* ========================= */}

                {thirdProduct && (
                    <div
                        className="overflow-hidden rounded-xl border border-cyan-500 bg-zinc-900 transition hover:scale-105 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
                    >

                        <div className="flex h-40 items-center justify-center bg-zinc-800">

                            {thirdProduct.image ? (
                                <img
                                    src={thirdProduct.image}
                                    alt={thirdProduct.title}
                                    className="h-full w-full object-contain p-4"
                                />
                            ) : (
                                <span className="text-zinc-500">
                                    IMAGEM
                                </span>
                            )}

                        </div>

                        <div className="p-4">

                            <h3 className="font-bold text-white">
                                {thirdProduct.title}
                            </h3>

                            <p className="mt-2 text-yellow-400">
                                {getStars(thirdProduct.rating)}
                            </p>

                            <p className="mt-3 text-lg font-bold text-cyan-400 md:text-xl">
                                {thirdProduct.price.toLocaleString("pt-BR", {
                                    style: "currency",
                                    currency: "BRL",
                                })}
                            </p>

                            <button
                                className="mt-4 w-full rounded-lg bg-cyan-500 py-2 font-bold text-black transition hover:bg-cyan-400"
                            >
                                Comprar
                            </button>

                        </div>

                    </div>
                )}

            </div>

        </section>
    );
}