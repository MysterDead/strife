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
    if(children === undefined) return;
    console.log("MysterDead - I see child widget");
    const buttons = children;
    try{
        console.log("ABC - Test 1 - Success - "+buttons.length);
    }catch (e){
        console.log("ABC - Test 1 - Error - "+buttons.length);
    }
    try{
        console.log("ABC - Test 2 - Success - "+buttons.props.children.length);
    }catch (e){
        console.log("ABC - Test 2 - Error - "+buttons.props.children.length);
    }
    try{
        console.log("ABC - Test 3 - Success - "+buttons.props.children.props.children.length);
    }catch (e){
        console.log("ABC - Test 3 - Error - "+buttons.props.children.props.children.length);
    }
    try{
        console.log("ABC - Test 4 - Success - "+buttons.props.children.props.children.props.children.length);
    }catch (e){
        console.log("ABC - Test 4 - Error - "+buttons.props.children.props.children.props.children.length);
    }
    if(buttons === undefined) return;
    console.log("MysterDead - I see buttons");
    const buttonCallback = () => {
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