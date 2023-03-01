import Settings from "./components/Settings";
import { storage } from "@vendetta/plugin";
import {find, findByDisplayName, findByProps} from "@vendetta/metro";
import {i18n, ReactNative as RN} from '@vendetta/metro/common';
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
        if(children[1] !=null && children[1] !=undefined) {
            let buttons = children[1]?.props?.children;
            if(buttons === undefined) return;
            const check = buttons.filter(a=> a.props.label === i18n.Messages['INVITE_TO_SERVER']);
            if(check === undefined) return;
            if(check.length === 0) return;
            console.log(buttons[0]);
            const buttonCallback = () => {
                LazyActionSheet.hideActionSheet();
            };
            buttons.push((<UserProfileRow
                label={'Send Friend Invite link'}
                onPress={buttonCallback}
                trailing={<Icon source={105} size={'medium'} disableColor={false}/>}
            />));
        }
    }catch (e){
        console.log('Error while rendering friend invite button in user relations');
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