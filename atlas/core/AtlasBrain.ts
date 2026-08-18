import { AtlasMessage, AtlasResponse } from "@/types/AtlasTypes";

export class AtlasBrain {
    think(message: AtlasMessage): AtlasResponse {

        const text = message.content.toLowerCase();

        // Montagem de PC
        if (text.includes("pc")) {
            return {
                message:
                    "Perfeito! Vou ajudar você a montar um PC. Primeiro, qual é o seu orçamento?",
                action: "build-pc",
            };
        }

        // Notebook
        if (text.includes("notebook")) {
            return {
                message:
                    "Claro! Você procura um notebook para jogar, estudar ou trabalhar?",
            };
        }

        // Promoções
        if (
            text.includes("promo") ||
            text.includes("promoção") ||
            text.includes("promocao")
        ) {
            return {
                message:
                    "Vou procurar as melhores promoções disponíveis para você.",
                action: "open-promotions",
            };
        }

        // Saudação
        if (
            text.includes("oi") ||
            text.includes("olá") ||
            text.includes("ola")
        ) {
            return {
                message:
                    "Olá! Eu sou o Atlas. Como posso ajudar você hoje?",
            };
        }

        // Resposta padrão
        return {
            message:
                "Ainda estou aprendendo. Conte o que você procura e vou tentar ajudar da melhor forma possível.",
        };
    }
}