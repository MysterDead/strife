import { logger } from "@vendetta";
import Settings from "./components/Settings";
import { storage } from "@vendetta/plugin";
import {findByDisplayName, findByProps} from "@vendetta/metro";
import {ReactNative as RN } from '@vendetta/metro/common';
import {after} from "@vendetta/patcher";
import {Forms, General} from "@vendetta/ui/components";
import {getAssetByID} from "@vendetta/ui/assets";

storage.profileButton ??=false;
storage.friendsTabButton ??=false;

const UserProfileRelations = findByDisplayName("UserProfileSection", false);
const LazyActionSheet = findByProps("openLazy", "hideActionSheet");


const UnpatchRelations = after('default', UserProfileRelations, (ctx, component) => {
    const { props } = component;
    const { children } = props;
    // @ts-ignore
    if(ctx.showContainer !== null && ctx.showContainer != true)return;
    if(children === undefined) return;
    logger.log("MysterDead - I see child widget");
    const buttons = children?.props?.children[1]?.props?.children;
    logger.log("MysterDead - Try to see buttons");
    if(buttons === undefined) return;
    logger.log("MysterDead - I see buttons");
    const buttonCallback = () => {
        console.log("I was clicked!");
        LazyActionSheet.hideActionSheet();
    };
    logger.log("MysterDead - test");
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
        logger.log("Hello world!");

    },
    onUnload: () => {
        logger.log("Goodbye, world.");
        UnpatchRelations();
    },
    settings: Settings,
}