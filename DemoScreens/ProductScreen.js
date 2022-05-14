import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import NewsCard from "../NewsCard/NewsCard";

export default function ProductScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { poster: "Nghị quyết TW" },
          { date: "21-08-2019" },
          {
            title:
              "Hội nghị cán bộ toàn quốc quán triệt Nghị quyết TW 8 khóa XII…",
          },
          {
            description:
              "Ủy viên Bộ Chính trị, Thường trực Ban Bí thư Trần Quốc Vượng tới dự và phát biểu chỉ đạo Hội nghị…",
          },
        ]}
        renderItem={({ item }) => (
          <NewsCard
            poster={item.poster}
            date={item.date}
            title={item.title}
            description={item.description}
          />
        )}
      />
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
