import { GameInfo } from "./GameDatabase";
import { AtlasRecommendation } from "@/types/AtlasTypes";

export class RecommendationEngine {

    recommend(game: GameInfo, budget: number): AtlasRecommendation {

        if (budget <= 3000) {
            return {
                cpu: "Ryzen 5 5600",
                gpu: "RTX 3060",
                ram: 16,
                storage: "SSD NVMe 1 TB",
                motherboard: "B550",
                powerSupply: "650W 80 Plus Bronze",

                explanation:
                    "Essa configuração oferece excelente custo-benefício para jogar em Full HD.",

                upgrades: [
                    "Adicionar mais 16 GB de RAM",
                    "Trocar a GPU por uma RTX 5070",
                    "Adicionar outro SSD NVMe"
                ]
            };
        }

        if (budget <= 6000) {
            return {
                cpu: "Ryzen 7 7700",
                gpu: "RTX 4070",
                ram: 32,
                storage: "SSD NVMe 1 TB",
                motherboard: "B650",
                powerSupply: "750W 80 Plus Gold",

                explanation:
                    "Excelente configuração para jogar em Quad HD com folga.",

                upgrades: [
                    "SSD de 2 TB",
                    "64 GB de RAM",
                    "RTX 5070"
                ]
            };
        }

        return {
            cpu: "Ryzen 7 7800X3D",
            gpu: "RTX 5070",
            ram: 32,
            storage: "SSD NVMe 2 TB",
            motherboard: "X670",
            powerSupply: "850W 80 Plus Gold",

            explanation:
                "Configuração de alto desempenho para máxima qualidade gráfica.",

            upgrades: [
                "64 GB de RAM",
                "Mais armazenamento NVMe",
                "GPU de próxima geração"
            ]
        };
    }

}