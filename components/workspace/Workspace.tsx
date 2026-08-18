"use client";

import { useAtlas } from "@/atlas/context/AtlasContext";

import WorkspaceEmpty from "./WorkspaceEmpty";
import WorkspacePc from "./WorkspacePc";
import WorkspaceGames from "./WorkspaceGames";
import WorkspacePromotion from "./WorkspacePromotion";
import WorkspaceProduct from "./WorkspaceProduct";

export default function Workspace() {
    const { atlas } = useAtlas();

    switch (atlas.workspace) {

        case "pc":
            return <WorkspacePc />;

        case "games":
            return <WorkspaceGames />;

        case "promotions":
            return <WorkspacePromotion />;
        
            case "products":
            return <WorkspaceProduct />;


        default:
            return <WorkspaceEmpty />;
    }
}