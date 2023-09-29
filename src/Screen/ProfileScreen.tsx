
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Navigation/Navigation";
import { User } from "../MockData/MockedUsers";
import { useUserContext } from "../Context/UserContext";


type Props = NativeStackScreenProps<RootStackParamList, "Profile">;

export default function ProfilePage() {
  const { user } = useUserContext();
  return (
    <View style={styles.container}>
    <Text style={styles.userNameText}
    >{user.name}
    {user.lastName}
    {user.email}
    {user.address}
    {user.country}
    {user.employmentStatus}
    {user.password}
    </Text>
 

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },

  buttonContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    borderRadius: 25,
    marginVertical: 30,
    width: 200,
    height: 50,
    alignContent: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
  },
  userNameText: {
    fontSize: 25,
    margin: 17,
  },
  profileIcon: {
    margin: 5,
  },

});
