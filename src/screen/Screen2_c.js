import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from "../style/Screen2_c_style";
import Checkbox from "expo-checkbox";
const Screen2_c = () => {
  const [isSelected1, setSelection1] = useState(true);
  const [isSelected2, setSelection2] = useState(false);
  const [isSelected3, setSelection3] = useState(false);
  const [isSelected4, setSelection4] = useState(true);

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 50 }}>
        <Text
          style={{
            textAlign: "center",
            fontFamily: "Roboto",
            fontSize: 25,
            color: "#fff",
            fontWeight: "700",
          }}
        >
          PASSWORD
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontFamily: "Roboto",
            fontSize: 25,
            color: "#fff",
            fontWeight: "700",
          }}
        >
          GENERATOR
        </Text>
      </View>
      {/* Input */}
      <TextInput style={styles.textInput2} />
      {/* Password length */}
      <View style={styles.wrapper}>
        <Text style={styles.label}>Password length</Text>
        <TextInput style={styles.textInput} />
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.label}>Include lower case letters</Text>
        <Checkbox value={isSelected1} onValueChange={setSelection1} focusable />
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.label}>Include upcase letters</Text>
        <Checkbox value={isSelected2} onValueChange={setSelection2}></Checkbox>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.label}>Include number</Text>
        <Checkbox value={isSelected3} onValueChange={setSelection3}></Checkbox>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.label}>Include special symbol</Text>
        <Checkbox value={isSelected4} onValueChange={setSelection4}></Checkbox>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.label}>GENERATE PASSWORD </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Screen2_c;
