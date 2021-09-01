import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Button,
  Pressable,
  StatusBar,
  FlatList,
  Item,
} from 'react-native';
import DisplayAnImage from './DisplayAnImage';
import { useNavigation } from '@react-navigation/native';

const Details = ({ route }) => {
  //gindata
  const ginData = route.params.ginData;
  const navigation = useNavigation();
    React.useLayoutEffect(() => {
  navigation.setOptions({headerShown: false});
}, [navigation]);


  return (
    <View style={styles.main}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Text style={styles.real}>Real Time Certficate</Text>
      <View style={styles.enterOtp}>
        <View style={{ backgroundColor: 'pink' }}>
          <Text style={styles.listItem}>
            <Text style={styles.itemHead}>Gin Code</Text> :{' '}
            <Text style={{ color: 'red' }}>{ginData.gin}</Text>
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.itemHead}>Iname</Text> : {ginData.iname}
          </Text>

          <Text style={styles.listItem}>
            <Text style={styles.itemHead}>weight</Text> : {ginData.weight}
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.itemHead}>depth</Text> : {ginData.depth}
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.itemHead}>length</Text> : {ginData.length}
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.itemHead}>stock status</Text> :{' '}
            {ginData.in_stock ? 'In stock' : 'out of stock'}
          </Text>
        </View>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Otp')}>
          <Text
            style={styles.text}
            onPress={() => navigation.navigate('Details')}>
            Download
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
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

  enterOtp: {
    width: '80%',
    paddingBottom: 30,
  },
  headStyle: {
    height: 50,
    alignContent: 'center',
    backgroundColor: '#ffe0f0',
  },
  tableText: {
    margin: 10,
  },
  ginItem: {
    backgroundColor: '#000',
  },
  real: {
    color: '#fff',
    fontSize: 30,
    paddingBottom: 40,
  },
  listItem: {
    backgroundColor: '#fff',
    marginBottom: 10,
    fontSize: 14,
    borderBottomWidth: 2,
  },
  itemHead: {
    fontSize: 20,
    textTransform: 'uppercase',
  },
});

export default Details;
