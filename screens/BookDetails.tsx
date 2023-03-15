import "react-native-gesture-handler";
import { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";

type BookDetailsScreenNavigationProp = StackNavigationProp<RootStackParamList>;

export default function BookDetails() {
  const navigation = useNavigation<BookDetailsScreenNavigationProp>();
  return (
    <View style={styles.container}>
      <Text>Book Details Page</Text>
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
