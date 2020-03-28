import { StyleSheet } from 'react-native';
import { SafeAreaView, StatusBar, Platform } from 'react-native';
import Layout from './constants/Layout'

export default StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
     
    },
    text: {
        color: 'orange',
        //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 50,
        fontSize: 12,
    },
});