import { Author } from "../utils/types";
import { Text } from "react-native";

type BookSubjectsProps = {
  authors?: Array<Author>;
};

export default function BookAuthors({ authors }: BookSubjectsProps) {
  if (!authors || authors.length === 0) return null;
  return (
    <>
      {authors.map((author: Author) => (
        <Text
          key={author.name}
          style={{
            fontFamily: "Inter-Regular",
          }}
        >
          {`${author.name.split(",")[1].split("(")[0]} ${
            author.name.split(",")[0].split("(")[0]
          }`}
          {authors.length > 1 ? ", " : ""}
        </Text>
      ))}
    </>
  );
}
