import React, { Component } from 'react';
import { ScrollView, View, Text} from 'react-native';
import style from '../../Style/style';
import { Image } from 'react-native'

class Home extends Component {
    render() {
        return (
            <ScrollView style={style.topBar}>
              <View style={style.container}>
                <Text style = {style.text}>Our dog</Text>
                <Image source={require('../../../assets/infoImage.jpg')} style={style.infoImage}/>
            </View>
            <View>
              <Text style={style.lorem}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore voluptatibus veniam natus velit sit sapiente ducimus perferendis dolores impedit. Ut culpa numquam est consequuntur eaque, tempore soluta molestiae eligendi suscipit!</Text>
            </View>
            <View style={style.infoContent}>
                <View>
                    <Text></Text>
                </View>
                <Image source={require('../../../assets/infoImage.jpg')} style={style.infoImage}/>
            </View>
          </ScrollView>
        );
    }
}

export default Home;