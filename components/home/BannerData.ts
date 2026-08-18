import { HomeMode } from "@/controllers/HomeController";

export type BannerCategory =
    | "atlas"
    | "games"
    | "pc"
    | "peripherals"
    | "promotion";

export type Banner = {
    id: number;
    category: BannerCategory;

    badge: string;

    titleTop: string;
    titleBottom: string;

    description: string;

    image: string;

    primaryButton: string;
    secondaryButton: string;
    primaryAction: HomeMode;
};

export const banners: Banner[] = [
    {
        id: 1,
        category: "atlas",

        badge: "BEM-VINDO À FERNANDO.GAMES",

        titleTop: "ELEVE SEU",
        titleBottom: "JOGO",

        description:
            "Converse com o Atlas, descubra produtos e encontre o setup perfeito para o seu próximo nível.",

        image: "/banners/atlas.png",

        primaryButton: "Montar PC",
        secondaryButton: "Explorar Loja",
        primaryAction: "pc"
    },

    {
        id: 2,
        category: "pc",

        badge: "MONTE SEU PC",

        titleTop: "PODER PARA",
        titleBottom: "VENCER",

        description:
            "Receba recomendações inteligentes do Atlas para montar um computador ideal para seus jogos.",

        image: "/banners/pc.png",

        primaryButton: "Montar Agora",
        secondaryButton: "Ver Configurações",
        primaryAction: "pc"
    },

    {
        id: 3,
        category: "games",

        badge: "NOVIDADES",

        titleTop: "DESCUBRA",
        titleBottom: "NOVOS JOGOS",

        description:
            "Conheça os lançamentos, clássicos e recomendações selecionadas para você.",

        image: "/banners/games.png",

        primaryButton: "Explorar Jogos",
        secondaryButton: "Ver Destaques",
        primaryAction: "games"
    },

    {
        id: 4,
        category: "promotion",

        badge: "OFERTAS ESPECIAIS",

        titleTop: "PROMOÇÕES",
        titleBottom: "IMPERDÍVEIS",

        description:
            "Aproveite descontos exclusivos em produtos gamer, periféricos e muito mais.",

        image: "/banners/promo.png",

        primaryButton: "Ver Promoções",
        secondaryButton: "Economizar",
        primaryAction: "promotion"
    },
];