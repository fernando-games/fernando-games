"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { AtlasContextState } from "@/types/AtlasContextState";

const initialState: AtlasContextState = {
    level: 1,
    xp: 0,

    mission: "Aguardando missão",

    workspace: "home",

    memory: {},
};

type AtlasContextType = {
    atlas: AtlasContextState;

    setAtlas: React.Dispatch<
        React.SetStateAction<AtlasContextState>
    >;
};

const AtlasContext = createContext<AtlasContextType | null>(null);

export function AtlasProvider({ children }: { children: ReactNode }) {

    const [atlas, setAtlas] = useState(initialState);

    return (
        <AtlasContext.Provider
            value={{
                atlas,
                setAtlas,
            }}
        >
            {children}
        </AtlasContext.Provider>
    );
}

export function useAtlas() {

    const context = useContext(AtlasContext);

    if (!context) {
        throw new Error("useAtlas deve ser usado dentro do AtlasProvider.");
    }

    return context;
}