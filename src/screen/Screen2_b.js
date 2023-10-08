import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../style/Screen2_b_style";

const Screen2_b = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.img}
          source={require("../../assets/usb.png")}
          resizeMode="stretch"
        />
        <Text>
          USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa
          bluetooth
        </Text>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text>Cực kỳ hài lòng</Text>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../../assets/star.png")}
            resizeMode="stretch"
            style={styles.start}
          />
          <Image
            source={require("../../assets/star.png")}
            resizeMode="stretch"
            style={styles.start}
          />
          <Image
            source={require("../../assets/star.png")}
            resizeMode="stretch"
            style={styles.start}
          />
          <Image
            source={require("../../assets/star.png")}
            resizeMode="stretch"
            style={styles.start}
          />
          <Image
            source={require("../../assets/star.png")}
            resizeMode="stretch"
            style={styles.start}
          />
        </View>
      </View>
      {/* Camera */}
      <TouchableOpacity>
      <View style={styles.camera}>
        <Image
          source={require("../../assets/camera.png")}
          resizeMode="stretch"
          style={{ width: 39, height: 32, marginRight: 20 }}
        />
        <Text>Thêm hình ảnh</Text>
      </View>
      </TouchableOpacity>
      <View>
        <TextInput
          placeholder="Hãy chi sẻ những điều mà bạn thích về sản phẩm"
          style={styles.comment}
          multiline={true}
          numberOfLines={4}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={{color:'#fff', fontSize:20, fontFamily:'Roboto', fontWeight:'700'}}>Gửi</Text>
    </TouchableOpacity>
    </View>
    
  );
};

export default Screen2_b;
