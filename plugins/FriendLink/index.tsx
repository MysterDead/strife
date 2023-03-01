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

const UserProfileRelations = find(x => x.default?.render?.name == "UserProfileRelations").default.render;
const LazyActionSheet = findByProps("openLazy", "hideActionSheet");



const UnpatchRelations = after('default', UserProfileRelations, (ctx, component) => {
    console.log("ABC - CTX - I see the element");
    // const { props } = component;
    // const { child } = props;
    // // @ts-ignore
    // if(child === undefined) {
    //     console.log("ABC - Not see chukdreb");
    //     return;
    // }
    // const Overview = findInReactTree(child.props.child, i => i.type && i.type.name === "UserProfileRelations");
    // let buttons = Overview.child.props.children[1].props.children.props.children;
    // if(buttons === undefined){
    //     console.log("ABC - Not see buttons");
    //     return;
    // }
    // console.log("ABC - See buttons");
    // let buttons;
    // try{
    //     buttons = children[0]?.props?.children;
    // }catch (e) {
    //     console.log("ABC - ERROR GIVEN STASH 1");
    // }
    // if(buttons === undefined) return;

    // console.log("MysterDead - I see buttons");
    // const buttonCallback = () => {
    //     console.log("I was clicked!");
    //     LazyActionSheet.hideActionSheet();
    // };
    // console.log("MysterDead - test");
    // buttons.push((<Forms.FormRow
    //     label={'Send Friend Invite link'}
    //     onPress={buttonCallback}
    //     trailing={<Forms.FormRow.Icon source={getAssetByID(105)} size={'medium'} disableColor={false}/>}
    // />));
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