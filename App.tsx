import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import HomeScreen from "./src/Screen/HomeScreen";
import Navigation from "./src/Navigation/Navigation";
import { UserProvider } from "./src/Context/UserContext";

export default function App() {
  return(
  <UserProvider>
     <Navigation />
  </UserProvider>);
}
