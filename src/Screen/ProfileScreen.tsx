import { View, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Navigation/Navigation";
import { User } from "./../MockData/MockedUsers";
import { useUserContext } from "../Context/UserContext";

type Props = NativeStackScreenProps<RootStackParamList, "Profile">;

export default function ProfileScreen() {
  const { user } = useUserContext();
  return (
    <View>
      <Text>{user.name}</Text>
    </View>
  );
}
