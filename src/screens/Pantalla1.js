import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Field from '../components/Field'
export default class Pantalla1 extends Component {
  render() {
    return (
      <View>
        <Text style={{fontFamily: 'Macondo'}}>Hola soy Adri esto es un placeholder</Text>
        <Text style={{fontFamily: 'Cormorant Garamond Regular'}}>Hola soy Adri esto es un placeholder</Text>
      </View>
    )
  }
}