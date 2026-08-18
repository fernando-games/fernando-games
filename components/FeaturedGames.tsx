import ProductCard from "./ProductCard";
import { products } from "@/data";

export default function FeaturedGames() {
  return (
    <section className="bg-zinc-950 py-20">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-white mb-10">
          🔥 Jogos em Destaque
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
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
    </section>
  );
}