import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Home from "../src/pages/Home";
import User from "../src/pages/User";
import WebView from "../src/pages/WebView";

const AppNavigator = createStackNavigator(
  {
    Home,
    User,
    WebView
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerTitleAlign: "center",
      headerStyle: {
        backgroundColor: "#4682b4"
      },
      headerTintColor: "#fff"
    }
  }
);

export default createAppContainer(AppNavigator);
