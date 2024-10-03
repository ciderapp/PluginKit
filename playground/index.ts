import { definePluginContext } from "../build/index.mjs";

export default definePluginContext({
    author: "Cider",
    ce_prefix: "cider",
    CustomElements: {
        "home": "Home",
        "settings": "Settings",
    },
    description: "Cider Plugin",
    identifier: "cider",
    name: "Cider",
    repo: "",
    version: "0.0.1",
    setup() {
        //
    }
})
