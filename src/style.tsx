import { StyleSheet } from 'react-native';
import { SafeAreaView, StatusBar, Platform } from 'react-native';
import Layout from './constants/Layout'

export default StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      marginLeft: 30,
     
    },
    text: {
        color: 'orange',
        fontSize: 20,
        marginBottom: 30,
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
    topBar:
    {
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 50,
      backgroundColor: 'whitesmoke',
    },
    viewMiddle:{
      alignItems: 'center',
    },
    lorem:{
      margin: 30,
      fontFamily: 'Arial'
    },
    infoContent:{
alignItems: 'center'    }

});