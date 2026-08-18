import { AtlasResponse } from "@/types/AtlasTypes";

export type AtlasMode =
    | "idle"
    | "games"
    | "pc"
    | "promotion"
    | "notebook"
    | "support";

export interface AtlasState {

    mode: AtlasMode;

    mission: string;

    confidence: number;

    thinking: boolean;

    lastResponse?: AtlasResponse;

    currentFlow?: string;

    selectedGame?: string;

    selectedProduct?: string;

    budget?: number;

}