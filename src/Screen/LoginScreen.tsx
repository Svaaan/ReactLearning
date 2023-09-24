import { View, Text, TextInput, StyleSheet, Button } from "react-native";

export default function LoginScreen() {
    function handleLogin(){}
  return (
    <View>
      <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        placeholder="learnreact@react.com"
      />
      <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        placeholder="************"
      />
      <Button title="Log in" onPress={handleLogin}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
