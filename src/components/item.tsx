import React from 'react'
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import style from '../Style/style'

export default function TodoItem({ pressHandler, item }) {
  return (
    <TouchableOpacity style={style.list} onPress={() => pressHandler(item.key)}>
      <Text style={style.listTittle}>{item.title}</Text>
      <Text>{item.body}</Text>
    </TouchableOpacity>
  )
}
