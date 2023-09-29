import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Navigation/Navigation";

type Props = NativeStackScreenProps<RootStackParamList, "Tutorial">;
export default function TutorialScreen({navigation}: Props) {

  return (
    <View style={styles.container}>

      <Text>Hej</Text>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "white"
    },
  });
