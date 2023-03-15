import "react-native-gesture-handler";
import { Text, View, Button, Image, ScrollView, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";
import bookData from "../utils/bookData";
import BookAuthors from "../components/BookAuthors";
import BookSubjects from "../components/BookSubjects";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;

export default function Home() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <>
      <ScrollView
        style={{
          flex: 1,
          position: "relative",
          backgroundColor: "#fff",
        }}
      >
        <View style={{ height: 80 }} />
        <View style={{ paddingHorizontal: 20 }}>
          <Image
            source={require("../assets/logo.png")}
            resizeMode="contain"
            style={{
              width: 200,
              height: 50,
            }}
          />
          <Text
            style={{
              fontFamily: "PP Writer-Regular",
              fontSize: 16,
              marginVertical: 20,
            }}
          >
            A clean, beautiful interface for reading public-domain Project
            Gutenberg books.
          </Text>
        </View>
        {bookData?.map((book) => {
          return (
            <Pressable
              onPress={() =>
                navigation.push("Reader", {
                  bookId: "test",
                })
              }
              key={book.id}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "#F8F8F8" : "white",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                },
                { padding: 30 },
              ]}
            >
              <Image
                source={{ uri: book.formats["image/jpeg"] }}
                alt={`${book.title} cover art`}
                style={{ width: 100, height: 150, marginBottom: 20 }}
              />
              <View style={{ paddingHorizontal: 20, flex: 1 }}>
                <Text
                  style={{
                    fontFamily: "PP Writer-Bold",
                    fontSize: 20,
                  }}
                >
                  {book.title}
                </Text>
                {book.authors ? (
                  <Text style={{ marginVertical: 10 }}>
                    <BookAuthors authors={book.authors} />
                  </Text>
                ) : null}
                {book.subjects ? (
                  <Text>
                    <BookSubjects subjects={book.subjects} max={4} />
                  </Text>
                ) : null}
              </View>
            </Pressable>
          );
        })}
        <View style={{ height: 80 }} />
      </ScrollView>
      <View
        style={{
          height: 60,
          backgroundColor: "white",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 10,
          opacity: 0.7,
        }}
      />
    </>
  );
}
