import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Home from "../src/pages/Home";
import User from "../src/pages/User";

const AppNavigator = createStackNavigator({
  Home,
  User
});

export default createAppContainer(AppNavigator);
