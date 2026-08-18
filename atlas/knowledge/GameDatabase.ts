export interface GameInfo {
    name: string;
    genre: string;
    difficulty: "low" | "medium" | "high";
    recommendedRam: number;
    recommendedGpu: string;
    recommendedCpu: string;
    description: string;
}

export const GameDatabase: Record<string, GameInfo> = {
    "gta 6": {
        name: "Grand Theft Auto VI",
        genre: "Mundo Aberto",
        difficulty: "high",
        recommendedRam: 32,
        recommendedGpu: "RTX 4060",
        recommendedCpu: "Ryzen 5 7600",
        description:
            "Um dos jogos mais exigentes da atualidade, com foco em mundo aberto e gráficos avançados."
    },

    "minecraft": {
        name: "Minecraft",
        genre: "Sandbox",
        difficulty: "low",
        recommendedRam: 16,
        recommendedGpu: "RTX 3060",
        recommendedCpu: "Ryzen 5 5600",
        description:
            "Excelente para criatividade, construção e mods."
    },

    "valorant": {
        name: "Valorant",
        genre: "FPS",
        difficulty: "low",
        recommendedRam: 16,
        recommendedGpu: "RTX 3060",
        recommendedCpu: "Ryzen 5 5600",
        description:
            "Jogo competitivo que prioriza FPS alto e estabilidade."
    }
};