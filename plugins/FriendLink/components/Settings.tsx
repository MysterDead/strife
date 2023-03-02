/// <reference path="..\..\..\node_modules\vendetta-types\defs.d.ts" />

import { ReactNative as RN } from "@vendetta/metro/common";
import {ErrorBoundary, Forms} from "@vendetta/ui/components";
import {getAssetByID, getAssetIDByName} from "@vendetta/ui/assets";
const { FormSection, FormSwitchRow, FormRow } = Forms;
import { storage } from "@vendetta/plugin";
import {useProxy} from "@vendetta/storage";
export default () => {
    useProxy(storage);
    return (
        <RN.ScrollView style={{flex: 1}} contentContainerStyle={{paddingBottom: 38}}>
            <FormSection title="General" titleStyleType="no_border">
                <FormRow
                    label="Invites History"
                    subLabel="Show invites list history"
                    leading={<FormRow.Icon source={getAssetIDByName("ic_history_24px")} />}
                />
                <FormRow
                    label="Generate Invite"
                    subLabel="Open modal to generate invite from this place"
                    leading={<FormRow.Icon source={getAssetIDByName("ic_audit_log_24px")} />}
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
                    subLabel="Alpha - 0.1"
                    leading={<FormRow.Icon source={getAssetIDByName("ic_selection_checked_24px")} />}
                />
            </FormSection>
        </RN.ScrollView>
    )
}