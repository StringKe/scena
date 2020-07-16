import * as React from "react";
import Icon from "./Icon";
import Memory from "../utils/Memory";

export default class OvalIcon extends Icon {
    public static id = "Oval";
    public static maker = (memory: Memory) => ({
        tag: "div",
        props: {},
        style: {
            "background-color": memory.get("background-color"),
            "border-radius": "50%",
        },
    });
    public renderIcon() {
        return (
            <svg viewBox="0 0 73 73">
                <ellipse fill="#555" cx="36.5" cy="36.5" rx="20" ry="15"
                    strokeLinejoin="round" strokeWidth="3" stroke="#fff"></ellipse></svg>
        );
    }
}
