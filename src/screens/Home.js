import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'
import utils from '../utils/utils.json'
import Field from '../components/Field'
import CheckB from '../components/CheckB'
export default class Home extends Component {
  render() {
    return (

      <View style={styles.background}>
        <View style={styles.header}>
        <Image
        style={{width: 200, height: 100, alignSelf: 'center'}}
        source={require('../img/placeholder.png')}
      />
        </View>
        <View View style={styles.body}>
          <View style={styles.grpBox}>
            <Field label="Total" type='numeric'></Field>
            <Field label="Comensales" type='numeric'></Field>
            <Field label="Porcentaje" type='numeric'></Field>
            <CheckB label='¿Redondear?'></CheckB>
            
          </View>
        </View>
        <View View style={styles.footer}>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  background: {
    backgroundColor: 'red',
    width: '100%',
    height: '100%',
    flex: 1
  },
  footer: {
    flex: 0.1,
    width: '100%',
    backgroundColor: 'yellow'
  },
  body: {
    flex: 5,
    width: '100%',
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    flex: 0.5,
    width: '100%',
    backgroundColor: 'green'
  },
  grpBox: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
  }
});