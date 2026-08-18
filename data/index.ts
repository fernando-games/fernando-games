import { products as games } from "./games"
import { hardware } from "./hardware";
import { peripherals } from "./peripherals";
import { monitors } from "./monitors";

export const products = [
    ...games,
    ...hardware,
    ...peripherals,
    ...monitors,
];