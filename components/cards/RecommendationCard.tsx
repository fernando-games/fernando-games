import Image from "next/image";

type RecommendationCardProps = {
    title: string;
    description: string;
    atlasReview?: string;
    brand?: string;
    platform?: string;
    image?: string;
    price: string;
    rating: number;
    buttonText?: string;
};

export default function RecommendationCard({
    title,
    description,
    atlasReview,
    brand,
    platform,
    image,
    price,
    rating,
    buttonText = "Ver Produto",
}: RecommendationCardProps) {
    return (
        <div className="rounded-2xl border border-cyan-500 bg-zinc-900 p-6">

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

                {/* Imagem */}
                <div className="flex justify-center">

                    <Image
                        src={image ?? "/images/placeholder.jpg"}
                        alt={title}
                        width={260}
                        height={360}
                        className="rounded-xl object-cover"
                    />

                </div>

                {/* Conteúdo */}
                <div className="lg:col-span-2">

                    <h2 className="text-4xl font-bold text-cyan-400">
                        {title}
                    </h2>

                    <p className="mt-4 text-zinc-300">
                        {description}
                    </p>

                    {atlasReview && (
                        <div className="mt-6 rounded-xl border border-cyan-500/30 bg-zinc-950 p-4">

                            <h3 className="font-bold text-cyan-400">
                                🤖 Opinião do Atlas
                            </h3>

                            <p className="mt-2 text-zinc-300">
                                {atlasReview}
                            </p>

                        </div>
                    )}

                    <div className="mt-6 grid grid-cols-2 gap-6">

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

                            <p className="font-semibold text-yellow-400">
                                ⭐ {rating}
                            </p>

                        </div>

                        <div>

                            <p className="text-xs uppercase text-zinc-500">
                                Preço
                            </p>

                            <p className="text-3xl font-bold text-cyan-400">
                                {price}
                            </p>

                        </div>

                    </div>

                    <div className="mt-8 flex gap-4">

                        <button className="rounded-xl bg-cyan-500 px-6 py-3 font-bold text-black transition hover:bg-cyan-400">
                            🛒 Comprar
                        </button>

                        <button className="rounded-xl border border-cyan-500 px-6 py-3 font-bold text-cyan-400 transition hover:bg-cyan-500 hover:text-black">
                            📄 {buttonText}
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}