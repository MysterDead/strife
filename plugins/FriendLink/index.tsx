import { logger } from "@vendetta";
import Settings from "./components/Settings";
import { storage } from "@vendetta/plugin";
import {findByDisplayName} from "@vendetta/metro";
import {after} from "@vendetta/patcher";
import {Forms} from "@vendetta/ui/components";

storage.profileButton ??=false;
storage.friendsTabButton ??=false;
let unpatch;

const UserProfile = findByDisplayName("UserProfileRelations");
export default {
    onLoad: () => {
        logger.log("Hello world!");
        unpatch = after("render", UserProfile, ([{ userNode }], res) => {
            res.children.push(<Forms.FormText>TESTMODE</Forms.FormText>)
        });
        after("default", UserProfile, ([{ userNode }], res) => {
            res.children.push(<Forms.FormText>TESTMODE</Forms.FormText>)
        });
    },
    onUnload: () => {
        logger.log("Goodbye, world.");
        unpatch();
    },
    settings: Settings,
}