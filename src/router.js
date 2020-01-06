import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Home from "../src/pages/Home";

const AppNavigator = createStackNavigator({
  Home
});

export default createAppContainer(AppNavigator);
