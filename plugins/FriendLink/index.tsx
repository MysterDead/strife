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
const test = findByProps('UserProfileRow')



const UnpatchRelations = after('default', UserProfileRelations, (ctx, component) => {
    const { props } = component;
    const { children } = props;
    // @ts-ignore
    if(children === undefined) return;
    if(props.showContainer === undefined || props.showContainer === false) return;
    console.log("ABC - I see child widget");
    let buttons = children;
    if(buttons === undefined) return;
    try{
        console.log("ABC - Test 1 - Success - "+buttons[0].props.children[0].props.children.length+' - ');
    }catch (e){
        console.log("ABC - Test 1 - Error - Invalid length");
    }
    try{
        console.log("ABC - Test 2 - Success - "+buttons[0].props.children[0].children[1].length);
    }catch (e){
        console.log("ABC - Test 2 - Error - Invalid length");
    }

    console.log("MysterDead - I see buttons");
    const buttonCallback = () => {
        console.log("I was clicked!");
        LazyActionSheet.hideActionSheet();
    };
    console.log("MysterDead - test");
    buttons.push((<test.UserProfileRow
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