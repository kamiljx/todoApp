import React, { FC, useState } from 'react';
import { Text,View,Dimensions, TouchableOpacity, Modal,FlatList} from 'react-native';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from '../../Style/style';
import AddPage from './NoteCreator';
import TodoItem from '../../components/item';
import ReviewForm from './NoteCreator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { setNestedObjectValues } from 'formik';
import { ScrollView } from 'react-native-gesture-handler';



interface IListProps {
    myProps: string;
}
const Tab = createBottomTabNavigator();

const List: FC<IListProps> = props => {
    const [modalOpen,SetModalOpen]=useState(false);

    const [todos, setTodos] = useState([
        { title: 'Czesanie psa',body: 'kupić nową szczotkę', key: '1' },

      ]);
    const addNote = (note) => {
        note.key = Date.now().toString();
        setTodos((curNotes)=>{
            return [note, ...curNotes];
        });
        SetModalOpen(false);
    }
      const pressHandler = (key) => {
        setTodos(prevTodos => {
          return prevTodos.filter(todo => todo.key != key);
        });
      };
    return (
      <View style ={{flex:1 }}>
      <ScrollView style={style.topBar}>
            <Text style={style.text} >Kliknij by zaznaczyć jako wykonane </Text>
          <View style={style.containerList}>
              <View >
                  <View >
                      {/* add todo form */}
                      <View>
                      <FlatList
                          data={todos}
                          renderItem={({ item }) => (
                          <TodoItem item={item} pressHandler={pressHandler} />
                          )}
                      />
                      </View>
                  </View>
                  </View>

              <View style={{alignItems: 'flex-end', bottom:120,width:Dimensions.get('window').width, position:"absolute"}}>
                  <Modal visible={modalOpen} animationType='slide'>
                      <View style={style.containerList}>
                      <TouchableOpacity style={{marginLeft:10, marginTop:40}} onPress={()=> SetModalOpen(false)}>
                          <Icon
                              name="chevron-left"
                              size={30}
                          >
                          <Text> Wróć</Text>
                          </Icon>
                          </TouchableOpacity>
                          <AddPage addNote={addNote}></AddPage>

                      </View>
                  </Modal>
                  
                  
              </View>
          </View>
      </ScrollView>
      <View>
        <TouchableOpacity onPress={()=> SetModalOpen(true)}>
                      <View style={style.addButton}>
                          <Text style={style.buttonText}> + </Text>
                      </View>
                  </TouchableOpacity>
      </View>
      </View>
    );
};

export default List;