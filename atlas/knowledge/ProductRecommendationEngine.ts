import { AtlasRecommendation, AtlasProduct } from "@/types/AtlasTypes";

export class ProductRecommendationEngine {

    recommend(config: AtlasRecommendation): AtlasProduct[] {

        return [

            {
                id: 1,
                name: config.cpu,
                category: "Processador",
                price: 1299,
                image: "/products/cpu.png"
            },

            {
                id: 2,
                name: config.gpu,
                category: "Placa de Vídeo",
                price: 2599,
                image: "/products/gpu.png"
            },

            {
                id: 3,
                name: config.storage,
                category: "SSD",
                price: 499,
                image: "/products/ssd.png"
            },

            {
                id: 4,
                name: config.powerSupply,
                category: "Fonte",
                price: 449,
                image: "/products/psu.png"
            }

        ];

    }

}