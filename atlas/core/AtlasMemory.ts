import { AtlasMemory } from "@/types/AtlasTypes";

export class AtlasMemoryManager {
    private memory: AtlasMemory = {};

    getMemory(): AtlasMemory {
        return this.memory;
    }

    updateMemory(data: Partial<AtlasMemory>): void {
        this.memory = {
            ...this.memory,
            ...data,
        };
    }

    clearMemory(): void {
        this.memory = {};
    }
}