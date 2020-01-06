import React, { Component } from "react";
import { WebView } from "react-native-webview";

// import { Container } from './styles';

export default class MyInlineWeb extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("owner").login
    };
  };

  render() {
    const { navigation } = this.props;
    const owner = navigation.getParam("owner");

    console.tron.log(owner);

    return <WebView style={{ flex: 1 }} source={{ uri: owner.html_url }} />;
  }
}
