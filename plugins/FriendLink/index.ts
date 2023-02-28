import { logger } from "@vendetta";
import Settings from "./components/Settings";
import { storage } from "@vendetta/plugin";

storage.profileButton ??=false;
storage.friendsTabButton ??=false;
export default {
    onLoad: () => {
        logger.log("Hello world!");
    },
    onUnload: () => {
        logger.log("Goodbye, world.");
    },
    settings: Settings,
}