import { definePluginContext } from "../build/index.mjs";
import {mDNSDiscover} from '../build/mDNS'

const services = await mDNSDiscover({
    tcp_service: "cider._tcp.local",
    timeout: 5000
})

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
