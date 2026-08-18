import { Product } from "@/types/Product";

export const hardware: Product[] = [
    {
        id: 1001,
        slug: "geforce-rtx-5070",
        title: "GeForce RTX 5070",
        category: "Hardware",
        price: 4299.90,
        image: "/images/hardware/rtx5070.jpg",

        description:
            "Placa de vídeo NVIDIA GeForce RTX 5070 com excelente desempenho para jogos em 1440p e Ray Tracing.",

        brand: "NVIDIA",
        platform: "PC",
        rating: 4.9,

        atlasReview:
            "Uma excelente escolha para quem busca alto desempenho em 1440p, com suporte a Ray Tracing e tecnologias modernas da NVIDIA.",
    },
];