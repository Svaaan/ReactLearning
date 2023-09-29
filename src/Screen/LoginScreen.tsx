import { View, Text, TextInput, StyleSheet } from "react-native";
import { mockedUsers } from "../MockData/MockedUsers";
import { useState } from "react";
import { Button } from "react-native-paper";
import { useUserContext } from "../Context/UserContext";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Navigation/Navigation";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

export default function LoginScreen({ navigation }: Props) {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useUserContext();

  async function handleLogin() {
    const success = await login(mail, password);
    if (success) {
      navigation.navigate("Start");
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setMail(text)}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Button
        mode="contained"
        style={[styles.button, { backgroundColor: "rgb(97, 219, 251)" }]}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Login</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    width: 300, // Adjust width as needed
    margin: 25,
    paddingLeft: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "black",
  },
  button: {
    borderRadius: 25,
    margin: 30,
    width: 200, // Set a fixed width for the buttons
    height: 50,
    alignContent: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
  },
});
