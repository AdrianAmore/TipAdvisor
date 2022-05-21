import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component, useState } from 'react'
import { Button } from 'react-native-paper';
import utils from '../utils/utils.json'
import Field from '../components/Field'
import CheckB from '../components/CheckB'
function Home() {
  const [total, setTotal] = useState()
  const [comensales, setComensales] = useState()
  const [porcentaje, setPorcentaje] = useState()
  const [msgCalculo, setMsgCalculo] = useState()


  const calcular = () => {
    var p = porcentaje / 100; //console.log(p)
    var propina = total * p; //console.log(propina)
    var totProp = parseFloat(propina) + parseFloat(total); //console.log(totProp)
    var split = propina / comensales
    var totSplit = (parseFloat(total) / parseFloat(comensales)) + parseFloat(split)
    if (comensales > 1 && comensales != "") {
      setMsgCalculo("Total: " + propina + "\nTotal + propina: " + totProp + "\nPropina por persona: " + split + "\nPrecio total + propina por persona: " + totSplit)
    } else {
      setMsgCalculo("Total: " + propina + "\nTotal + propina: " + totProp)
    }

  }

  const clear = () => {
    setTotal("")
    setComensales("")
    setPorcentaje("")
    setMsgCalculo("")
  }

  return (

    <View style={styles.background}>
      <View style={styles.header}>
        <Image
          style={{ width: 200, height: 100, alignSelf: 'center' }}
          source={require('../img/placeholder.png')}
        />
      </View>
      <View View style={styles.body}>
        <View style={styles.grpBox}>
          <Field label="Total" type='numeric' changeValue={total => setTotal(total)} text={total}></Field>
          <Field label="Comensales" type='numeric' changeValue={comensales => setComensales(comensales)} text={comensales} ></Field>
          <Field label="Porcentaje" type='numeric' changeValue={porcentaje => setPorcentaje(porcentaje)} text={porcentaje}></Field>
          <CheckB label='¿Redondear?'></CheckB>
          <Button mode="contained" color='white' style={{ borderRadius: 15 }} onPress={() => calcular()}>
            <Text style={{ color: utils.colors.blue }}>Calcular</Text>
          </Button>
          <Button mode="contained" color='white' style={{ borderRadius: 15, height: 30, width: 100 }} onPress={() => clear()}>
            <Text style={{ color: utils.colors.blue, fontSize: 10 }}>Limpiar</Text>
          </Button>
        </View>
        <Text style={{ color: 'white', fontFamily: 'HARRINGT', marginBottom: '-20%' }}>{msgCalculo}</Text>
        <View style={styles.grpBox}>
          <Text style={{ color: 'white', marginBottom: '-40%' }}>placeholder texto encuesta</Text>
          <Button mode="contained" color='white' style={{ borderRadius: 15, marginBottom: '-35%' }} onPress={() => console.log('Pressed')}>
            <Text style={{ color: utils.colors.blue }}>Realizar Encuesta</Text>
          </Button>
        </View>
      </View >
      <View View style={styles.footer}>
      </View>
    </View>
  );

}
export default Home;

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
    flex: 1,
    //display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
  },
});