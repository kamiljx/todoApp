import React, { Component } from 'react';
import { StyleSheet, View, Text} from 'react-native';
class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style = {styles.text}>INFO</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    text: {
        color: 'red',
        fontSize: 12,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
});
export default Home;