import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Image,ImageBackground,View,Text, StyleSheet } from 'react-native';
import HomeIndex from './components/homeIndex'
import ConfigStore from './components/store/ConfigureStore'
const store = ConfigStore();

class App extends React.Component{
  render(){
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
