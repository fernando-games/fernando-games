export type AtlasStatus =
    | "idle"
    | "speaking"
    | "thinking"
    | "waiting"
    | "finished";

export type AtlasChoice = {
    id: string;
    label: string;
};

export type AtlasRuntimeState = {
    status: AtlasStatus;
    message: string;
    choices: AtlasChoice[];
};

export default class AtlasRuntime {

    private state: AtlasRuntimeState = {
        status: "idle",
        message: "",
        choices: [],
    };

    getState() {
        return this.state;
    }

    speak(message: string) {
        this.state = {
            ...this.state,
            status: "speaking",
            message,
        };
    }

    waitChoices(
        message: string,
        choices: AtlasChoice[],
    ) {
        this.state = {
            status: "waiting",
            message,
            choices,
        };
    }

    think(message = "Analisando...") {
        this.state = {
            ...this.state,
            status: "thinking",
            message,
        };
    }

    finish(message: string) {
        this.state = {
            status: "finished",
            message,
            choices: [],
        };
    }
}