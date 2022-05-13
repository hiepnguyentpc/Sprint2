import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet, Text, View, Image } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const width = Dimensions.get("screen").width - 30;

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={[styles.card, { flexDirection: "column" }]}>
        <View style={{ flexDirection: "row" }}>
          <Image source={require("./assets/Oval.png")} />
          <View
            style={{ marginLeft: 10, flexDirection: "column" }}
          >
            <Text style={styles.text}>Nghị quyết TW</Text>
            <Text>21-08-2019</Text>
          </View>
        </View>

        <View style={[styles.news]}>

          <Image style={styles.news_image} source={require("./assets/Rectangle.png")} />

          <View style={{marginTop: 10}}>
            <Text style={styles.text}>Hội nghị cán bộ toàn quốc quán triệt Nghị quyết TW 8 khoá XII...</Text>
            <Text>Ủy viên Bộ Chính trị, Thường trực Ban Bí thư Trần Quốc Vượng tới dự và phát biểu chỉ đạo Hội nghị…</Text>
          </View>
          

        </View>
      </View>
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

  card: {
    backgroundColor: Colors.light,
    height: 400,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
  },
  news: {
    backgroundColor: "white",
    height: 300,
    width: 350,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 15,
    padding: 15,
  },
  news_image: {
    height: 170,
    width: 320,
  },
});
