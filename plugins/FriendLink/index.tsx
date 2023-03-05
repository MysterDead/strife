import Settings from "./components/Settings";
import { storage } from "@vendetta/plugin";
import {find, findByDisplayName, findByProps} from "@vendetta/metro";
import {i18n, ReactNative as RN} from '@vendetta/metro/common';
import {after, before, instead} from "@vendetta/patcher";
import {Forms, General} from "@vendetta/ui/components";
import {getAssetByID} from "@vendetta/ui/assets";
import {findInReactTree} from "@vendetta/utils";
import { toasts } from "@vendetta/ui";

storage.profileButton ??=false;
storage.messageContent ??=':wave: **Hi there!**\nPlease add me to your friends list!';
storage.debug ??=false;

const UserProfileSection = findByDisplayName("UserProfileSection", false);
const LazyActionSheet = findByProps("openLazy", "hideActionSheet");
const ChannelStore = findByProps("getChannel", "getDMFromUserId");
const Icon = findByDisplayName("Icon")
const UserProfileRow = findByDisplayName("UserProfileRow");
const MessageActions = findByProps("sendMessage", "receiveMessage");
const FI = findByProps("createFriendInvite", 'getAllFriendInvites', 'revokeFriendInvites');
import { registerCommand } from "@vendetta/commands";




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
            const userId = buttons[0].props.userId;
            const dmId = ChannelStore.getDMFromUserId(userId);
            const buttonCallback = async () => {
                console.log('ABC - Send friend invite button clicked');
                const invite = await FI.createFriendInvite();
                console.log('ABC - Invite checking');
                if (!invite) {
                    toasts.showToast('Cannot send friend invite link', 765);
                    return;
                }
                console.log('ABC - Invite sending');
                const sended = await MessageActions.sendMessage(dmId, {
                    content: storage.messageContent+'\n\n\nhttps://discord.gg/' +invite.code
                });
                console.log('ABC - Invite sended');
                if(!sended){
                    toasts.showToast('Cannot send friend invite link', 765);
                    return;
                }
                console.log('ABC - Invite is sended');
                toasts.showToast('Invite has been sended', 426);
                LazyActionSheet.hideActionSheet();
            };
            buttons.push((<UserProfileRow
                label={'Send Friend Invite'}
                onPress={buttonCallback}
                trailing={<Icon source={869} size={'medium'} disableColor={true}/>}
            />));
        }
    }catch (e){
        alert('Error while rendering friend invite button in user relations error='+e.toString());
    }
    // @ts-ignore
    ctx.result = [component]
});


let FriendLinkCommand = registerCommand({
    name: 'Friend Invite',
    displayName: 'invite',
    description: 'Send friend invite',
    displayDescription: 'Send friend invite',
    async execute(args, ctx){
        const invite = await FI.createFriendInvite();
        console.log('ABC - Invite checking');
        if (!invite) {
            toasts.showToast('Cannot send friend invite link', 765);
            return {content: 'Cannot send friend invite link'};
        }
        return {content: storage.messageContent+'\n\n\nhttps://discord.gg/' +invite.code}
    },
    inputType: 1,
    type: 1,
    options: [],
    applicationId: "-1"
})



export default {
    onLoad: () => {
        console.log("Hello world!");
    
    },
    onUnload: () => {
        console.log("Goodbye, world.");
        UnpatchRelations();
        FriendLinkCommand();
    },
    settings: Settings,
}