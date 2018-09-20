import * as React from "react";
import axios from "axios";
import { Container, Icon, Content, List, ListItem, Text } from "native-base";
import style from "./styles";
import { StatusBar, View } from "react-native";
import SearchBar from "./SearchBar";
import TitleBar from "./TitleBar";
export default class Home extends React.Component {
    async demo() {
        let url = `https://registry.npmjs.org/bootstrap/latest`;
        let data = await axios.get(url);
        console.log("msg: ", data.data);
        return true;
    }
    render() {
        // this.demo().then(() => {
        //   console.log("msg: ");
        // });
        return (React.createElement(Container, { style: style.container },
            React.createElement(Content, { style: style.content },
                React.createElement(StatusBar, { hidden: true }),
                React.createElement(View, { style: style.sideBarHeader },
                    React.createElement(Icon, { style: style.icon, name: "home" }),
                    React.createElement(Icon, { style: style.icon, name: "add-circle" }),
                    React.createElement(Icon, { style: style.icon, name: "heart" }),
                    React.createElement(Icon, { style: style.icon, name: "person" }),
                    React.createElement(Icon, { style: style.icon, name: "settings" })),
                React.createElement(SearchBar, null),
                React.createElement(TitleBar, null),
                React.createElement(List, null,
                    React.createElement(ListItem, { noBorder: true },
                        React.createElement(Text, null, "ehey   cool ")),
                    React.createElement(ListItem, { noBorder: true },
                        React.createElement(Text, null, "Nathaniel Clyne")),
                    React.createElement(ListItem, { noBorder: true },
                        React.createElement(Text, null, "Dejan Lovren"))))));
    }
}
