import { Text, View, Image } from "react-native";
import React from 'react';
import styles from "./styles";

const NewsCard = (poster, date, title, description) => {
    return (
        <View style={[styles.card, { flexDirection: "column" }]}>
        <View style={{ flexDirection: "row" }}>
          <Image source={require("../assets/Oval.png")} />
          <View
            style={{ marginLeft: 10, flexDirection: "column" }}
          >
            <Text style={styles.text}>poster</Text>
            <Text>date</Text>
          </View>
        </View>

        <View style={[styles.news]}>

          <Image style={styles.news_image} source={require("../assets/Rectangle.png")} />

          <View style={{marginTop: 10}}>
            <Text style={styles.text}>title</Text>
            <Text>description</Text>
          </View>
          

        </View>
      </View>
    );
}

export default NewsCard;