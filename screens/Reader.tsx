import "react-native-gesture-handler";
import { useEffect, useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";
import bookData from "../utils/bookData";
// import styles from "../read.module.css";
import BookAuthors from "../components/BookAuthors";

const getBookFromId = (id: string) => {
  return bookData.find((book) => book.id === parseInt(id as string));
};

type ReaderScreenNavigationProp = StackNavigationProp<RootStackParamList>;

//{ bookId }: { bookId: string }
export default function Reader() {
  const [totalHours, setTotalHours] = useState(0);
  const [percentageDone, setPercentageDone] = useState(0);
  const hoursLeft = Math.ceil(totalHours * ((100 - percentageDone ?? 0) / 100));

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "PP Writer-Regular", fontSize: 24 }}>
        🚧 {"   "}Coming Soon!{"   "} 🚧
      </Text>
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
