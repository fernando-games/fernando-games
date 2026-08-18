import { AtlasExecutor } from "../core/AtlasExecutor";
import { AtlasResponse } from "@/types/AtlasTypes";
import { AtlasState } from "../core/AtlasState";
import { AtlasController } from "../core/AtlasController";
import HomeController from "../../controllers/HomeController";

export class OpenWorkspaceExecutor implements AtlasExecutor {
    private controller = new AtlasController();

    execute(
        state: AtlasState,
        response: AtlasResponse
    ) {

        state.mode = "pc";
        state.mission = "Montando PC Gamer";

        console.log("🚀 Workspace aberto pelo Atlas.");
        this.controller.openWorkspace();

    }

}