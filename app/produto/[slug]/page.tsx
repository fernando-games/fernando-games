import { products } from "@/data";
import Image from "next/image";
import ProductImage from "@/components/product/ProductImage";
import RelatedGames from "@/components/RelatedGames";

export default async function ProductPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {

    const { slug } = await params;

    const product = products.find(
        (item) => item.slug === slug
    );

    if (!product) {
        return (
            <main className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
                Produto não encontrado.
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-zinc-950 text-white">

            {/* Cabeçalho */}

            <div className="border-b border-cyan-500/20 bg-zinc-900">

                <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

                    <h1 className="text-4xl font-extrabold text-cyan-400">
                        Fernando.Games
                    </h1>

                    <div className="text-zinc-400">
                        Produto recomendado pelo Atlas
                    </div>

                </div>

            </div>s

            {/* Conteúdo */}

            <div className="mx-auto grid max-w-7xl grid-cols-2 gap-12 px-8 py-12">

                {/* Imagem */}

                <ProductImage product={product} />

                {/* Informações */}

                <div>

                    <span className="rounded-full bg-cyan-500/20 px-4 py-2 text-cyan-400">
                        🤖 Recomendado pelo Atlas
                    </span>

                    <h3 className="mt-4 text-3xl font-bold">
                        {product.title}
                    </h3>

                    <p className="mt-3 text-zinc-400">
                        {product.brand}
                    </p>

                    <div className="mt-8 text-yellow-400 text-2xl">
                        ⭐⭐⭐⭐⭐ <span className="text-zinc-400 text-lg">(1.256 avaliações)</span>
                    </div>

                    <div className="mt-10">

                        <p className="text-zinc-400">
                            Preço
                        </p>

                        <h3 className="text-6xl font-extrabold text-cyan-400">
                            R$ {product.price.toFixed(2)}
                        </h3>

                    </div>

                    <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-zinc-900 p-6">

                        <h4 className="mb-4 text-2xl font-bold text-cyan-400">
                            🤖 Análise do Atlas
                        </h4>

                        <p className="leading-8 text-zinc-300">
                            {product.atlasReview}
                        </p>

                    </div>

                    <div className="mt-10 flex gap-4">

                        <button className="flex-1 rounded-2xl bg-cyan-500 py-5 text-xl font-bold text-black transition hover:bg-cyan-400">
                            🛒 Comprar
                        </button>

                        <button className="rounded-2xl border border-cyan-500 px-8 transition hover:bg-cyan-500/10">
                            ❤️ Favoritar
                        </button>

                        <RelatedGames currentGameId={product.id} />

                    </div>

                </div>

            </div>

        </main>
    );
}