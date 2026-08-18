import ProductCard from "./ProductCard";
import Link from "next/link";
import { products } from "@/data";

type Props = {
    currentGameId: number;
};

export default function RelatedGames({ currentGameId }: Props) {
    const relatedGames = products.filter(
        (product) => product.id !== currentGameId
    );

    return (
        <div className="mt-10">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
                🤖 Recomendado pelo Atlas
            </h2>
            <p className="mb-8 text-zinc-400">
                Produtos selecionados pelo Atlas para complementar sua experiência.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {relatedGames.map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        slug={product.slug}
                        title={product.title}
                        category={product.category}
                        price={product.price}
                        image={product.image}
                        description={product.description}
                        brand={product.brand}
                        platform={product.platform}
                        rating={product.rating}
                        atlasReview={product.atlasReview}
                    />
                ))}
            </div>
        </div>
    );
}