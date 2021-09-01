import React from 'react'

import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Button,
  TouchableOpacity,
  StatusBar,
  Image,
  ImageBackground
} from 'react-native';

import DisplayAnImage from "./DisplayAnImage"


const Welcome = () => {
  
const navigation = useNavigation(); 

React.useLayoutEffect(() => {
  navigation.setOptions({headerShown: false});
}, [navigation]);

setTimeout(()=>{
   navigation.navigate('Home')
},4000)



return(

   <View style={styles.container}>
    <ImageBackground source={require('../assets/1.jpg')} resizeMode="cover" style={styles.image}>
    </ImageBackground>
  </View>

);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
  
});



export default Welcome;
