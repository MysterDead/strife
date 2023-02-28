import { logger } from "@vendetta";
import Settings from "./components/Settings";
import { storage } from "@vendetta/plugin";
import {findByDisplayName, findByProps} from "@vendetta/metro";
import {after} from "@vendetta/patcher";
import {Forms} from "@vendetta/ui/components";
import {getAssetIDByName} from "@vendetta/ui/assets";

storage.profileButton ??=false;
storage.friendsTabButton ??=false;
let unpatch;

const UserProfileRelations = findByDisplayName("UserProfileRelations", false);
const LazyActionSheet = findByProps("openLazy", "hideActionSheet");
const Icon = findByDisplayName("Icon");

const {
    default: UserProfileRow,
    label,
    onPress,
    trailing,
} = findByProps("label", "onPress", "trailing");

const UnpatchRelations = after('default', UserProfileRelations, ([{hideUserProfile, showUserProfile, user}], res) => {
    let buttons = res?.props?.children?.find(e=> e.type.name === 'UserProfileSection')?.children;
    const buttonIcon = getAssetIDByName("ic_select_manually_24px");
    const buttonCallback = () => {
        console.log("I was clicked!");
        // You can use LazyActionSheet's hideActionSheet function to close the action sheet.
        LazyActionSheet.hideActionSheet();
    };
    buttons.push((<UserProfileRow
        trailing={<Icon source={buttonIcon} />}
        label={'Send Friend Invite link'}
        onPress={buttonCallback}
    />))
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