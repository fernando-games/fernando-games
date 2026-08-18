import { Product } from "@/types/Product";

export const peripherals: Product[] = [
    {
        id: 2001,
        title: "Logitech G Pro X Superlight 2",
        category: "Periféricos",
        price: 899.90,
        image: "/images/peripherals/gprox2.jpg",
        description:
            "Mouse gamer ultraleve com sensor HERO 2 e tecnologia LIGHTSPEED.",
        brand: "Logitech",
        rating: 4.9,
        slug: "logitech-g-pro-x-superlight-2",
        platform: "PC",
        atlasReview:
            "Mouse gamer premium indicado para jogadores que procuram desempenho competitivo, baixo peso e conexão sem fio de alta performance.",
    },

    {
        id: 2002,
        title: "HyperX Cloud III",
        category: "Periféricos",
        price: 599.90,
        image: "/images/peripherals/cloud3.jpg",
        description:
            "Headset gamer com áudio DTS:X, conforto premium e microfone de alta qualidade.",
        brand: "HyperX",
        rating: 4.8,
        slug: "hyperx-cloud-iii",
        platform: "PC",
        atlasReview:
            "Headset indicado para quem procura conforto durante longas sessões e uma experiência de áudio gamer mais completa.",
    },

    {
        id: 2003,
        title: "Logitech G203 LIGHTSYNC",
        category: "Periféricos",
        price: 119.90,
        image: "/images/peripherals/g203.png",
        description:
            "Mouse gamer com até 8.000 DPI, 6 botões programáveis e iluminação RGB LIGHTSYNC.",
        brand: "Logitech",
        rating: 4.9,
        slug: "logitech-g203-lightsync",
        platform: "PC",
        atlasReview:
            "Excelente opção para quem está começando no mundo gamer e quer um mouse confiável, com bom desempenho e preço acessível.",
    },
];