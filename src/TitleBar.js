import * as React from "react";
import { Text } from "native-base";
import style from "./styles";
import { View } from "react-native";
export default class TitleBar extends React.Component {
    render() {
        return (React.createElement(View, { style: style.titleBar },
            React.createElement(Text, null, "Home")));
    }
}
