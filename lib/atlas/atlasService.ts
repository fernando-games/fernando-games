import { geminiService } from "./geminiService";

export class AtlasAIService {
    async ask(message: string): Promise<string> {
        return await geminiService(message);
    }
}