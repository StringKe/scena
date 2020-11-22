import * as React from "react";
import Tab from "../Tab";
import Folder, { FileInfo } from "../Folder/Folder";
import File from "../Folder/File";
import Layer from "./Layer";
import { getIds, isScenaFunction } from "../../utils/utils";
import { isString } from "@daybrush/utils";
import { ElementInfo } from "../../types";
import LayerIcon from "../../Icons/LayerIcon";

export default class LayerTab extends Tab {
    public static id = "Layers";
    public static icon = LayerIcon;
    public title = "Layers";

    public renderTab() {
        const infos = this.context.getViewportInfos();
        const selected = getIds(this.getSelectedTargets());

        return <Folder<ElementInfo>
            scope={[]}
            name="" properties={infos}
            multiselect={true}
            isMove={true}
            getId={(v: ElementInfo) => v.id}
            getFullId={id => id}
            getName={(v: ElementInfo) => v.name}
            getChildren={(v: ElementInfo) => v.children || []}
            selected={selected}
            onSelect={this.onSelect}
            checkMove={this.checkMove}
            onMove={this.onMove}
            FileComponent={this.renderFile} />;
    }
    public renderFile = ({ name, fullId, scope, value }: File["props"]) => {
        return <Layer name={name} fullId={fullId} scope={scope} value={value}></Layer>;
    }
    public componentDidMount() {
        this.addEvent("setSelectedTargets", this.setSelectedTargets);
    }

    private onSelect = (selected: string[]) => {
        this.eventBus.requestTrigger("selectLayers", {
            selected,
        });
    }
    private onMove = (selectedInfos: Array<FileInfo<ElementInfo>>, parentInfo?: FileInfo<ElementInfo>, prevInfo?: FileInfo<ElementInfo>) => {
        const editor = this.context;
        const viewport = editor.getViewport();

        editor.moves(selectedInfos.map((info, i) => ({
            info: info.value,
            parentInfo: viewport.getInfo(parentInfo ? parentInfo.fullId : "viewport"),
            prevInfo: i === 0
                ? viewport.getInfo(prevInfo ? prevInfo.fullId : "")
                : selectedInfos[i - 1].value,
        })));
    }
    private checkMove = (prevInfo: FileInfo<ElementInfo>) => {
        const jsx = prevInfo.value.jsx;

        if (isScenaFunction(jsx)) {
            return false;
        }

        return isString(jsx) || isString(jsx.type);
    }
    private setSelectedTargets = () => {
        this.forceUpdate();
    }
}
