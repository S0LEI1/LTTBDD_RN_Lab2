import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../style/Screen2_d_style";
const Screen2_d = () => {
  return (
    <View style={styles.container}>
      <Product />
      <Coupons />
      <Provisional />
      <Total />
    </View>
  );
};
const Product = () => {
  return (
    <View style={styles.productContainer}>
      <View style={styles.productDetail}>
        <Image
          style={styles.img}
          source={require("../../assets/book.png")}
          resizeMode="stretch"
        />
        <View style={{ justifyContent: "space-between" }}>
          <Text style={{ fontSize: 12 }}>Nguyên hàm tích phân và ứng dụng</Text>
          <Text style={{ fontSize: 12 }}>Cung cấp bởi Tiki Trading</Text>
          <Text style={{ color: "#EE0D0D", fontSize: 18 }}>141.800 đ</Text>
          <Text
            style={{
              textDecorationLine: "line-through",
              textDecorationStyle: "solid",
              color: "#808080",
            }}
          >
            141.000 đ
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            {/* Tăng giảm số lượng */}
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity>
                <Image
                  style={styles.btnImg}
                  source={require("../../assets/btnminus.png")}
                  resizeMode="stretch"
                />
              </TouchableOpacity>
              <Text style={{ marginHorizontal: 15 }}>1</Text>
              <TouchableOpacity>
                <Image
                  style={styles.btnImg}
                  source={require("../../assets/btnadd.png")}
                  resizeMode="stretch"
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Text style={{ fontSize: 12, color: "#134FEC" }}>Mua sau</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* Mã giảm giá */}
      <View style={styles.discount}>
        <Text style={{ fontSize: 12, marginRight: 30 }}>
          Mã giảm giá đã lưu
        </Text>
        <TouchableOpacity>
          <Text style={{ color: "#134FEC", fontSize: 12 }}>Xem tại đây</Text>
        </TouchableOpacity>
      </View>
      {/* Button */}
      <View
        style={{
          flexDirection: "row",
          marginTop: 40,
          justifyContent: "space-around",
        }}
      >
        <View style={styles.wrapper}>
          <View style={styles.yellowbtn} />
          <Text>Mã giảm giá</Text>
        </View>
        <TouchableOpacity style={styles.btnApply}>
          <Text style={{ fontSize: 20, color: "#fff" }}>Áp dụng</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const Coupons = () => {
  return(
    <View style={styles.coupons}>
    <Text style={styles.label}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
    <TouchableOpacity>
      <Text style={[styles.label,styles.color ]}>Nhập tại đây?</Text>
    </TouchableOpacity>
  </View>
  )
};
const Provisional =() =>{
    return(
        <View style={styles.provisional}>
            <Text>Tạm tính</Text>
            <Text style={{ color: "#EE0D0D", fontSize: 18 }}>141.800 đ</Text>
        </View>
    )
}
const Total =() =>{
    return(
        <View style={styles.total}>
            <View style={styles.intoMoney}>
            <Text>Thành tiền</Text>
            <Text style={{ color: "#EE0D0D", fontSize: 18 }}>141.800 đ</Text>
            </View>
            <TouchableOpacity style={styles.btnOrder}>
                <Text style={{fontSize:20, color:'#fff'}}>Tiến hành đặt hàng</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Screen2_d;
