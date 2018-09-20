import * as React from 'react';
import { Header, Item, Icon, Button, Text } from 'native-base';
import style from "./styles";
export default class SearchBar extends React.Component {
    render() {
        return (React.createElement(Header, { style: style.searchBar, searchBar: true, rounded: true },
            React.createElement(Item, { style: style.searchBarInput },
                React.createElement(Icon, { name: "ios-search" }),
                React.createElement(Icon, { name: "ios-people" })),
            React.createElement(Button, { transparent: true },
                React.createElement(Text, null, "Search"))));
    }
}
