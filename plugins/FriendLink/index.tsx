import { logger } from "@vendetta";
import Settings from "./components/Settings";
import { storage } from "@vendetta/plugin";
import {find, findByDisplayName, findByProps} from "@vendetta/metro";
import {after} from "@vendetta/patcher";
import {Forms} from "@vendetta/ui/components";
import InviteButton from './components/InviteButton';

storage.profileButton ??=false;
storage.friendsTabButton ??=false;
let unpatch;

const ChannelLongPressActionSheet = findByDisplayName('ChannelLongPressActionSheetConnected')

export default {
    onLoad: () => {
        logger.log("Hello world!");
        unpatch = after("default", ChannelLongPressActionSheet, ([{ channel }], res) => {
            logger.log('TEST - '+JSON.stringify(channel));
            res.props?.children?.push(<>
                <Forms.FormText>TESATA</Forms.FormText>
            </>);
        });
    },
    onUnload: () => {
        logger.log("Goodbye, world.");
        unpatch();
    },
    settings: Settings,
}