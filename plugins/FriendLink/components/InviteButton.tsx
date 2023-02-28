/// <reference path="..\..\..\node_modules\vendetta-types\defs.d.ts" />

import {find, findByDisplayName, findByProps} from "@vendetta/metro";
import {getAssetIDByName} from "@vendetta/ui/assets";

const {
    default: UserProfileRow,
    label,
    onPress,
    trailing,
} = findByProps("label", "onPress", "trailing");


let ActionSheet = findByDisplayName('UserProfileRelations');

const LazyActionSheet = findByProps("openLazy", "hideActionSheet");

const LinkAsset = getAssetIDByName("toast_copy_link");

export default function sendUserInvite(){
    const buttons = [
        ...(ActionSheet ? [
            {
                label: 'Invite as Friend Link',
                onPress(){},
                trailing: LinkAsset,
            }
        ] : [])
    ]
    return <>
        {buttons.map(({ label, onPress, trailing }) =>
            <UserProfileRow
                label={label}
                onPress={onPress}
                trailing={trailing}
            />
        )}
    </>
}