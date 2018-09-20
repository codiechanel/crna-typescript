import * as React from "react";
import {
  Container,
  Header,
  Item,
  Input,
  Icon,
  Button,
  Text
} from "native-base";
import style from "./styles";
import { View } from "react-native";
export default class TitleBar extends React.Component {
  render() {
    return (
      <View style={style.titleBar}>
        <Text >Home</Text>
      </View>
    );
  }
}
