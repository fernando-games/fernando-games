import { useHome } from "../../context/HomeContext";

type HeroButtonsProps = {
    secondaryText: string;
};

export default function HeroButtons({
    secondaryText,
}: HeroButtonsProps) {

    const { changeMode } = useHome();

    return (
        <div className="mt-6 flex flex-wrap gap-4">

            <button
                type="button"
                onClick={() => changeMode("store")}
                className="
                    rounded-xl
                    border
                    border-cyan-400
                    bg-cyan-500/10
                    px-7
                    py-3
                    font-semibold
                    text-cyan-300
                    shadow-lg
                    shadow-cyan-500/10
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-cyan-400
                    hover:text-black
                    hover:shadow-cyan-400/30
                "
            >
                ⭐ {secondaryText}
            </button>

        </div>
    );
}