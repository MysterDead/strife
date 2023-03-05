/// <reference path="..\..\..\node_modules\vendetta-types\defs.d.ts" />

import { React, ReactNative as RN } from "@vendetta/metro/common";
import { storage } from "@vendetta/plugin";
import {useProxy} from "@vendetta/storage";
import { ErrorBoundary } from "@vendetta/ui/components";


export default () => {
    useProxy(storage);

    return (
        <ErrorBoundary>
            <RN.ScrollView style={{flex: 1}} contentContainerStyle={{paddingBottom: 38}}>
                <RN.Text>Invite History</RN.Text>
            </RN.ScrollView>
        </ErrorBoundary>

    );
}