import { Text, View, Image } from "react-native";
import React from 'react';
import styles from "./styles";

const NewsCard = () => {
    return (
        <View style={[styles.card, { flexDirection: "column" }]}>
        <View style={{ flexDirection: "row" }}>
          <Image source={require("../assets/Oval.png")} />
          <View
            style={{ marginLeft: 10, flexDirection: "column" }}
          >
            <Text style={styles.text}>Nghị quyết TW</Text>
            <Text>21-08-2019</Text>
          </View>
        </View>

        <View style={[styles.news]}>

          <Image style={styles.news_image} source={require("../assets/Rectangle.png")} />

          <View style={{marginTop: 10}}>
            <Text style={styles.text}>Hội nghị cán bộ toàn quốc quán triệt Nghị quyết TW 8 khoá XII...</Text>
            <Text>Ủy viên Bộ Chính trị, Thường trực Ban Bí thư Trần Quốc Vượng tới dự và phát biểu chỉ đạo Hội nghị…</Text>
          </View>
          

        </View>
      </View>
    );
}

export default NewsCard;