/// <reference path="..\..\..\node_modules\vendetta-types\defs.d.ts" />

import { ReactNative as RN } from "@vendetta/metro/common";
import {ErrorBoundary, Forms} from "@vendetta/ui/components";
import {getAssetIDByName} from "@vendetta/ui/assets";
const { FormSection, FormSwitchRow, FormRow } = Forms;

export default function Settings() {
    return (
        <>
            <ErrorBoundary>
                <RN.ScrollView style={{flex: 1}} contentContainerStyle={{paddingBottom: 38}}>
                    <FormSection title="Show in" titleStyleType="no_border">
                        <FormSwitchRow
                            label="User profile"
                            subLabel="Show invite button in user profile. When you click you send a friend invite link to selected user as message"
                            leading={<FormRow.Icon source={getAssetIDByName("ic_members")} />}
                        />
                        <FormSwitchRow
                            label="Friend Tab"
                            subLabel="Show invite button as toolbox in friends tab"
                            leading={<FormRow.Icon source={getAssetIDByName("friends_toast_icon")} />}
                        />
                    </FormSection>
                </RN.ScrollView>
            </ErrorBoundary>
        </>
    )
}