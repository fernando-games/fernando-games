import { IntentRecognizer } from "../knowledge/IntentRecognizer";
import { KnowledgeEngine } from "../knowledge/KnowledgeEngine";
import { ConversationManager } from "./ConversationManager";
import { AtlasBrain } from "./AtlasBrain";
import { AtlasMemoryManager } from "./AtlasMemory";
import { AtlasMessage, AtlasResponse } from "@/types/AtlasTypes";
import { UserProfiler } from "../knowledge/UserProfiler";
import { RecommendationEngine } from "../knowledge/RecommendationEngine";
import { ProductRecommendationEngine } from "../knowledge/ProductRecommendationEngine";
import { AtlasPersonality } from "../personality/AtlasPersonality";
import { ProductIntentRecognizer } from "../knowledge/ProductIntentRecognizer";


export class AtlasEngine {
    private brain = new AtlasBrain();
    private memory = new AtlasMemoryManager();
    private conversation = new ConversationManager();
    private intentRecognizer = new IntentRecognizer();
    private productIntentRecognizer = new ProductIntentRecognizer();
    private knowledge = new KnowledgeEngine();
    private profiler = new UserProfiler();
    private recommendation = new RecommendationEngine();
    private productRecommendation = new ProductRecommendationEngine();
    private personality = new AtlasPersonality();

    async process(message: AtlasMessage): Promise<AtlasResponse> {

        console.log("CHEGOU NO ATLAS ENGINE:", message);

        const memory = this.memory.getMemory();
        const text = message.content.toLowerCase();
        const productIntent = this.productIntentRecognizer.detect(text);
        const greetings = [
            "oi",
            "olá",
            "ola",
            "bom dia",
            "boa tarde",
            "boa noite",
            "e aí",
            "eai",
            "opa",
        ];

        if (greetings.some(word => text.includes(word))) {
            return {
                message: this.personality.greeting(),
            };
        }
        const intent = this.intentRecognizer.detect(message.content);

        console.log("Intent:", intent);

        const profile = this.profiler.detect(text);

        const pcKeywords = [
            "pc",
            "computador",
            "desktop",
            "gamer",
            "montar",
            "setup",
            "configuração",
            "configurar",
            "máquina",
        ];

        const promotionKeywords = [
            "promo",
            "promoção",
            "promoções",
            "oferta",
            "ofertas",
            "desconto",
        ];

        const notebookKeywords = [
            "notebook",
            "laptop",
        ];

        if (profile === "beginner") {
            return {
                message:
                    "Sem problema! 😊 Você não precisa entender de computadores. Eu vou explicar tudo de forma simples e recomendar apenas o que realmente faz sentido para você."
            };
        }

        console.log("Perfil do usuário:", profile);

        const game = this.knowledge.findGame(text);

        if (game) {

            const budget = memory.budget ?? 4000;

            const recommendation = this.recommendation.recommend(game, budget);

            const products =
                this.productRecommendation.recommend(recommendation);

            return {
                type: "recommendation",
                title: game.name,
                message:
                    `🎮 Excelente escolha!\n\n${game.name} é um jogo do gênero ${game.genre}.`,
                recommendation,
                products,
            };
        }

        const wantsPc = pcKeywords.some(keyword =>
            text.includes(keyword)
        );

        const wantsPromotion = promotionKeywords.some(keyword =>
            text.includes(keyword)
        );

        const wantsNotebook = notebookKeywords.some(keyword =>
            text.includes(keyword)
        );

        if (wantsPc) {
            this.conversation.startFlow("build-pc");
        }

        if (wantsPromotion) {
            this.conversation.startFlow("promotion");
        }

        if (wantsNotebook) {
            this.conversation.startFlow("notebook");
        }

        if (memory.step === "budget") {

            const budget = Number(text.replace(/\D/g, ""));

            if (!isNaN(budget) && budget > 0) {

                this.memory.updateMemory({
                    budget,
                    step: "games",
                });

                return {
                    message: `Perfeito! Vou considerar um orçamento de R$ ${budget.toLocaleString("pt-BR")}. Agora me diga: quais jogos você pretende jogar?`,
                };
            }

            return {
                message: "Não consegui entender o orçamento. Pode informar apenas o valor? Exemplo: 4000",
            };
        }

        if (productIntent === "gpu") {

            return {

                action: "open-product",

                product: "rtx5060",

                message:
                    "Excelente escolha! 🚀 A GeForce RTX 5060 oferece ótimo desempenho para jogos em Full HD e Quad HD. Vou abrir a ficha técnica para você.",

            };

        }

        // IA LOCAL (sem Gemini)

        const response = this.brain.think(message);

        return response;
    }

    getMemory() {
        return this.memory.getMemory();
    }

    getConversation() {
        return this.conversation.getContext();
    }

    updateMemory(data: Parameters<AtlasMemoryManager["updateMemory"]>[0]) {
        this.memory.updateMemory(data);
    }

    clearMemory() {
        this.memory.clearMemory();
    }
}