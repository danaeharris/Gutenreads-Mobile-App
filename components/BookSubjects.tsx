import { View, Text } from "react-native";

type BookSubjectsProps = {
  subjects?: Array<string>;
  max?: number;
  align?: "flex-start" | "center";
};

export default function BookSubjects({
  subjects,
  max,
  align = "flex-start",
}: BookSubjectsProps) {
  return (
    <>
      {subjects ? (
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: `${align}`,
            marginTop: 16,
          }}
        >
          {subjects.slice(0, max || subjects.length).map((subject) => {
            let tag = subject.split(" -- ")[0];
            return (
              <Text
                style={{
                  fontFamily: "Inter-Regular",
                  fontSize: 13,
                  color: "#000",
                  backgroundColor: "#E9E9E9",
                  borderColor: "#EDEDED",
                  borderRadius: 8,
                  overflow: "hidden",
                  paddingVertical: 4,
                  paddingHorizontal: 8,
                  marginVertical: 4,
                  marginRight: 8,
                }}
                key={tag}
              >
                {tag}
              </Text>
            );
          })}
        </View>
      ) : null}
    </>
  );
}
