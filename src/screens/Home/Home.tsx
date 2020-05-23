import React, { Component } from 'react';
import {View, Text, ScrollView} from 'react-native';
import style from '../../Style/style';
import { Image } from 'react-native'

 function Home() {
    return (
        <ScrollView style={style.topBar}>
          <View style={style.viewMiddle}>
            <Text style = {style.text}>Our dog</Text>
            <Image source={require('../../../assets/circleImage.jpg')} style={style.circleImage}/>
          </View>
          <View>
            <Text style={style.lorem}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore voluptatibus veniam natus velit sit sapiente ducimus perferendis dolores impedit. Ut culpa numquam est consequuntur eaque, tempore soluta molestiae eligendi suscipit!</Text>
            <Text style={style.lorem}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore voluptatibus veniam natus velit sit sapiente ducimus perferendis dolores impedit. Ut culpa numquam est consequuntur eaque, tempore soluta molestiae eligendi suscipit!</Text>
            <Text style={style.lorem}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore voluptatibus veniam natus velit sit sapiente ducimus perferendis dolores impedit. Ut culpa numquam est consequuntur eaque, tempore soluta molestiae eligendi suscipit!</Text>
            <Text style={style.lorem}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore voluptatibus veniam natus velit sit sapiente ducimus perferendis dolores impedit. Ut culpa numquam est consequuntur eaque, tempore soluta molestiae eligendi suscipit!</Text>
            <Text style={style.lorem}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore voluptatibus veniam natus velit sit sapiente ducimus perferendis dolores impedit. Ut culpa numquam est consequuntur eaque, tempore soluta molestiae eligendi suscipit!</Text>
          </View>
        </ScrollView>
    );
  }
  

export default Home;