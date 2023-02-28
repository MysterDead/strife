import Settings from "./components/Settings";
import { storage } from "@vendetta/plugin";
import {findByDisplayName, findByProps} from "@vendetta/metro";
import {ReactNative as RN } from '@vendetta/metro/common';
import {after} from "@vendetta/patcher";
import {Forms, General} from "@vendetta/ui/components";
import {getAssetByID} from "@vendetta/ui/assets";

storage.profileButton ??=false;
storage.friendsTabButton ??=false;

const UserProfileRelations = findByDisplayName('UserProfileRelations', false)
const LazyActionSheet = findByProps("openLazy", "hideActionSheet");


const UnpatchRelations = after('default', UserProfileRelations, (ctx, component) => {
    const { props } = component;
    const { children } = props;

    const relations = children?.props?.children;
    console.log("MysterDead - Try to see relations button");
    // @ts-ignore
    if(relations === undefined) return;
    console.log("MysterDead - I see the relations");
    const buttons = relations;
    console.log("MysterDead - Try to see relations buttons");
    if(buttons === undefined) return;
    console.log("MysterDead - I see buttons");
    const buttonCallback = () => {
        console.log("I was clicked!");
        LazyActionSheet.hideActionSheet();
    };
    console.log("MysterDead - Append button...");
    buttons.push((<Forms.FormRow
        label={'Send Friend Invite link'}
        onPress={buttonCallback}
    />));
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