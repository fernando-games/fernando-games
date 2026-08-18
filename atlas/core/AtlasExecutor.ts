import { AtlasState } from "./AtlasState";
import { AtlasResponse } from "@/types/AtlasTypes";

export interface AtlasExecutor {

    execute(
        state: AtlasState,
        response: AtlasResponse
    ): void | Promise<void>;

}