import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { TextInput } from 'react-native-paper';
const Field = (props) => {
  const [text, setText] = React.useState("");
    return (
      <View style={{flexDirection: 'row',justifyContent: 'space-evenly', alignItems: 'center', width: '60%'}}>
        <Text style={{color: 'red',}}>{props.label}</Text>
        <TextInput 
        style={{width: '60%', height: 25,}}
        label={props.label}
        value={text}
        mode='outlined'
        keyboardType = {props.type}
        onChangeText={text => setText(text)}
        ></TextInput>
      </View>
    )
} 
export default Field;