import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../Screen/HomeScreen";
import LoginScreen from "../Screen/LoginScreen";
import StartScreen from "../Screen/StartScreen";
import ProfileScreen from './../Screen/ProfileScreen';
import TutorialScreen from "../Screen/TutorialScreen";



export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Start: undefined;
  Profile: undefined;
  Tutorial: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Tutorial" component={TutorialScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
