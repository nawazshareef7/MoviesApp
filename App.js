import React from 'react';
import { Provider } from 'react-redux';
import {  StyleSheet } from 'react-native';
import HomeIndex from './components/homeIndex';
import ConfigStore from './components/store/ConfigureStore';
import firebase from '@react-native-firebase/app';

const store = ConfigStore();

class App extends React.Component{
  render(){
    // firebase.crashlytics().log('Test Message!');
    // //  firebase.crashlytics().crash();
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
