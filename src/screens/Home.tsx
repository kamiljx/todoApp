import React, { Component } from 'react';
import { StyleSheet, View, Text} from 'react-native';
 function Home() {
    return (
      <View style={styles.container}>
        <Text>home</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default Home;