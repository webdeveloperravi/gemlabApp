import React, {useState} from 'react'

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
import Welcome from "./welcome"


const Home = () => {
let [flash, setFlash] = useState(true);
const navigation = useNavigation(); 


  React.useLayoutEffect(() => {
  navigation.setOptions({headerShown: false});
}, [navigation]);

if(flash){
  setTimeout(()=>{
    setFlash(false)
  },4000);
return <Welcome/>
}else{
 
  return(

  <View style={styles.container}>
    <StatusBar
        backgroundColor="#fff"
        barStyle="dark-content"
      />
    <ImageBackground source={require('../assets/3.jpg')} resizeMode="cover" style={styles.image}>
     <View style={styles.header}>
        <TouchableOpacity 
        style={styles.button}
        key={Math.random() * 100}
        onPress={()=> navigation.navigate('Reg')}
        >
        <Text style={styles.text}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} key={Math.random() * 100} onPress={()            => navigation.navigate('Login')}>
          <Text style={styles.text}>Sign IN</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>

   
  </View>
);
}



}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems:'center'
  },
  header: {
    display:'flex',
    flexDirection:'column',
    width:"80%",
    paddingBottom:50
  },
    button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 60,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#fff',
    color:"#000",
    marginTop: 10,
  },
});



export default Home;
