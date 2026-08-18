import { OpenWorkspaceExecutor } from "../executors/OpenWorkspaceExecutor";
import { AtlasEngine } from "./AtlasEngine";
import { AtlasRegistry } from "./AtlasRegistry";
import { AtlasState } from "./AtlasState";
import { AtlasMessage, AtlasResponse } from "@/types/AtlasTypes";

export class AtlasDirector {

    private engine = new AtlasEngine();

    private registry = new AtlasRegistry();

    private state: AtlasState = {

        mode: "idle",

        mission: "Aguardando...",

        confidence: 100,

        thinking: false

    };
    constructor() {

        this.registry.register(
            "open-workspace",
            new OpenWorkspaceExecutor()
        );

    }

    getState() {

        return this.state;

    }

    register(action: string, executor: any) {

        this.registry.register(action, executor);

    }

    async process(message: AtlasMessage): Promise<AtlasResponse> {

        this.state.thinking = true;

        const response = await this.engine.process(message);

        this.state.thinking = false;

        this.state.lastResponse = response;

        if (response.action) {

            await this.registry.execute(

                response.action,

                this.state,

                response

            );

        }

        return response;

    }

}