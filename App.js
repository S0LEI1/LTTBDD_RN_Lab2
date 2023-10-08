import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen2_a from './src/screen/Screen2_a';
import Screen2_c from './src/screen/Screen2_c';
import Screen2_b from './src/screen/Screen2_b';
import Screen2_d from './src/screen/Screen2_d'
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Product" screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={Screen2_a} />
      <Stack.Screen name="Vote" component={Screen2_b} />
      <Stack.Screen name="Password" component={Screen2_c} />
      <Stack.Screen name="Product" component={Screen2_d} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
