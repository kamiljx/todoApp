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
            <Text style={{flex: 1, margin: 30}}>{"\n"}{"\n"}{"\n"}
                  <Image source={require('../../../assets/infoImage.jpg')} style={{ width: 20, height: 20 }} />
                  <Text> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim ratione repellendus tempora doloremque itaque voluptatum repellat harum modi, ea a quidem. Accusamus incidunt, quod temporibus dolorum beatae reprehenderit quidem fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis mollitia suscipit quidem veniam quam iure nobis error nihil nisi, eos similique facere, optio molestias? Nam recusandae maiores quis nihil eum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, magnam ipsa! Magni commodi fugiat optio, similique possimus dolore facere non quia alias sunt aperiam mollitia sapiente earum! Reiciendis, inventore vel.</Text>
                </Text>
            <View>
              <Text style={style.lorem}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore voluptatibus veniam natus velit sit sapiente ducimus perferendis dolores impedit. Ut culpa numquam est consequuntur eaque, tempore soluta molestiae eligendi suscipit!</Text>
            </View>
            <View >
                <Image source={require('../../../assets/infoImage.jpg')} style={style.infoImageRight}/>
            </View>
            
          </ScrollView>
        );
    }
}

export default Home;