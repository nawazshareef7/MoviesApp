import React from 'react';
import { Provider } from 'react-redux';
import {  StyleSheet } from 'react-native';
import HomeIndex from './src/homeIndex';
import ConfigStore from './src/store/ConfigureStore';
import firebase from '@react-native-firebase/app';
import * as Sentry from '@sentry/react-native';

const store = ConfigStore();
Sentry.init({ 
  dsn: 'https://17f6df170a3f46178077df3845d9acfa@sentry.io/1879341', 
});
class App extends React.Component{
  render(){
    // throw new Error("My first Sentry error!");
    // Sentry.nativeCrash();

    // firebase.crashlytics().log('Test Message!');
    //  firebase.crashlytics().crash();
    // firebase.crashlytics().recordError(37,"Test Errorrrrrrrrr");  
    return(
      <Provider  store={store}>
        <HomeIndex></HomeIndex>
      </Provider>
     
    )
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})
export default App;
