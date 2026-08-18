export type FlowType =
    | "idle"
    | "build-pc"
    | "promotion"
    | "notebook"
    | "support";

export type ConversationStep =
    | "start"
    | "budget"
    | "games"
    | "parts"
    | "finished";

export interface ConversationContext {
    currentFlow: FlowType;
    currentStep: ConversationStep;

    flowStack: FlowType[];

    confidence: number;

    userLevel: "beginner" | "intermediate" | "advanced";
}

export class ConversationManager {
    private context: ConversationContext = {
        currentFlow: "idle",
        currentStep: "start",

        flowStack: [],

        confidence: 0,

        userLevel: "beginner",
    };

    getContext() {
        return this.context;
    }
    startFlow(flow: FlowType) {
        this.context.currentFlow = flow;
        this.context.currentStep = "start";
    }

    changeStep(step: ConversationStep) {
        this.context.currentStep = step;
    }

    setUserLevel(level: "beginner" | "intermediate" | "advanced") {
        this.context.userLevel = level;
    }

    increaseConfidence(value: number) {
        this.context.confidence = Math.min(
            100,
            this.context.confidence + value
        );
    }

    reset() {
        this.context = {
            currentFlow: "idle",
            currentStep: "start",
            flowStack: [],
            confidence: 0,
            userLevel: "beginner",
        };
    }
}