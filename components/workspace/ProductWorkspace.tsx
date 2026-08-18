"use client";
import { rtx5060 } from "@/data/products/rtx5060";
import Image from "next/image";

export default function ProductWorkspace() {
    const product = rtx5060;
    return (
        <div className="rounded-2xl border border-cyan-500 bg-zinc-950 p-8">

            <div className="grid grid-cols-2 gap-10">

                {/* Imagem */}
                {product.image ? (
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={500}
                        height={500}
                    />
                ) : (
                    <div className="flex h-[420px] items-center justify-center rounded-2xl border border-dashed border-cyan-500 bg-zinc-900 text-cyan-400">
                        🖼️ Imagem em desenvolvimento
                    </div>
                )}

                {/* Informações */}

                <div className="space-y-6">

                    <div>

                        <p className="text-cyan-400 font-semibold">
                            {product.brand}
                        </p>

                        <h1 className="mt-2 text-4xl font-extrabold text-white">
                            {product.name}
                        </h1>

                    </div>

                    <p className="text-zinc-400 leading-relaxed">
                        {product.description}
                    </p>

                    <div>

                        <p className="text-5xl font-bold text-cyan-400">
                            R$ {product.price.toLocaleString("pt-BR")}
                        </p>

                        <p className="mt-2 text-zinc-400">
                            {product.installment}
                        </p>

                    </div>

                    <div>

                        <h3 className="mb-3 text-xl font-bold text-white">
                            Especificações
                        </h3>

                        <ul className="space-y-2">

                            {product.specs.map((spec) => (

                                <li
                                    key={spec}
                                    className="text-zinc-300"
                                >
                                    ✔ {spec}
                                </li>

                            ))}

                        </ul>

                    </div>

                </div>

                <button
                    className="
                            mt-10
                            rounded-xl
                            bg-cyan-500
                            px-10
                            py-4
                            text-xl
                            font-bold
                            text-black
                            transition
                            hover:bg-cyan-400
                        "
                >
                    🛒 Comprar Agora
                </button>

            </div>

        </div>

    );
}