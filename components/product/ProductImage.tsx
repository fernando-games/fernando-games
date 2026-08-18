import Image from "next/image";
import { Product } from "@/types/Product";

type ProductImageProps = {
    product: Product;
};

export default function ProductImage({
    product,
}: ProductImageProps) {
    return (
        <div className="rounded-3xl border border-cyan-500 bg-zinc-900 p-10">
            <div className="flex h-[500px] items-center justify-center rounded-2xl bg-zinc-950">
                <Image
                    src={product.image}
                    alt={product.title}
                    width={500}
                    height={500}
                    className="max-h-full max-w-full object-contain"
                />
            </div>
        </div>
    );
}