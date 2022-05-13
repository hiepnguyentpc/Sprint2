import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Dimensions} from "react-native";

const width = Dimensions.get("screen").width - 30;


const styles = StyleSheet.create({
  
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

  export default styles;