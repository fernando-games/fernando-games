"use client";

import { createContext, useContext } from "react";
import { HomeMode, HomeState } from "../controllers/HomeController";

type HomeContextType = {
    homeState: HomeState;
    changeMode: (mode: HomeMode) => void;
};
export const HomeContext = createContext<HomeContextType | undefined>(undefined);
export function useHome() {
    const context = useContext(HomeContext);

    if (!context) {
        throw new Error("useHome deve ser usado dentro de um HomeProvider.");
    }

    return context;
}