import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Navigation/Navigation";
import { StatusBar } from "expo-status-bar"; 

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <StatusBar backgroundColor="white" />

      <Image
        source={{ uri: "https://i.imgur.com/J0dixkv.png" }}
        style={styles.image}
      />
      <Text style={styles.welcomeText}>
        Start coding with React and build your first website!
      </Text>
      <View style={styles.buttonContainer}>
        <Button mode="contained" style={[styles.button]} onPress={() => {}}>
          <Text style={styles.buttonText}>Create Account</Text>
        </Button>
        <View />
        <Button
          mode="contained"
          style={[styles.button]}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.buttonText}>Login</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  image: {
    height: 110,
    width: 125,
    marginTop: 80,
    margin: 50,
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
    backgroundColor: "rgb(97, 219, 251)",
    borderRadius: 25,
    margin: 30,
    width: 200,
    height: 50,
    alignContent: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 17,
  },
});
