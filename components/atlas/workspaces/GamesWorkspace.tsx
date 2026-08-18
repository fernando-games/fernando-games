import { products } from "@/data/games";
import RecommendationCard from "../../cards/RecommendationCard";

export default function GamesWorkspace() {
    return (
        <div className="flex h-full flex-col gap-6 overflow-y-auto pr-2">

            <div>
                <h1 className="text-3xl font-bold text-cyan-400">
                    🎮 Jogos recomendados pelo Atlas
                </h1>

                <p className="mt-2 text-zinc-400">
                    Escolha um jogo e deixe o Atlas ajudar você.
                </p>
            </div>

            {products.map((game) => (
                <RecommendationCard
                    key={game.id}
                    title={game.title}
                    description={game.description}
                    atlasReview={game.atlasReview}
                    brand={game.brand}
                    platform={game.platform}
                    image={game.image}
                    price={`R$ ${game.price.toFixed(2)}`}
                    rating={game.rating}
                    buttonText="Ver Produto"
                />
            ))}

        </div>
    );
}