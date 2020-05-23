import React, { FC } from 'react';
import {Text,View, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import style from '../../Style/style'

export default function ReviewForm({addNote}) {
    
    return(
        <ScrollView style={style.topBar}>
        <View style={style.containerList}>
            <Formik 
            initialValues={{title:'',body:''}}
            onSubmit={(values)=>{
            addNote(values);
            console.log(values);
            }}
            >
                {(props)=>(
                    <View>
                        <TextInput
                            style={style.formInput}
                            placeholder="Tytuł"
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                        />
                        <TextInput
                            style={style.formInput}
                            placeholder="Treść"
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                        />
                        <TouchableOpacity onPress={props.handleSubmit}>
                            <View style={style.formButton}>
                                <Text>Dodaj</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
        </View>
        </ScrollView>
    )    
}