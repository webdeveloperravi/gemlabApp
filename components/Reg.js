import React, { useState } from 'react';
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
import DisplayAnImage from './DisplayAnImage';
import { useNavigation } from '@react-navigation/native';

const Reg = () => {
 let [mobile, setMobile] = useState('');
  const navigation = useNavigation();
    React.useLayoutEffect(() => {
  navigation.setOptions({headerShown: false});
}, [navigation]);

  
  const sendOtp = async () => {
   let response = await fetch(
      'https://9gem.net/api/user/register?mobile='+mobile
    );
    let json = await response.json();
    
    if(json.status == 'fail'){
        alert('Please Enter a Valid Number')
    }else{
      console.log(json.data);
      const {id,name} = json.data;
      navigation.navigate('Otp',{ id:id,username: name })
      alert('Otp Code Successfully Sent')
    }
  }

  return (
    <View style={styles.main}>
      <DisplayAnImage />
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.enterOtp}>
        <TextInput
          style={styles.input}
          autoCompleteType="email"
          placeholder="Enter Mobile No"
          keyboardType="number-pad"
          onChangeText={text => setMobile(text)}
        />

        <TouchableOpacity style={styles.button} onPress={sendOtp}>
          <Text style={styles.text}>Send Otp Code for Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    width: '100%',
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
    padding: 13,
    borderRadius: 3,
    width: '100%',
    backgroundColor: '#fff',
  },
  enterOtp: {
    width: '80%',
    paddingBottom: 30,
  },
});

export default Reg;
