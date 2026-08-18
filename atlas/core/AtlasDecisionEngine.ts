import { Intent } from "../knowledge/IntentRecognizer";
import { UserProfile } from "../knowledge/UserProfiler";

export interface AtlasDecision {

    shouldRecommendPC: boolean;

    shouldRecommendGame: boolean;

    shouldExplainParts: boolean;

    shouldAskBudget: boolean;

}

export class AtlasDecisionEngine {

    decide(
        intent: Intent,
        profile: UserProfile
    ): AtlasDecision {

        if (intent === "budget") {

            return {

                shouldRecommendPC: true,

                shouldRecommendGame: false,

                shouldExplainParts:
                    profile === "beginner",

                shouldAskBudget: false

            };

        }

        if (intent === "recommend-game") {

            return {

                shouldRecommendPC: false,

                shouldRecommendGame: true,

                shouldExplainParts: false,

                shouldAskBudget: false

            };

        }

        return {

            shouldRecommendPC: false,

            shouldRecommendGame: false,

            shouldExplainParts: false,

            shouldAskBudget: true

        };

    }

}