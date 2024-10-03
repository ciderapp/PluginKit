import { useCider } from "./Std";

export async function saveConfig() {
    return useCider().config.saveConfig();
}
