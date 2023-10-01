Den ska innehålla en titel, beskrivning av projektet,
info om hur projektet byggs och körs samt vilka krav som är uppfyllda. Kom ihåg att .git
mappen måste finnas så jag kan hitta till ditt publika repo.

Titel: ReactLearning

Beskrivning: Appen är en app där man ska lära sig react för att sedan kunna bygga en hemsida/app. Assignements finns så att man ska lära sig och samlat poäng efter att läst dokumentation eller kollat på tutorial. När alla assignments är klara så ska appen vara färdig. 

Projects bygg via expo, react och react native. Komponenter som främst används är ifrån react native och expo.

Appen körs simpelt via att starta upp projektmappen och skriva: npx expo start i terminalen. (pixel 6 API 33 2) Android x86_64 körs via expo.

Komponenter: 
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Video } from 'expo-av';
import { Button } from "react-native-paper";
npx expo install react-native-pager-view (expo komponent)
import { StatusBar } from "expo-status-bar"; 
import AsyncStorage from '@react-native-async-storage/async-storage';