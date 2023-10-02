import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Button } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Navigation/Navigation";
import { useUserContext } from "../Context/UserContext";
import { Ionicons } from "@expo/vector-icons";

type Props = NativeStackScreenProps<RootStackParamList, "Start">;

export default function StartScreen({ navigation }: Props) {
  const { user } = useUserContext();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons
            style={[styles.icon, styles.darkMode]}
            name="moon-sharp"
            size={40}
            color="black"
          />
        </TouchableOpacity>

        <Image
          source={{ uri: "https://i.imgur.com/J0dixkv.png" }}
          style={styles.image}
        />

        <TouchableOpacity onPress={() => { navigation.navigate("Profile"); }}>
          <Ionicons
            style={[styles.icon, styles.profileIcon]}
            name="person-circle-sharp"
            size={50}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.welcomeText}>
        Explore all the available utilities to get started on your application
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          style={[styles.button]}
          onPress={() => { }}
        >
          <Text style={styles.buttonText}>Document</Text>
        </Button>
        <View />
        <Button
          mode="contained"
          style={[styles.button]}
          onPress={() => { navigation.navigate("Tutorial"); }}
        >
          <Text style={styles.buttonText}>Tutorials</Text>
        </Button>
        <Button
          mode="contained"
          style={[styles.button]}
          onPress={() => { }}
        >
          <Text style={styles.buttonText}>Assignments</Text>
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
  welcomeText: {
    fontSize: 16,
    margin: 50,
  },
  image: {
    height: 40,
    width: 45,
  },
  buttonContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    backgroundColor: "rgb(97, 219, 251)",
    borderRadius: 25,
    marginVertical: 35,
    width: 200,
    height: 50,
    alignContent: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
  },
  profileIcon: {
    marginRight: 25, 
  },
  darkMode: {
    marginLeft: 25, 
  },
  icon: {
    margin: 7, 
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    margin: 10,
  },
});
