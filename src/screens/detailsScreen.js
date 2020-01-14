import React, {Component} from 'react';
import {
  Text,
  ScrollView,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Avatar} from 'react-native-paper';
import { HeaderBackButton} from 'react-navigation-stack';
import ViewMoreText from 'react-native-read-more-text';
import * as movieActions from '../action/MoviesDetails';

class DetailsScreen extends Component {
  constructor() {
    super();
    this.state = {
     
      imdbId: '',
    }
  }

  componentDidMount()
  {
    // this.props.getMoviesList();
    console.log("component did mount");
    let { actions } = this.props;
    actions.getMovieDetails(this.state.imdbId);
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Movie Details',
      headerLeft: (
        <View style={{flex: 1, flexDirection: 'row'}}>
          <HeaderBackButton
            onPress={_ => navigation.goBack(null)}></HeaderBackButton>

          <View style={{paddingTop: 18}}>
            <Text> Home</Text>
          </View>
        </View>
      ),

      headerRight: () => (
        <TouchableOpacity>
          <Image
            source={require('../assets/upload.png')}
            style={{marginRight: 10, width: 22, height: 22}}
          />
        </TouchableOpacity>
      ),
    };
  };

  renderViewMore(onPress) {
    return (
      <Text onPress={onPress} style={{color: 'red'}}>
        View more
      </Text>
    );
  }
  renderViewLess(onPress) {
    return (
      <Text onPress={onPress} style={{color: 'red'}}>
        View less
      </Text>
    );
  }
  render() {
    const { movieDetails } = this.props;
    console.log("MOVIE Details = " +JSON.stringify(movieDetails) );
    const { navigation } = this.props;
    this.state.imdbId= navigation.getParam('movieId', 'NO-ID')
    console.warn('movieId'+this.state.imdbId);
   
    var castArray = movieDetails["Actors"].split(',');
        //var writerArray = movieDetails["Writer"].split(',');
    
    return (
      <View>
        <ScrollView>
          <View>
            <Image
              style={{
                width: '100%',
                height: 200,
                //resizeMode: 'contain',
              }}
              source={{uri: movieDetails["Poster"]}}
            />
            <Text
              style={{
                fontSize: 25,
                color: 'white',
                fontWeight: 'bold',
                position: 'absolute',
                left: 20,
                top: 120,
              }}>
                {movieDetails['Title']}
            </Text>
            <Image
              style={styles.starOne}
              source={require('../assets/star.png')}
            />
            <Image
              style={styles.starTwo}
              source={require('../assets/star.png')}
            />
            <Image
              style={styles.starThree}
              source={require('../assets/star.png')}
            />
            <Image
              style={styles.playButtonStyle}
              source={require('../assets/play.png')}
            />
            <View style={styles.firststRowStyle}>
              <Text style={styles.rowTextStyle}>Duration</Text>
              <Text
                style={{
                  marginRight: 150,
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                Genre
              </Text>
              <Text style={styles.rowTextStyle}>Language</Text>
            </View>

            <View style={styles.secondrowStyle}>
              <Text style={styles.secondrowTextStyle}>{movieDetails['Runtime']}</Text>
              <Text style={styles.dramaMusicTextStyle}>{movieDetails['Genre']}</Text>
              <Text style={{marginLeft:105,width:80}}>{movieDetails['Language']}</Text>
            </View>
          </View>
          <View style={styles.detailTextStyle}>
            <Text style={styles.rowTextStyle}>Synopsis</Text>
            <View>
              <ViewMoreText
                numberOfLines={3}
                renderViewMore={this.renderViewMore}
                renderViewLess={this.renderViewLess}
                textStyle={{textAlign: 'justify'}}>
                <Text>
                 {movieDetails['Plot']}
                </Text>
              </ViewMoreText>
              <Text style={styles.headingTextStyle}>Main Cast</Text>
              <View >
               
              <FlatList style={{marginRight:10}}
                horizontal={true}
                data={castArray}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                  <View>
                    
                    <Text  maxLength='4' style={styles.horizontalFlatListStyle}>
                      {item}
                    </Text>
                    
                    <Avatar.Image style={{flex:1,flexDirection:'row',margin:5,marginTop:10}}
                     source={require('../assets/123.jpg')} />
                     
                    <View>
                      <Text style={styles.horizontalFlatListStyle}>
                        {item}
                      </Text>
                    </View>
                  </View>
                )}
              />
              </View>
              <View>
                
              </View>
              
            </View>
            <View>
            
              <Text style={styles.headingTextStyle}>Main Technical Cast</Text>
            </View>
          </View>
          <View style={{margin: 0}}>
           
          </View>
          
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  
  movieDetails: state.movieDetails.movieDetails,
});

const ActionCreators = Object.assign(
  {},
  movieActions,
);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps,mapDispatchToProps)(DetailsScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  appBarStyle: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  starImageStyle: {
    flex: 1,
    flexDirection: 'row',
  },
  starOne: {position: 'absolute', left: 20, top: 150, width: 30, height: 30},
  starTwo: {position: 'absolute', left: 45, top: 150, width: 30, height: 30},
  starThree: {position: 'absolute', left: 75, top: 150, width: 30, height: 30},
  dramaMusicTextStyle: {
    //marginRight: 66,
    fontSize: 20,
    marginLeft: 70,
    fontSize: 15,
    width:100
    // fontWeight: 'bold'
  },
  playButtonStyle: {
    marginRight: 10,
    position: 'absolute',
    right: 10,
    top: 170,
    width: 43,
    height: 43,
  },
  firststRowStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  rowTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 48,
  },
  headingTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 48,
    paddingTop:10,
    marginTop:20,
  },
  secondrowTextStyle: {
    fontSize: 15,
    marginLeft: 1,
    justifyContent: 'space-between',
    // margin:5
    // fontWeight: 'bold'
  },
  secondrowStyle: {
    flex: 1,
    flexDirection: 'row',
    //justifyContent: 'space-between',
    position: 'absolute',

    margin: 10,
    // marginRight:40,
    //paddingLeft: 0,
    //paddingRight: 10,
    position: 'absolute',
    top: 230,
    left: 10,
    right:50
  },
  detailTextStyle: {
    margin: 20,
    marginTop:35,
    paddingTop: 5,
  },
  horizontalFlatListStyle:
  {paddingTop:5, fontSize: 15,flex:1,flexDirection:'row',marginLeft:8}
});
