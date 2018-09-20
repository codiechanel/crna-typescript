import * as React from 'react';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
import style from "./styles";
export default class SearchBar extends React.Component {
    render() {
        return (

                <Header style={style.searchBar} searchBar rounded>
                    <Item  style={style.searchBarInput}>
                        <Icon name="ios-search" />
                        {/*<Input placeholder="Search" />*/}
                        <Icon name="ios-people" />
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>

        );
    }
}
