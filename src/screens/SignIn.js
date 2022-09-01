import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Logo from '../../assets/images/logo.png';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';

const SignIn = ({navigation}) => {
  const {height} = useWindowDimensions();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const signInHandler = async () => {
    console.warn('Clicked');

  };

  const googleHandler = async () => {
    console.warn('GOOGLEaaaa');

    try {
      const {idToken} = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      const user_sign_in = await auth().signInWithCredential(googleCredential);
      console.log('USER SIGN IN', user_sign_in);

      navigation.replace('Home')
    } catch (error) {
      console.log(error);
    }
  };
  const facebookHandler = async () => {
    console.warn('FACEBOOK');
    try {
      const result = await LoginManager.logInWithPermissions(['public_profile','email']);

      if (result.isCancelled) {
        throw 'User cancelled the login process';
      }
    
      // Once signed in, get the users AccesToken
      const data = await AccessToken.getCurrentAccessToken();
      console.log("data",data)
      if (!data) {
        throw 'Something went wrong obtaining access token';
      }
    
      // Create a Firebase credential with the AccessToken
      const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
    
      // Sign-in the user with the credential
      const res = await auth().signInWithCredential(facebookCredential);
      console.log(res)
      navigation.replace('Home')
    } catch (error) {
      console.log("ERR",error)
    }
  };

  

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.2}]}
          resizeMode="contain"
        />

        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureText={true}
        />

        <CustomButton onPress={signInHandler} text="Sign In" />

        <CustomButton
          onPress={signInHandler}
          text="Forgot Password"
          type="TERTIARY"
        />

        <CustomButton
          onPress={googleHandler}
          text="Sign In with Google"
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
        />
        <CustomButton
          onPress={facebookHandler}
          text="Sign In with Facebook"
          bgColor="#E7EAF4"
          fgColor="#4765A9"
        />

        <CustomButton
          onPress={signInHandler}
          text="Don't have an account? Sign UP!"
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default SignIn;
