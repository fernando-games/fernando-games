import { detectAtlasAction, AtlasAction } from "./AtlasActions";
import { atlasMemory } from "./AtlasMemory";

export type AtlasResponse = {
    message: string;
    action: AtlasAction;
};

export function atlasBrain(input: string): AtlasResponse {
    const text = input.toLowerCase();

    if (text.includes("jogo")) {
        atlasMemory.topic = "jogo";

        return {
            message:
                "🎮 Qual plataforma você prefere? PC, PlayStation, Xbox ou Nintendo?",
            action: "games",
        };
    }

    if (text.includes("pc")) {
        atlasMemory.topic = "pc";

        return {
            message: "🖥️ Posso ajudar a montar um PC Gamer. Qual é o seu orçamento?",
            action: "pc",
        };
    }

    if (text.includes("promo")) {
        atlasMemory.topic = "promocao";

        return {
            message: "🔥 Vou procurar as melhores promoções disponíveis para você.",
            action: "promotions",
        };
    }

    if (text.includes("oi") || text.includes("olá") || text.includes("ola")) {
        return {
            message: "👋 Olá! Eu sou o Atlas. Como posso ajudar você hoje?",
            action: "none",
        };
    }

    if (atlasMemory.topic === "pc" && /^\d+$/.test(text)) {
        return {
            message: `🎮 Excelente! Com um orçamento de R$ ${text}, posso montar uma ótima configuração gamer para você.`,
            action: "pc",
        };
    }

    return {
        message:
            "🤖 Ainda estou aprendendo. Conte um pouco mais para que eu possa ajudar.",
        action: detectAtlasAction(text),
    };
}