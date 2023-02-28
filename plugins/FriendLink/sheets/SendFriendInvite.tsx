import {find, findByProps} from "@vendetta/metro";
import {Forms} from "@vendetta/ui/components";

const ActionSheet = find((m) => m.default && m.default.render && m.default.render.name == "ActionSheet").default.render;
const BottomSheetScrollView = findByProps("BottomSheetScrollView").BottomSheetScrollView;

export default function AddToServerActionSheet(args) {
    return (<ActionSheet>
        <BottomSheetScrollView contentContainerStyle={{ paddingBottom: 16 }}>
            <Forms.FormText>Hello World!</Forms.FormText>
        </BottomSheetScrollView>
    </ActionSheet>)
}