export interface AtlasMessage {
    role: "user" | "assistant";
    content: string;
}

export interface AtlasProduct {
    id: number;
    name: string;
    category: string;
    price: number;
    image: string;
}

export interface AtlasRecommendation {
    cpu: string;
    gpu: string;
    ram: number;
    storage: string;
    motherboard: string;
    powerSupply: string;
    explanation: string;
    upgrades: string[];
}

export type AtlasAIState =
    | "idle"
    | "listening"
    | "thinking"
    | "speaking"
    | "presenting";

export type AtlasModule =
    | "home"
    | "pc"
    | "games"
    | "gear"
    | "promotion"
    | "support";

export interface AtlasResponse {
    type?: "text" | "recommendation";

    title?: string;

    message: string;

    action?:
    | "build-pc"
    | "open-games"
    | "open-promotions"
    | "open-product";

    product?: string;

    recommendation?: AtlasRecommendation;

    products?: AtlasProduct[];

    state?: AtlasAIState;

    module?: AtlasModule;

    scene?: string;

    animation?: string;
}

export interface AtlasMemory {
    userName?: string;
    budget?: number;
    favoriteGame?: string;
    currentFlow?: string;

    build?: AtlasRecommendation;

    [key: string]: unknown;
}