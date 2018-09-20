import * as React from "react";
import axios from "axios";
import {
  Container,
  Icon,
  Content,
  Button,
  List,
  ListItem,
  Text
} from "native-base";
import style from "./styles";
import { StatusBar, View } from "react-native";
import SearchBar from "./SearchBar";
import TitleBar from "./TitleBar";

export default class Home extends React.Component<any, any> {
  async demo() {
    let url = `https://registry.npmjs.org/bootstrap/latest`;
    let data: any = await axios.get(url);
    console.log("msg: ", data.data);
    return true;
  }

  render() {
    // this.demo().then(() => {
    //   console.log("msg: ");
    // });

    return (
      <Container style={style.container}>
        <Content style={style.content}>
          <StatusBar hidden={true} />
          <View style={style.sideBarHeader}>
            <Icon style={style.icon} name="home" />
            <Icon style={style.icon} name="add-circle" />
            <Icon style={style.icon} name="heart" />
            <Icon style={style.icon} name="person" />
            <Icon style={style.icon} name="settings" />
          </View>
          <SearchBar />
          <TitleBar />

          <List>
            <ListItem noBorder>
              <Text>ehey   cool </Text>
            </ListItem>
            <ListItem noBorder>
              <Text>Nathaniel Clyne</Text>
            </ListItem>
            <ListItem noBorder>
              <Text>Dejan Lovren</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
