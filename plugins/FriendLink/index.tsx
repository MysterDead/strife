import Settings from "./components/Settings";
import { storage } from "@vendetta/plugin";
import {find, findByDisplayName, findByProps} from "@vendetta/metro";
import {i18n, ReactNative as RN} from '@vendetta/metro/common';
import {after, before} from "@vendetta/patcher";
import {Forms, General} from "@vendetta/ui/components";
import {getAssetByID} from "@vendetta/ui/assets";
import {findInReactTree} from "@vendetta/utils";
const ChannelStore = findByProps("getChannel", "getDMFromUserId");

storage.profileButton ??=false;
storage.debug ??=false;

const UserProfileSection = findByDisplayName("UserProfileSection", false);
const LazyActionSheet = findByProps("openLazy", "hideActionSheet");
const Icon = findByDisplayName("Icon")
const UserProfileRow = findByDisplayName("UserProfileRow")
const UserProfileRelations = findByDisplayName("UserProfileRelations")


const UnpatchRelations = after('default', UserProfileSection, (ctx, component) => {
    const { props } = component;
    const { children } = props;
    if(children === undefined) return;
    try {
        if(children[1] !=null && children[1] !=undefined) {
            let buttons = children[1]?.props?.children;
            if(buttons === undefined) return;
            const guildButton = buttons[1]?.props;
            if(guildButton === undefined) return;
            const check = guildButton?.label === i18n.Messages['MUTUAL_GUILDS'];
            if (!check) return;
            if (!storage.profileButton) return;
            const buttonCallback = () => {
                console.log('click');
                console.log(UserProfileRelations);
            };
            buttons.push((<UserProfileRow
                label={'Invite as Friend Invite'}
                onPress={buttonCallback}
                trailing={<Icon source={411} size={'medium'} disableColor={true}/>}
            />));
        }
    }catch (e){
        console.log('Error while rendering friend invite button in user relations error='+e.toString());
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