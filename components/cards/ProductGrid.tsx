import ProductCard from "./ProductCard";

export type Product = {
    id: number;
    name: string;
    category: string;
    price: number;
    image: string;
};

type ProductGridProps = {
    products: Product[];
};

export default function ProductGrid({
    products,
}: ProductGridProps) {
    return (
        <section className="mt-8">

            <h2 className="mb-5 text-2xl font-bold text-cyan-400">
                🛒 Peças recomendadas pelo Atlas
            </h2>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        name={product.name}
                        category={product.category}
                        price={product.price}
                        image={product.image}
                    />
                ))}

            </div>

        </section>
    );
}