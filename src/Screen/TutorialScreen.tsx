import React, { useRef, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Navigation/Navigation";
import { Video, ResizeMode } from 'expo-av';
import PagerView from 'react-native-pager-view';

type Props = NativeStackScreenProps<RootStackParamList, "Tutorial">;

interface TutorialPage {
  key: string;
  title: string;
  videoSource: string;
}

const tutorialData: TutorialPage[] = [
  {
    key: '1',
    title: 'Video 1',
    videoSource: 'https://i.imgur.com/8F8RjVy.mp4',
  },
  {
    key: '2',
    title: 'Video 2',
    videoSource: 'https://i.imgur.com/8F8RjVy.mp4', 
  },
  {
    key: '3',
    title: 'Video 3',
    videoSource: 'https://i.imgur.com/8F8RjVy.mp4', 
  },
  {
    key: '4',
    title: 'Video 4',
    videoSource: 'https://i.imgur.com/8F8RjVy.mp4', 
  },
];

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

  const renderTutorialPage = ({ key, title, videoSource }: TutorialPage) => (
    <View style={styles.page} key={key}>
      <Text style={styles.tutorialText}>{title}</Text>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: videoSource,
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onError={(error) => console.error('Video Error:', error)}
      />
      <View style={styles.button}>
        <Button
          onPress={handleVideoToggle}
          style={styles.playButton}
        >
          <Text style={styles.playButtonText}>{isPlaying ? 'Pause' : 'Play'}</Text>
        </Button>
      </View>
      <Text style={styles.swipeText}>
        ⬅️ Previous tutorial - Next tutorial ➡️
      </Text>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <PagerView style={styles.viewPager} initialPage={0}>
        {tutorialData.map(renderTutorialPage)}
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
    height: 450,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButton: {
    backgroundColor: "rgb(97, 219, 251)",
    borderRadius: 25,
    margin: 30,
    width: 200,
    height: 50,
    alignContent: 'center',
    justifyContent: 'center',
  },
  playButtonText: {
    fontSize: 17,
    color: "white",
  },
  swipeText: {
    fontSize: 18,
    marginTop: 20,
    color: "black",
  },
  tutorialText: {
    fontSize: 25,
    margin: 20,
    color: "black",
  },
});
