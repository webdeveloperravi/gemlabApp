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

 

  

const Otp = ({ route }) => {
  let [otpCode, setOtpCode] = useState(0);
  const { id, username } = route.params;
  const navigation = useNavigation();
    React.useLayoutEffect(() => {
  navigation.setOptions({headerShown: false});
}, [navigation]);


  const verifyOtp = async ()=>{
   let response = await fetch(
      'https://9gem.net/api/user/verifyOtp?otpCode='+otpCode+'&id=1001'
    );
    let json = await response.json();

   
    if(json.status == 'fail'){
        alert('Please Enter a Valid Otp Code')
    }else{
   
      const {id,name,email,phone} = json.data;
      navigation.navigate('Gin',{ id:id,username: name , email: email,phone:phone })
      alert('Authentication Successful')
    }
}
  return (
    <View style={styles.main}>
      <DisplayAnImage />
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.enterOtp}>
        <Text
          style={{
            color: '#fff',
            fontSize: 20,
            marginBottom: 10,
            fontStyle: 'italic',
            textTransform: 'uppercase',
          }}>
          Welcome back, 
           <Text style={{ color: 'cyan' }}> {username}</Text>
        </Text>
        <TextInput
          style={styles.input}
          autoCompleteType="email"
          placeholder="Please Enter the Otp Code"
          keyboardType="number-pad"
          onChangeText={text => setOtpCode(text)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={verifyOtp}>
          <Text style={styles.text}>Verify Otp</Text>
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
    borderWidth: 1,
    padding: 13,
    borderRadius: 3,
    width: '100%',
    backgroundColor: '#fff',
  },
  enterOtp: {
    width: '80%',
    paddingBottom: 30,
  },
  picker: {
    height: 50,
    width: 150,
    backgroundColor: '#fff',
    color: '#fff',
  },
});

export default Otp;
