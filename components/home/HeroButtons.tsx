import { useHome } from "../../context/HomeContext";
import { HomeMode } from "../../controllers/HomeController";

type HeroButtonsProps = {
    primaryText: string;
    secondaryText: string;
    primaryAction: HomeMode;
};

export default function HeroButtons({
    primaryText,
    secondaryText,
    primaryAction,
}: HeroButtonsProps) {

    const { changeMode } = useHome();

    return (
        <div className="mt-6 flex flex-wrap gap-4">
            <button
                onClick={() => {
                    console.log("Botão clicado!");
                    changeMode(primaryAction);
                }}
                className="rounded-xl border border-cyan-500 px-6 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-500 hover:text-black"
            >
                🖥️ {primaryText}
            </button>

            <button
                onClick={() => {
                    console.log("Botão clicado!");
                }}
                className="rounded-xl border border-zinc-700 px-6 py-3 font-semibold text-zinc-300 transition hover:border-cyan-500 hover:text-cyan-400"
            >
                ⭐ {secondaryText}
            </button>
        </div>
    );
}