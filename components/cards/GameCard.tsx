import Image from "next/image";

type GameCardProps = {
    title: string;
    image: string;
    description: string;
    atlasReview: string;
    brand: string;
    platform: string;
    price: number;
    rating: number;
};

export default function GameCard({
    title,
    image,
    description,
    atlasReview,
    brand,
    platform,
    price,
    rating,
}: GameCardProps) {
    return (
        <div className="rounded-2xl border border-cyan-500 bg-zinc-900 p-6 transition hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20">

            <div className="flex flex-col gap-6 lg:flex-row">

                <Image
                    src={image}
                    alt={title}
                    width={220}
                    height={300}
                    className="rounded-xl object-cover"
                />

                <div className="flex flex-1 flex-col">

                    <h2 className="text-3xl font-bold text-cyan-400">
                        {title}
                    </h2>

                    <p className="mt-3 text-zinc-300">
                        {description}
                    </p>

                    <div className="mt-5 rounded-xl border border-cyan-500/40 bg-zinc-950 p-4">

                        <h3 className="mb-2 font-semibold text-cyan-400">
                            🤖 Opinião do Atlas
                        </h3>

                        <p className="text-sm leading-6 text-zinc-300">
                            {atlasReview}
                        </p>

                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-4">

                        <div>
                            <p className="text-xs uppercase text-zinc-500">
                                Marca
                            </p>

                            <p className="font-semibold text-white">
                                {brand}
                            </p>
                        </div>

                        <div>
                            <p className="text-xs uppercase text-zinc-500">
                                Plataforma
                            </p>

                            <p className="font-semibold text-white">
                                {platform}
                            </p>
                        </div>

                        <div>
                            <p className="text-xs uppercase text-zinc-500">
                                Avaliação
                            </p>

                            <p className="text-yellow-400">
                                ⭐ {rating}
                            </p>
                        </div>

                        <div>
                            <p className="text-xs uppercase text-zinc-500">
                                Preço
                            </p>

                            <p className="text-3xl font-bold text-cyan-400">
                                R$ {price.toFixed(2)}
                            </p>
                        </div>

                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">

                        <button className="rounded-xl bg-cyan-500 px-6 py-3 font-bold text-black transition hover:bg-cyan-400">
                            🛒 Comprar
                        </button>

                        <button className="rounded-xl border border-cyan-500 px-6 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-500 hover:text-black">
                            📄 Ver Produto
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}