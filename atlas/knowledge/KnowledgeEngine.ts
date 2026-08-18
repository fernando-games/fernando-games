import { GameDatabase, GameInfo } from "./GameDatabase";

export class KnowledgeEngine {

    findGame(message: string): GameInfo | null {

        // Normaliza a mensagem do usuário
        const normalizedMessage = message
            .toLowerCase()
            .replace(/\s+/g, "")
            .replace(/vi/g, "6")
            .trim();
        console.log("Mensagem:", normalizedMessage);

        for (const [key, game] of Object.entries(GameDatabase)) {

            const normalizedKey = key
                .toLowerCase()
                .replace(/\s+/g, "")
                .replace(/vi/g, "6");
            console.log("Comparando:", normalizedKey);

            if (normalizedMessage.includes(normalizedKey)) {

                console.log("Jogo encontrado:", game.name);

                return game;
            }
        }
        console.log("Nenhum jogo encontrado.");

        return null;
        
    }
}