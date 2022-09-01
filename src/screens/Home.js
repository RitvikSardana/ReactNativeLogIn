import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomButton from '../components/CustomButton';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
const Home = ({navigation}) => {
  const [city, setCity] = useState('Delhi');

  const signOutHandler = async () =>{
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      navigation.navigate('SignIn')
    } catch (error) {
      console.log(error)
    }
    try {
      // LoginManager.logOut()
      await auth().signOut();
      navigation.navigate('SignIn')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const getCity = async () => {
      try {
        const city = await fetch('https://quanabackend.up.railway.app/api/city');
        const json = await city.json();
        console.warn(json.city);
        setCity(json.city);
      } catch (error) {
        console.warn(error);
      }
    };
    getCity();
    return () => {
      // console.warn("CleanUp Function")
    };
  }, []);

  return (
    <View style={styles.root}>
      <Text style={styles.heading}>Your Current City : </Text>
      <Text style={styles.subHeading}>{city}</Text>
      <CustomButton onPress={signOutHandler} text="Log Out" type='SECONDARY' />

    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  root: {
    alignItems: 'flex-start',
    padding: 20,
    flex: 1,
  },
  heading: {
    fontSize: 40,
    marginBottom: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  subHeading: {
    fontSize: 30,
    color:'#555'
  },

});
