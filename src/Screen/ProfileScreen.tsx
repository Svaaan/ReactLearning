import React from "react";
import { View, StyleSheet, Text, TouchableOpacity} from "react-native";
import { Button, Avatar} from "react-native-paper"; // Import Avatar for displaying user image
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Navigation/Navigation";
import { User } from "../MockData/MockedUsers";
import { useUserContext } from "../Context/UserContext";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons'; 


type Props = NativeStackScreenProps<RootStackParamList, "Profile">;

export default function ProfilePage() {
  const { user } = useUserContext();

  return (
    <View style={styles.container}>
      <Avatar.Image
        source={{ uri: 'https://i.imgur.com/ptFw8jV.jpg' }} // Use the provided image link
        size={100} // Adjust the size as needed
        style={styles.profileIcon}
      />
      <Text style={styles.userNameText}>
        {user.name} {user.lastName}
      </Text>
      <View style={styles.utilityIcons} >

      <TouchableOpacity onPress={() => {}}>
      <Ionicons
       style={styles.share} 
       name="share-social-outline" 
       size={24} color="black" 
       />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
        <AntDesign style={styles.edit} name="edit" size={24} color="black" />

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
    marginVertical: 20,
    fontWeight: "bold",
    margin: 10,
  },
  userInfoText: {
    fontSize: 18,
    marginVertical: 15,
  },
  profileIcon: {
    marginVertical: 20,
  },
  utilityIcons:{
    flexDirection: "row",
    alignItems: "center",
    
  },
  share: {
    margin: 15,
  },
  edit: {
    margin: 15,
  }
});
