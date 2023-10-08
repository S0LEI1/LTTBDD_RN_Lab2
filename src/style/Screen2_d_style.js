import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C4C4C4",
    width: width,
    height: height,
    
  },
  productContainer: {
    backgroundColor: "#fff",
    width: width,
    height: height * 0.4,
    paddingTop:10
  },
  productDetail: {
    flexDirection:'row',
    justifyContent:'space-around'
  },
  img: {
    width: 104,
    height: 127,
  },
  btnImg:{
    width:14,
    height:16
  },
  discount:{
    flexDirection:'row',
    marginTop:20,
    marginLeft:20
  },
  wrapper:{
    width:208,
    height:45,
    borderWidth:1,
    borderColor:'#808080',
    flexDirection:'row',
    alignItems:'center'
  },
  yellowbtn:{
    width:32,
    height:16,
    backgroundColor:'#F2DD1B', 
    marginHorizontal:10,
   
  },
  btnApply:{
    width:100,
    height:45,
    backgroundColor:'#0A5EB7',
    alignItems:'center',
    justifyContent:'center'
  },
  coupons:{
    width:width,
    height:45,
    backgroundColor:'#fff',
    marginTop:10,
    flexDirection:'row',
    alignItems:'center',
    
  },
  label:{
    fontSize:12,
    paddingHorizontal:10
  },
  color:{
    color:'#134FEC'
  },
  provisional:{
    width:width,
    height:50,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:20,
    backgroundColor:'#fff',
    marginTop:10,
    alignItems:'center'
  },
  total:{
    width:width,
    height:120,
    backgroundColor:'#fff',
    marginTop:175
  },
  intoMoney:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:20,
    marginTop:10,
    alignItems:'center'
  },
  btnOrder:{
    width:330,
    height:45,
    backgroundColor:'#E53935',
    justifyContent:'center',
    alignItems:'center',
    marginLeft:15,
    marginTop:10
  }
});
export default styles;
