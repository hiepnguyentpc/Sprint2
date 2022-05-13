import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet, Text, View, Image } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import NewsCard from "./NewsCard/NewsCard";

const width = Dimensions.get("screen").width - 30;

export default function App() {
  return (
    <View style={styles.container}>
      <NewsCard/>      
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
