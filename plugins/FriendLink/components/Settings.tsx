/// <reference path="..\..\..\node_modules\vendetta-types\defs.d.ts" />

import { ReactNative as RN } from "@vendetta/metro/common";
import {Forms} from "@vendetta/ui/components";
import {getAssetIDByName} from "@vendetta/ui/assets";
const { FormSection, FormSwitchRow, FormRow, FormInput } = Forms;
import { storage } from "@vendetta/plugin";
import {useProxy} from "@vendetta/storage";
import { toasts } from "@vendetta/ui";

export default () => {
    useProxy(storage);
    storage.messageContent = ':wave: **Hi there!**\nPlease add me to your friends list!';
    return (
        <RN.ScrollView style={{flex: 1}} contentContainerStyle={{paddingBottom: 38}}>
            <FormSection title="General" titleStyleType="no_border">
                <FormRow
                    label="Invites History"
                    subLabel="Show invites list history"
                    leading={<FormRow.Icon source={getAssetIDByName("ic_history_24px")} />}
                    onPress={() => {
                        toasts.showToast('Invite history is not implemented yet', 705);
                    }}
                />
                <FormRow
                    label="Message content with Invite Link. (Preview)"
                    subLabel={storage.messageContent}
                    leading={<FormRow.Icon source={getAssetIDByName("ic_selection_checked_24px")} />}
                />
            </FormSection>
            <FormSection title="Show in" titleStyleType="no_border">
                <FormSwitchRow
                    label="User profile"
                    subLabel="Show invite button in user profile. When you click you send a friend invite link to selected user as message"
                    leading={<FormRow.Icon source={getAssetIDByName("ic_members_24px")} />}
                    value={storage.profileButton}
                    onValueChange={(v) => {
                        storage.profileButton = v;
                    }}
                />
            </FormSection>
            <FormSection title="Dev" titleStyleType="no_border">
                <FormSwitchRow
                    label="Debug"
                    subLabel="Show debug logs prefixed by [FriendLink/INFO] - {message}"
                    leading={<FormRow.Icon source={getAssetIDByName("ic_rulebook_16px")} />}
                    value={storage.debug}
                    onValueChange={(v) => {
                        storage.debug = v;
                    }}
                />
                <FormRow
                    label="Version"
                    subLabel="Alpha - 0.2"
                    leading={<FormRow.Icon source={getAssetIDByName("ic_selection_checked_24px")} />}
                />
            </FormSection>
        </RN.ScrollView>
    )
}