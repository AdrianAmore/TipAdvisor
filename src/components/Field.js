import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { TextInput } from 'react-native-paper';
const Field = (props) => {
  const [text, setText] = React.useState("");
    return (
      <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-evenly',}}>
        <Text>{props.label}</Text>
        <TextInput 
        label={props.label}
        value={text}
        onChangeText={text => setText(text)}
        ></TextInput>
      </View>
    )
} 
export default Field;