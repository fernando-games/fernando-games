export type AtlasContext = {
    topic: "pc" | "jogo" | "promocao" | "periferico" | null;
};

export const atlasMemory: AtlasContext = {
    topic: null,
};
