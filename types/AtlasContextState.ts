import { AtlasMemory } from "./AtlasTypes";

export interface AtlasContextState {
    level: number;
    xp: number;

    mission: string;

    workspace: string;

    memory: AtlasMemory;
}