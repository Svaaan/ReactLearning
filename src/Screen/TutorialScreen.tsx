import React, { useRef, useState } from "react";
import { View, Text, StyleSheet} from "react-native";
import { Button } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Navigation/Navigation";
import { Video, ResizeMode } from 'expo-av';
import PagerView from 'react-native-pager-view';

type Props = NativeStackScreenProps<RootStackParamList, "Tutorial">;

export default function TutorialScreen({ navigation }: Props) {
  const video = useRef<Video>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoToggle = async () => {
    if (video.current) {
      if (isPlaying) {
        await video.current.pauseAsync();
      } else {
        await video.current.playAsync();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <PagerView style={styles.viewPager} initialPage={0}>
        <View style={styles.page} key="1">
          <Text>Video 1</Text>
          <Video
            ref={video}
            style={styles.video}
            source={{
              uri: 'https://i.imgur.com/8F8RjVy.mp4',
            }}
            useNativeControls
            resizeMode={ResizeMode.CONTAIN}
            isLooping
            onError={(error) => console.error('Video Error:', error)}
          />
          <View style={styles.button}>
            <Button onPress={handleVideoToggle}>
              {isPlaying ? 'Pause' : 'Play'}
            </Button>
          </View>
          <Text>Swipe ➡️</Text>
        </View>
        <View style={styles.page} key="2">
          <Text>Second page</Text>
          <Text>Swipe ➡️</Text>
        </View>
        <View style={styles.page} key="3">
          <Text>Third page</Text>
          <Text>Swipe ➡️</Text>
        </View>
      </PagerView>
    </View>
  );
}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white"
  },
  button: {
    marginTop: 10,
  },
  video: {
    width: 500,
    height: 500,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
