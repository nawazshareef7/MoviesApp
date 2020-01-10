import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import * as movieAction  from '../action/ListMovies';
import {
  StyleSheet,
  Text,
  FlatList,
  Image,
  View,
  TouchableOpacity,


} from 'react-native';


class HomeScreen extends React.Component {

  componentDidMount()
  {
    
    console.log("component did mount");
    let { test } = this.props;
    console.log("component did mount"+this.props.test);

    test.getMovieList();
  }
  // componentWillMount(){
  //   firebase.crashlytics().crash();

  // }
  constructor() {
    super();
   
    this.state = {
      data: ['Bumblebee', 'Aquaman', 'Dragon Ball Super: Broly', 'Steelman'],
      data1: [2, 4, 3, 8],
    };
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Home', 

      headerRight: () => (
        <Image
          source={require('../assets/filter.png')}
          style={{marginRight: 10, width: 22, height: 22}}
        />
      ),
    };
  };
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 10,
          width: 3,
          backgroundColor: '#D81458',
        }}
      />
    );
  };

  // componentWillMount(){
  //   firebase.crashlytics().crash()

  // }
  render() {
    const { movieList } = this.props;
    return (
      
      <View style={styles.MainContainer}>
        <View style={styles.titleContainer}>
          <View>
            <Text style={styles.textStyleForTitle}>Most Popular</Text>
          </View>

          <Image
            style={{marginTop: 6, width: 25, height: 25}}
            source={require('../assets/list-menu.png')}
          />
        </View>
        
          <View style={styles.flexMainContainer}>
            
              <FlatList
                //call friend function
                data={ movieList }
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => 
                  <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Details',{movieId:item.imdbID})}>

                  <View style={styles.flexMainContainer}>
                    <Image
                      style={{width: 120, height: 170, borderRadius: 15}}
                      source={{uri: item.Poster}}
                    />
                    <View style={{marginLeft: 10}}>
                      <Text
                        style={{
                          paddingLeft: 5,
                          fontSize: 20,
                          fontWeight: '300',
                        }}>
                        {item.Title}
                      </Text>

                      <View style={{flex: 1, flexDirection: 'row'}}>
                        <Text style={styles.yearsAndLangTextStyle}>{item.Year}</Text>
                        <View style style={styles.verticleSeperator} />
                        <Text style={styles.yearsAndLangTextStyle}>EN</Text>
                      </View>
                      <View>
                        <Text style={styles.actionAndPublicTextStyle}>
                          {item.Type}
                        </Text>
                      </View>
                      <Text style={styles.ratingText}>6.9</Text>
                      <Text style={styles.publicTextStyle}>Public</Text>
                    </View>
                  </View>
                  </TouchableOpacity>

                
              }
              />
          </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  movieList: state.movieList.movieList,
});

const ActionCreators = Object.assign(
  {},
  movieAction,
);
const mapDispatchToProps = dispatch => ({
  test: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);



const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    margin: 5,
    // backgroundColor:"blue"
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,

     paddingBottom: 50,
    justifyContent: 'space-between',
  },
  flexContainer: {
    flex: 1,
    margin: 5,
    marginTop: 0,
    justifyContent: 'space-between',
    // backgroundColor: 'blue',
    flexDirection: 'row',

    // flexDirection: 'row',
    // marginTop: (Platform.OS === 'ios') ? 20 : 0,
  },
  textStyleForTitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  flexMainContainer: {
    margin: 3,
    // marginBottom: 20,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  verticleSeperator: {
    height: 16,
    width: 2,
    marginTop: 3,
    marginLeft: 5,
    backgroundColor: '#D81458',
  },
  yearsAndLangTextStyle: {
    paddingLeft: 5,
    fontSize: 15,
    color: '#D81458',
  },
  actionAndPublicTextStyle: {
    marginBottom: 50,
    paddingLeft: 5,
    fontSize: 15,
    color: '#D81458',
  },
  ratingText: {
    paddingLeft: 5,
    paddingTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#D81458',
  },
  publicTextStyle: {
    paddingLeft: 5,
    fontSize: 15,
    color: '#D81458',
  },
});

