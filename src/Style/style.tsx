import { StyleSheet, NativeMethodsMixin } from 'react-native';
import { StatusBar, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'whitesmoke',
      marginLeft: 30,
    },
    containerList:{
      flex: 1,
      backgroundColor: '#f4efef',
    },
    text: {
        color: 'orange',
        fontSize: 20,
        marginBottom: 30,
        textAlign:'center'
    },
    circleImage:{
      width: 300, 
      height: 300, 
      borderRadius: 400/ 2,
      marginBottom: 30,
    },
    infoImage:{
      width: 250, 
      height: 150, 
    },
    infoImageRight:{
      width: 250, 
      height: 150, 
      flex: 1,
      marginLeft: 90

    },
    topBar:
    {
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 50,
    },
    viewMiddle:{
      alignItems: 'center',
    },
    lorem:{
      margin: 30,
      fontFamily: 'Arial'
    },
    infoContent:{
    alignItems: 'center'    
    },
    addButton:{
      position: "absolute",
      right: 20,
      bottom: 30,
      backgroundColor: 'red',
      borderRadius: 50,
      width: 60,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText:{
      color: 'white',
      fontSize: 24,
    },
    AddButtonBottom:{
      position:"absolute",
      bottom: 0
    },
    formInput:{
      textAlign: "center",
      borderWidth: 1,
      marginTop:10,
      fontSize:30,
      marginLeft:30,
      marginRight:30,
      height:40,
      borderRadius:10,
    },
    formButton:{
      marginRight:70,
      marginLeft:70,
      marginTop:30,
      padding:10,
      alignItems:'center',
      backgroundColor:'rgba(0,150,245,1)',
      borderRadius:10,
    },
    list: {
      padding: 16,
      marginTop: 16,
      borderColor: '#dbcdcd',
      borderWidth: 1,
      borderStyle: "solid",
      borderRadius: 10,
    },
    listTittle:{
      fontSize:20,
      textAlign:"center",
      fontWeight:"bold",
    }

});