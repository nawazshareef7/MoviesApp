import {
    StyleSheet,
} from 'react-native';
const styles = StyleSheet.create({

    MainContainer :{
        flex:1,
        margin:5,
        marginTop: (Platform.OS === 'ios') ? 20 : 0,
    },
    flexContainer :{
        flex:1,
        marginBottom:15,
        flex:1,
        flexDirection: 'row',
        marginTop: (Platform.OS === 'ios') ? 20 : 0,
    },
    indicator:{
        flex: 1,
            justifyContent: "center",
            alignItems: "center",
    },
bottom:{
    position:"absolute",
    bottom:0,
    padding:10,
    color: 'darkgray',
        textAlignVertical:'center',

},
mainHeading:{
marginTop: 10,
letterSpacing:1,
marginLeft:7, fontFamily:"Sans Serif",color:'#443E3E', fontWeight: "bold",marginBottom:10, fontSize: 20 
},
topBottom:{
    position:"absolute",
    bottom:20,
    padding:10,
    color: 'darkgray',
    fontWeight:"bold"

},
  imageView: {
 
    width: '35%',
    height: 150 ,
    margin: 5,
    borderRadius : 7
 
},
 
textView: {
 
    fontFamily: 'Sans Serif',
    width:'100%', 
    color: 'darkgray'
},
subHeading:{
    fontWeight:"bold",color:'#443E3E',paddingTop:0
},
columnView: {
 //flex:1,
 flexDirection:"column",
    width:'50%', 
    padding:10,
},
img:{
    height:23,
    width:23,
    marginTop:2,
    marginRight:7
}

});

export default styles;