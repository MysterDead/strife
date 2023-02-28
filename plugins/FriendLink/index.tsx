import { logger } from "@vendetta";
import Settings from "./components/Settings";
import { storage } from "@vendetta/plugin";
import {findByDisplayName, findByProps, } from "@vendetta/metro";
import {after} from "@vendetta/patcher";
import {Forms, General} from "@vendetta/ui/components";
import {getAssetByID} from "@vendetta/ui/assets";

storage.profileButton ??=false;
storage.friendsTabButton ??=false;

const UserProfileExperimentWrapper = findByDisplayName("UserProfileRelations", false);
const Icon = findByDisplayName("Icon");
const LazyActionSheet = findByProps("openLazy", "hideActionSheet");


const UnpatchRelations = after('default', UserProfileExperimentWrapper, (ctx, component) => {
    const { props } = component;
    const { children } = props;
    if(children === undefined) return;
    const buttons = children?.props?.children[1]?.props?.children;
    if(buttons === undefined) return;
    const buttonCallback = () => {
        console.log("I was clicked!");
        LazyActionSheet.hideActionSheet();
    };
    logger.log("MysterDead - test");
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
        logger.log("Hello world!");

    },
    onUnload: () => {
        logger.log("Goodbye, world.");
        UnpatchRelations();
    },
    settings: Settings,
}