import React from "react";
import { StyleSheet, Text, View } from "react-native";

import "./src/config/ReactotronConfig";

import Router from "./src/router";

export default function App() {
  return <Router />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 32
  }
});
