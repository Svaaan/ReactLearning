import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyComponent = () => {
  const storeData = async (value: string) => {
    try {
      await AsyncStorage.setItem('my-key', value);
    } catch (e) {
      // Handle saving error
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('my-key');
      if (value !== null) {
        // Handle value previously stored
        console.log("Stored Value:", value);
      }
    } catch (e) {
      // Handle error reading value
    }
  };

  // You can call storeData and getData as needed in your component
  const handleStoreData = async () => {
    await storeData('Hello, AsyncStorage!');
  };

  const handleGetData = async () => {
    await getData();
  };

  return (
    <View style={styles.container}>
      <Button onPress={handleStoreData}>Store Data</Button>
      <Button onPress={handleGetData}>Get Data</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MyComponent;
