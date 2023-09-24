import { View, Text, TextInput, StyleSheet, Button} from "react-native";
import { mockedUsers } from "../MockData/MockedUsers";
import {useState} from "react"
import { useUserContext } from "../Context/UserContext";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Navigation/Navigation";
import ProfileScreen from "./ProfileScreen";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

export default function LoginScreen({navigation}: Props) {
    const[mail, setMail] = useState("")
    const [password, setPassword] = useState ("")
    const {setUser} = useUserContext();
    function handleLogin(){
        const user = mockedUsers.find(u => u.email == mail && u.password == password)
        if(user){
            setUser(user);

            navigation.navigate("Profile")

        }

    }
  return (
    <View>
       <TextInput
        style={styles.input}
        onChangeText={(text) => setMail(text)} 
        placeholder="learnreact@react.com"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPassword(text)} 
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
