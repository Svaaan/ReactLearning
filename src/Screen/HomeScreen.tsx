// HomeScreen.tsx
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Navigation/Navigation";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;
export default function HomeScreen({navigation}: Props) {

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://i.imgur.com/J0dixkv.png" }}
        style={styles.image}
      />
      <Text style={styles.welcomeText}>Start coding with react and build your first website!</Text>
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          style={[styles.button, { backgroundColor: "rgb(97, 219, 251)" }]}
          onPress={() => {
            // Handle navigation to the Create Account screen here
          }}
        >
          <Text>Create Account</Text>
        </Button>
        <View style={styles.buttonSpacing} />
        <Button
          mode="contained"
          style={[styles.button, { backgroundColor: "rgb(97, 219, 251)" }]}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text>Login</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    
  },
  image: {
    height: 110, 
    width: 125, 
    marginTop: 150, 
    margin: 50
  },
  welcomeText: {
    fontSize: 14, 
    margin: 30, 
  },
  buttonContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    borderRadius: 25,
    margin: 30,
  },
  buttonSpacing: {
    width: 10,
  },
});
