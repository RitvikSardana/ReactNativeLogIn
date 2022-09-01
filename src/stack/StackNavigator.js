import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../screens/SignIn';
import Home from '../screens/Home';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
const Stack = createStackNavigator();


export const StackNavigator = () =>{
    GoogleSignin.configure({
        webClientId:
          '691935119632-sre85mioc3bchkhjian9d7tpjludujnh.apps.googleusercontent.com',
      });
    return (
        <Stack.Navigator initialRouteName = "SignIn">
            <Stack.Screen name = "SignIn" component = {SignIn} options = {{headerShown:false}}  />
            <Stack.Screen name = "Home" component = {Home} options = {{headerShown:false}} />
        </Stack.Navigator>
    )
}