import React, {useState} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Button,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import DisplayAnImage from "./DisplayAnImage"
import { useNavigation } from '@react-navigation/native';

const Gin = ({route}) => {
   const { id, username,email,phone } = route.params;//authenticated user data
   let [gin, setGin] = useState(0);
   let [weight, setWeight] = useState(0);

  const navigation = useNavigation(); 
    React.useLayoutEffect(() => {
  navigation.setOptions({headerShown: false});
}, [navigation]);


  const getGinDetails = async()=>{
       let response = await fetch(
      'https://9gem.net/api/getGinDetails?gin='+gin+'&weight='+weight
    );
    let json = await response.json();

   
    if(json.status == 'fail'){
        alert('No data exists')
    }else{
      navigation.navigate('Details',{ ginData:json.data})
    }

  }
  return (
    <View style={styles.main}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
   
        <View style={styles.enterOtp}>
            <Text style={styles.real}>Real Time Certficate</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Gin Code"
            keyboardType="number-pad"
             onChangeText={text => setGin(text)}
          />
           <TextInput
            style={styles.input}
            placeholder="Enter Gin Weight"
            keyboardType="number-pad"
             onChangeText={text => setWeight(text)}
          />
          
          <TouchableOpacity
           style={styles.button}
          onPress={getGinDetails}
          >
            <Text 
            style={styles.text}
             >Get Details</Text>
          </TouchableOpacity>
        </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent:"center",
    alignItems:"center"
  },
  header: {},
  button: {
    width: '100%',
    display: 'block',
    padding: 10,
  },
  head: {
    fontSize: 30,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    width:"100%",
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#fff',
    color: '#000',
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    textTransform: 'uppercase',
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 13,
    borderRadius:3,
    width:"100%",
    backgroundColor:"#fff"
  },
  enterOtp:{
    width:"80%",
    paddingBottom:30
  },
  picker:{ 
    height: 50, width: 150,
    backgroundColor:"#fff",
    color:"#fff"
    },
    real:{
      color:"#fff",
      fontSize:30,
      paddingBottom:40
    }
});

export default Gin;
