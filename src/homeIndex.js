import React, {useState} from 'react';
import { Image,ImageBackground,View } from 'react-native';
import {  createAppContainer } from 'react-navigation';
import{createBottomTabNavigator} from 'react-navigation-tabs'
import {createStackNavigator} from 'react-navigation-stack';
import HomeActivity from '../src/screens/homeScreen';
import SearchActivity from '../src/screens/searchScreen';
import DetailsActivity from '../src/screens/detailsScreen';
import MoreActivity from '../src/screens/moreScreen';
import style from "../src/styles/style"

const SplashScreen= () => {
  return (
    <View style={ [style.container] }>
      <ImageBackground  style= { style.backgroundImage } source={require('../src/assets/bumble.jpg')} />
     
    </View>
  );

};
const HomeTab = createStackNavigator(
  {
    Home: HomeActivity ,
    Details: DetailsActivity ,
  },
  {
    defaultNavigationOptions: {
      
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTitleStyle: { 
        textAlign:"center", 
        flex:1 ,
       // marginLeft:10,
    },
    
      headerTintColor: 'black',
      title: 'Home',
    },
  }
);
const MoreTab = createStackNavigator(
  {
    More: MoreActivity
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'white',
      
      },
      headerTitleStyle: { 
        textAlign:"center", 
        flex:1 
    },
      headerTintColor: 'black',
      title: 'More Tab',
    },
  }
);

const SearchTab = createStackNavigator(
  {
    Search: SearchActivity 
  },
  {
    
    defaultNavigationOptions: {
      headerShown:false
    //   headerStyle: {
    //     backgroundColor: 'white',
    //   },
    //   headerTitleStyle: { 
    //     textAlign:"center", 
    //     flex:1 ,
    //    // marginLeft:10,
    // },
    
    //   headerTintColor: 'black',
    //   title: 'Home',
     },
  }
);

const MainApp = createBottomTabNavigator(
  {
    Home: HomeTab ,
    Search: SearchTab ,
    More: MoreTab
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Home') {
          return (
            <Image
              source={ require('../src/assets/home-icon-silhouette.png') }
              style={{ width: 20, height: 20, }} />
          );
        } else if(routeName === 'Search') {
          return (
            <Image
              source={ require('../src/assets/magnifying-glass.png') }
              style={{ width: 20, height: 20 }} />
          );
        }else {
          return (
            <Image
              source={ require('../src/assets/menu.png') }
              style={{ width: 20, height: 20 }} />
          );
        }

      },
    }),
    tabBarOptions: {
      activeTintColor: '#FF6F00',
      inactiveTintColor: '#263238',
    },
  }
);
const HomeIndex = () => {
  const [loading, setLoading ] = useState(true);
  setTimeout(() =>{
    setLoading(false);
  } , 1000);

  if (loading){
      return <SplashScreen />
    } else {
      return <MainContainer />
  }
};
const MainContainer = createAppContainer(MainApp);
export default HomeIndex;