import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "./src/MockData/MockedUsers";

export const storeUser = async (user: User) => {
  try {
    await AsyncStorage.setItem("user", JSON.stringify(user));
  } catch (e) {
    console.log("Något gick fel med att lägga till user till Async storage.");
  }
};

export const getUserFromAsyncStorage = async (): Promise<User | null> => {
    try {
      const value = await AsyncStorage.getItem('user');
      
      if (value !== null) {
        const user: User = JSON.parse(value); // Parse the JSON data into a User object
        console.log("Användare som hämtas från async storage:", user);
        return user;
      } else {
        console.log("No user data found in AsyncStorage");
        return null;
      }
    } catch (e) {
      console.log("Error reading user data:", e);
      return null;
    }
  };
  
  
  
  
  
