import Settings from "./components/Settings";
import { storage } from "@vendetta/plugin";
import {findByDisplayName, findByProps} from "@vendetta/metro";
import {ReactNative as RN } from '@vendetta/metro/common';
import {after} from "@vendetta/patcher";
import {Forms, General} from "@vendetta/ui/components";
import {getAssetByID} from "@vendetta/ui/assets";

storage.profileButton ??=false;
storage.friendsTabButton ??=false;

const UserProfileSection = findByDisplayName('UserProfileSection', false)
const LazyActionSheet = findByProps("openLazy", "hideActionSheet");


const UnpatchRelations = after('default', UserProfileSection, (ctx, component) => {
    let { props } = component;
    let { children } = props;

    if(children === undefined) return;
    console.log("MysterDead - I see child widget");
    let buttons = children?.props?.children[0]?.props?.children;
    console.log("MysterDead - Try to see buttons");
    if(buttons === undefined) return;
    console.log("MysterDead - I see buttons");
    let buttonCallback = () => {
        console.log("I was clicked!");
        LazyActionSheet.hideActionSheet();
    };
    console.log("MysterDead - test");
    buttons.push((<Forms.FormRow
        label={'Send Friend Invite link'}
        onPress={buttonCallback}
        trailing={<Forms.FormRow.Icon source={getAssetByID(105)} size={'medium'} disableColor={false}/>}
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