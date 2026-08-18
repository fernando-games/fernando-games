import { Product } from "@/types/Product";

export const monitors: Product[] = [
    {
        id: 3001,
        slug: "lg-ultragear-27-qhd-180hz",
        title: "LG UltraGear 27'' QHD 180Hz",
        category: "Monitores",
        price: 1899.90,
        image: "/images/monitors/lg-ultragear-27.jpg",

        description:
            "Monitor gamer QHD de 27 polegadas com taxa de atualização de 180Hz e tempo de resposta de 1ms.",

        brand: "LG",
        platform: "PC",
        rating: 4.9,

        atlasReview:
            "Uma ótima escolha para jogos competitivos, combinando resolução QHD, 180Hz e resposta rápida.",
    },
    {
        id: 3002,
        slug: "samsung-odyssey-g5-32",
        title: "Samsung Odyssey G5 32''",
        category: "Monitores",
        price: 2099.90,
        image: "/images/monitors/odyssey-g5.jpg",

        description:
            "Monitor curvo gamer de 32 polegadas com resolução QHD e 165Hz.",

        brand: "Samsung",
        platform: "PC",
        rating: 4.8,

        atlasReview:
            "Uma boa opção para quem procura uma tela grande e imersiva para jogar em QHD.",
    },
];