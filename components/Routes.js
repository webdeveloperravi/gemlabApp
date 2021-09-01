import React from 'react';
import { NavigationContainer, navigation } from '@react-navigation/native';
import Home from './Home';
import Login from './Login';
import Reg from './Reg';
import Otp from './Otp';
import Gin from './Gin';
import Details from './Details';
import Welcome from './welcome';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = () => {
  const Stack = createNativeStackNavigator();
      // <Stack.Screen
      //    name="Welcome" 
      //    component={Welcome} 
      //    />
  return (
    <NavigationContainer>
      <Stack.Navigator>
  
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Reg" component={Reg} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="Gin" component={Gin} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Stack;
