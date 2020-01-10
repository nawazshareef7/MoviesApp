import React, {useState} from 'react';
import { Image,ImageBackground,View } from 'react-native';
import {  createAppContainer } from 'react-navigation';
import{createBottomTabNavigator} from 'react-navigation-tabs'
import {createStackNavigator} from 'react-navigation-stack';
import HomeActivity from '../components/screens/homeScreen';
import SearchActivity from '../components/screens/searchScreen';
import DetailsActivity from '../components/screens/detailsScreen';
import MoreActivity from '../components/screens/moreScreen';
import style from "../components/styles/style"

const SplashScreen= () => {
  return (
    <View style={ [style.container] }>
      <ImageBackground  style= { style.backgroundImage } source={require('../components/assets/bumble.jpg')} />
     
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
      
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTitleStyle: { 
        textAlign:"center", 
        flex:1 ,
       // marginLeft:10,
    },
    
      // headerTintColor: 'black',
      // title: 'Home',
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
              source={ require('../components/assets/home-icon-silhouette.png') }
              style={{ width: 20, height: 20, }} />
          );
        } else if(routeName === 'Search') {
          return (
            <Image
              source={ require('../components/assets/magnifying-glass.png') }
              style={{ width: 20, height: 20 }} />
          );
        }else {
          return (
            <Image
              source={ require('../components/assets/menu.png') }
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