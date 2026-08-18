import { AtlasExecutor } from "./AtlasExecutor";
import { AtlasResponse } from "@/types/AtlasTypes";
import { AtlasState } from "./AtlasState";

export class AtlasRegistry {

    private executors = new Map<string, AtlasExecutor>();

    register(action: string, executor: AtlasExecutor): void {

        this.executors.set(action, executor);

    }

    async execute(
        action: string,
        state: AtlasState,
        response: AtlasResponse
    ) {

        const executor = this.executors.get(action);

        if (!executor) {

            console.warn(
                `[AtlasRegistry] Executor não encontrado para: ${action}`
            );

            return;
        }

        await executor.execute(state, response);

    }

    has(action: string): boolean {

        return this.executors.has(action);

    }

    clear() {

        this.executors.clear();

    }

}
