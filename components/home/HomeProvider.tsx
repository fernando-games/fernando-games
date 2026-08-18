"use client";

import HomeController, { HomeMode } from "../../controllers/HomeController";
import { ReactNode, useEffect, useRef, useState } from "react";
import { HomeContext } from "../../context/HomeContext";

type HomeProviderProps = {
    children: ReactNode;
};

export default function HomeProvider({
    children,
}: HomeProviderProps) {

    const homeController = useRef(HomeController.getInstance()).current;
    const [homeState, setHomeState] = useState(
        homeController.getState()

    );
    useEffect(() => {

        homeController.subscribe(() => {

            setHomeState({ ...homeController.getState() });

        });

    }, [homeController]);
    
    const changeMode = (mode: HomeMode) => {
        homeController.changeMode(mode);
    };

    return (
        <HomeContext.Provider value={{ homeState, changeMode }}>
            {children}
        </HomeContext.Provider>
    );
}