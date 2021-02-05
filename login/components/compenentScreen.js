import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { enableScreens } from 'react-native-screens';


import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { enableScreens } from 'react-native-screens';
import { createStackNavigator } from '@react-navigation/stack';
import componentScreen from './component/componentScreen';

enableScreens();
const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
     
    </Stack.Navigator>
  );
}


// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open </Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     fontSize:30,
//     flex: 1,
//     backgroundColor: '#c700ff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
 