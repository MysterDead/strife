import { logger } from "@vendetta";
import Settings from "./components/Settings";
import { storage } from "@vendetta/plugin";
import {findByDisplayName} from "@vendetta/metro";
import {after} from "@vendetta/patcher";

storage.profileButton ??=false;
storage.friendsTabButton ??=false;
let unpatch;

const UserProfile = findByDisplayName("UserProfile");
export default {
    onLoad: () => {
        logger.log("Hello world!");
        unpatch = after("default", UserProfile, ([{ userNode }], res) => {
            logger.log(JSON.stringify(userNode));
        });
    },
    onUnload: () => {
        logger.log("Goodbye, world.");
        unpatch();
    },
    settings: Settings,
}