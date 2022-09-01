import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Home from './src/screens/Home';
import SignIn from './src/screens/SignIn';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/stack/StackNavigator';
import 'react-native-gesture-handler';

const App = () => {

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.root}>
        <StackNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'f9fbfc',
  },
});

export default App;
