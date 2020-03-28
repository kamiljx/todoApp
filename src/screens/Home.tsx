import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView} from 'react-native';
import styled from 'styled-components/native'
import styles from '../style'
import * as Layout from '../constants/Layout';
import style from '../style';

 function Home() {
    return (
        <ScrollView >
            <View style={styles.container}>
                <Overlapping></Overlapping> 
                <Text style = {styles.text}>home</Text>
            </View>
        </ScrollView>
    );
  }
  const Overlapping = styled.View`
    padding: 10px 20px ${`$(Layout.default.statusBar)px`} 40px
  `

export default Home;