import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'
import { Button } from 'react-native-paper';
import utils from '../utils/utils.json'
import Field from '../components/Field'
import CheckB from '../components/CheckB'
export default function Home() {

  const calcular = () =>{
    
  }



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
            <Button mode="contained" color='white' style={{borderRadius: 15}} onPress={() => console.log('Pressed')}>
            <Text style={{color: utils.colors.blue}}>Calcular</Text>
            </Button>
          </View>
          <Text style={{color: 'white', fontFamily: 'HARRINGT', marginBottom:'-20%'}}>placeholder texto precio</Text>
          <View style={styles.grpBox}> 
            <Text style={{color: 'white',marginBottom: '-40%'}}>placeholder texto encuesta</Text>
            <Button mode="contained" color='white' style={{borderRadius: 15,   marginBottom: '-35%'}} onPress={() => console.log('Pressed')}>
            <Text style={{color: utils.colors.blue}}>Realizar Encuesta</Text>
            </Button>
          </View>
        </View >
        <View View style={styles.footer}>
        </View>
      </View>
    );

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
    backgroundColor: utils.colors.blue
  },
  body: {
    flex: 5,
    width: '100%',
    backgroundColor: utils.colors.blue,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    flex: 0.5,
    width: '100%',
    backgroundColor: 'green'
  },
  grpBox: {
    flex : 1,
    //display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
  },
});