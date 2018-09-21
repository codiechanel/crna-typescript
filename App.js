import * as React from "react"
import { StatusBar } from "react-native"
import { Container, Content, Button, List, ListItem, Text } from "native-base"
import Expo from "expo"
// import Home from "./src/Home";
import style from "./src/styles"
import Home from "./src/Home"

export default class App extends React.Component {
  // state: { loading: boolean; };
  constructor(props) {
    super(props)
    this.state = { loading: true }
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    })
    this.setState({ loading: false })
  }

  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />
    }
    return <Home />
  }
}
