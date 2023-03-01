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

const UserProfileRelations = findByDisplayName("UserProfileSection", false);
const LazyActionSheet = findByProps("openLazy", "hideActionSheet");
const Icon = findByDisplayName("Icon")
const UserProfileRow = findByDisplayName("UserProfileRow")



const UnpatchRelations = after('default', UserProfileRelations, (ctx, component) => {
    const { props } = component;
    const { children } = props;
    if(children === undefined) return;
    try {
        console.log('LOL - TRY 1')
        if(children[1] !=null && children[1] !=undefined) {
            console.log('LOL - MAYBE 2')
            let buttons = children[1]?.props?.children;
            console.log('LOL - OKEY 3')
            if(buttons === undefined) return;
            console.log('LOL - UWU 4')
            const buttonCallback = () => {
                console.log("I was clicked!");
                LazyActionSheet.hideActionSheet();
            };
            console.log('LOL - BUTTON 5')
            buttons.push((<UserProfileRow
                label={'Send Friend Invite link'}
                onPress={buttonCallback}
            />));
            console.log('LOL - PUSHED 6')
        }
    }catch (e){
        console.log('LOL - ERROR')
    }
    // @ts-ignore
    ctx.result = [component]
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