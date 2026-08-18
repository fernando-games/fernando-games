import { Product } from "@/types/Product";

export const products: Product[] = [
  {
    id: 1,
    slug: "gta-vi",
    title: "GTA VI",
    category: "game",
    price: 349.90,
    image: "/images/games/gta-vi.jpg",

    description:
      "Explore Vice City em um gigantesco mundo aberto cheio de missões, ação e liberdade.",
    atlasReview:
      "O Atlas recomenda GTA VI para quem gosta de liberdade, exploração, ação intensa e um enorme mundo aberto. É um dos jogos mais aguardados da geração.",
    brand: "Rockstar Games",
    platform: "PC • PlayStation 5 • Xbox Series",

    rating: 4.9,
  },
  {
    id: 2,
    slug: "minecraft",
    title: "Minecraft",
    category: "game",
    price: 99.90,
    image: "/images/games/minecraft.jpg",

    description:
      "Construa qualquer coisa utilizando blocos em um mundo infinito cheio de aventuras.",
    brand: "Mojang Studios",
    atlasReview:
      "O Atlas recomenda Minecraft para quem gosta de criatividade, construção e exploração sem limites. É um jogo perfeito para jogar sozinho ou com amigos e criar mundos incríveis.",

    platform: "PC • PlayStation • Xbox • Nintendo Switch",

    rating: 4.8,
  },
  {
    id: 3,
    slug: "elden-ring",
    title: "Elden Ring",
    category: "game",
    price: 249.90,
    image: "/images/games/elden-ring.jpg",

    description:
      "Um RPG de ação em mundo aberto criado pela FromSoftware com combates desafiadores.",
    atlasReview:
      "O Atlas recomenda Elden Ring para quem busca desafios intensos, exploração profunda e um dos melhores RPGs de ação já criados.",
    brand: "FromSoftware",
    platform: "PC • PlayStation • Xbox",

    rating: 4.9,
  },
];
export const games = products;