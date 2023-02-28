import Settings from "./components/Settings";
import { storage } from "@vendetta/plugin";
import {findByDisplayName, findByProps} from "@vendetta/metro";
import {ReactNative as RN } from '@vendetta/metro/common';
import {after} from "@vendetta/patcher";
import {Forms, General} from "@vendetta/ui/components";
import {getAssetByID} from "@vendetta/ui/assets";

storage.profileButton ??=false;
storage.friendsTabButton ??=false;

const UserProfileRelations = findByDisplayName("UserProfileRelations", false);
const Icon = findByDisplayName("Icon", false);
const LazyActionSheet = findByProps("openLazy", "hideActionSheet");


const UnpatchRelations = after('default', UserProfileRelations, (ctx, component) => {
    const { props } = component;
    const { children } = props;
    console.log("test3 - Try to see children");
    // @ts-ignore
    if(children === undefined) return;
    console.log("test3 - I see child widget");
    const buttons = children[0]?.props?.children;
    console.log("test3 - Try to see buttons");
    if(buttons === undefined) return;
    console.log("test3 - I see buttons");
    const buttonCallback = () => {
        console.log("test3 - I was clicked!");
        LazyActionSheet.hideActionSheet();
    };
    console.log("test3 - test");
    buttons.push((<Forms.FormRow
        label={'Send Friend Invite link'}
        onPress={buttonCallback}
        trailing={<Icon source={105} size={'medium'} disableColor={false}/>}
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