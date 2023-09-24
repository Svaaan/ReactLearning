import { View, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Navigation/Navigation";

type Props = NativeStackScreenProps<RootStackParamList, "Profile">;

export default function ProfileScreen() {
    return(
  <View>
    <Text>profile</Text>
  </View>
  );
}
