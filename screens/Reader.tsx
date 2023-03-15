import "react-native-gesture-handler";
import { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";

type ReaderScreenNavigationProp = StackNavigationProp<RootStackParamList>;

export default function Reader({ bookId }: { bookId: string }) {
  return (
    <View style={styles.container}>
      <Text>Reader Page</Text>
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
