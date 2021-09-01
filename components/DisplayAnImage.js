
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 230,
  },
  logo: {
    width: 200,
    height: 230,
    paddingTop:40
  },
});

const DisplayAnImage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/gemlogo.png')}
      />
   
      
    </View>
  );
}

export default DisplayAnImage;