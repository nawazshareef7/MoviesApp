import {
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    
img:{
    height:23,
    width:23,
    marginTop:2,
    marginRight:7
},
MainContainer :{
    flex:1,

    marginTop: (Platform.OS === 'ios') ? 20 : 0,
},
back:{
   marginTop:2,
    flexDirection:"row"
},
backText:
{
    fontSize:16,
    width:50,
    top:16,
    position:"absolute",
    left:36
},
imageView:
{
    flexDirection:"column",
    height:"20%",
    width:"100%",
    flex:1,
},

coverImage:
{
    height:202,
    width:"100%",
    flex:1,
    flexDirection:"column"
},

playImage:
{
position:"absolute",
top:"85%",
height:50,
width:50,
right:10
},
ratingImage:
{
height:30,
width:100,
position:"absolute",
top:"79%",
marginLeft:15,
},


deetsCol:
{
    marginRight:20,
    flexDirection:"column",
    marginBottom:20
},
deetsView:
{
    flexDirection:"row",
},

deetsText:
{
    margin:1,
    color: 'darkgray'
},
bottomView:
{
    margin:10,
    marginLeft:20,
},
rowView: {
    //flex:1,
    flexDirection:"row",
       width:'50%', 
       padding:10,
   },

   imageView: {
 
    width: 50,
    height: 50 ,
    
    borderRadius : 50/2
 
},
flexContainer :{
    flex:1,
    marginBottom:15,
    flex:1,
    flexDirection: 'column',
    margin:5,

    justifyContent: 'center',
    alignItems: 'center',
    marginTop: (Platform.OS === 'ios') ? 20 : 0,
},
flatHeading:{
    fontWeight:"bold",
    color:'#443E3E',
    height:20,
    width:70,
    margin:5,
textAlign:"center",
    paddingTop:0
},

setColumn:
{
    marginBottom:10,
    flexDirection:"column"
},
deetsHeadText:
{
    fontWeight:"bold",
    margin:1,
    marginBottom:10,
    fontSize:18,
    color: '#4B4848'
},
movieName:
{   
    width:'100%', 
    color: 'black',
    fontSize: 30,
    position:"absolute",
    marginLeft:10,
    fontWeight:"bold",
    top:"60%",
    color:'white',
    left: 6,
},
backButton:
{
    top:16,
    position:"absolute",
    left:0
}
    });
export default styles;
