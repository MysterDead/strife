import Settings from "./components/Settings";
import { storage } from "@vendetta/plugin";
import {find, findByDisplayName, findByProps} from "@vendetta/metro";
import {ReactNative as RN } from '@vendetta/metro/common';
import {after} from "@vendetta/patcher";
import {Forms, General} from "@vendetta/ui/components";
import {getAssetByID} from "@vendetta/ui/assets";
import {findInReactTree} from "@vendetta/utils";

storage.profileButton ??=false;
storage.friendsTabButton ??=false;

const getRelations = findByDisplayName('getRelations', false);
const LazyActionSheet = findByProps("openLazy", "hideActionSheet");

const UnpatchRelations = after('default', getRelations, (ctx, component) => {
    console.log("ABC - CTX - I see the element");
    return {
        ...ctx,
        UserProfileRow: {
            label: 'Send Friend Invite Link',
            onPress: ()=>{
                console.log("ABC - Pressed");
            }
        }
    }
});
export default {
    onLoad: () => {
        console.log("Hello world!");
    },
    onUnload: () => {
        console.log("Goodbye, world.");
        UnpatchRelations();
    },
    settings: Settings,
}