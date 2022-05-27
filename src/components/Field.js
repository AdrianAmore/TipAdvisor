import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { TextInput } from 'react-native-paper';
const Field = (props) => {
  const [text, setText] = React.useState("");
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', width: '60%' }}>
      <Text style={{ color: 'white', marginRight: 40, fontFamily: 'Cormorant Garamond Bold', fontSize: 20 }}>{props.label}</Text>
      <TextInput
        style={{ width: '60%', height: 25, fontFamily: 'Cormorant Garamond Bold', fontSize: 10, borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10, }}
        label={props.label}
        value={props.text}
        mode='outlined'
        keyboardType={props.type}
        onChangeText={text => { setText(text); props.changeValue(text) }}
      ></TextInput>
    </View>
  )
}
export default Field;