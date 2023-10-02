import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { Button, Avatar } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Navigation/Navigation";
import { useUserContext } from "../Context/UserContext";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';

type Props = NativeStackScreenProps<RootStackParamList, "Profile">;

export default function ProfilePage() {
  const { user } = useUserContext();

  return (
    <View style={styles.container}>
      <Avatar.Image
        source={{ uri: 'https://i.imgur.com/ptFw8jV.jpg' }}
        size={100}
        style={styles.profileIcon}
      />
      <Text style={styles.userNameText}>
        {user.name} {user.lastName}
      </Text>
      <View style={styles.userInfoContainer}>
        <View style={styles.utilityIcons}>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons
              style={styles.icon}
              name="share-social-outline"
              size={24}
              color="black"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <AntDesign style={styles.icon} name="edit" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.userInfoText}>
          Email: {user.email}
        </Text>
        <Text style={styles.userInfoText}>
          Address: {user.address}
        </Text>
        <Text style={styles.userInfoText}>
          Country: {user.country}
        </Text>
        <Text style={styles.userInfoText}>
          Employment Status: {user.employmentStatus}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
  },
  userNameText: {
    fontSize: 25,
    marginVertical: 5,
    fontWeight: "bold",
  },
  userInfoText: {
    fontSize: 18,
    marginVertical: 15,
  },
  profileIcon: {
    marginVertical: 25,
  },
  utilityIcons: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "space-between"
  },
  icon: {
    marginLeft: 10,
    margin: 25,
  },
  
  userInfoContainer: {
    backgroundColor: "rgb(97, 219, 251)", 
    borderRadius: 20, 
    padding: 20, 
    marginVertical: 30, 
    width: "100%", 
    alignItems: "center"
  },
});
