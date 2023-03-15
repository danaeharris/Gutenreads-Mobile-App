import "react-native-gesture-handler";
import { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;

export default function Home() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
      <Button
        onPress={() => {
          navigation.push("Reader", {
            bookId: "test",
          });
        }}
        title="Open Reader View"
        color="#841584"
        accessibilityLabel="Open Reader View"
      ></Button>
      <Button
        onPress={() => {
          navigation.push("Book", {
            bookId: "test",
          });
        }}
        title="Open Book Details View"
        color="#841584"
        accessibilityLabel="Open Book Details View"
      ></Button>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
