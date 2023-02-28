import { logger } from "@vendetta";
import Settings from "./components/Settings";
import { storage } from "@vendetta/plugin";
import {findByDisplayName, findByProps, } from "@vendetta/metro";
import {after} from "@vendetta/patcher";
import {Forms} from "@vendetta/ui/components";
import {findInReactTree} from "@vendetta/utils";

storage.profileButton ??=false;
storage.friendsTabButton ??=false;
let unpatch;

const UserProfileExperimentWrapper = findByDisplayName("UserProfileExperimentWrapper", false);
const LazyActionSheet = findByProps("openLazy", "hideActionSheet");


const UnpatchRelations = after('default', UserProfileExperimentWrapper, ([{user}], res) => {
    const UserProfileActions = findInReactTree(res.props.children, i => i.type && i.type.name === "UserProfileActions");
    after("render", UserProfileActions.type.prototype, (_, { props: { children } }) => {
        const buttonCallback = () => {
            console.log("I was clicked!");
            // You can use LazyActionSheet's hideActionSheet function to close the action sheet.
            LazyActionSheet.hideActionSheet();
        };
        children.push((<Forms.FormRow
            icon={105}
            iconColor={'#b8b9bf'}
            label={'Friend Link'}
            onPress={buttonCallback}
            accessibilityHint={'Send a friend link'}
            textColor={'#1f7026'}
        />));
    })
});

export default {
    onLoad: () => {
        logger.log("Hello world!");
        UnpatchRelations();
    },
    onUnload: () => {
        logger.log("Goodbye, world.");
        unpatch();
    },
    settings: Settings,
}