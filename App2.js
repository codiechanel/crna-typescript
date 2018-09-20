import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
    Container,
    Icon,
    Content,
    Button,
    List,
    ListItem,
    Text as TextView
} from "native-base";
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <TextView>nice huh native base </TextView>
        <Text>hwy whey .js to cool start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
