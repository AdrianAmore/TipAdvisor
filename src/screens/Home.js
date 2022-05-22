import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component, useState, useEffect } from 'react'
import { Button } from 'react-native-paper';
import utils from '../utils/utils.json'
import Field from '../components/Field'
import CheckB from '../components/CheckB'
import '../../assets/i18n/i18n';
import en from '../../assets/i18n/en.json'
import es from '../../assets/i18n/es.json'
import { useTranslation } from 'react-i18next';
function Home({ navigation }) {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setLanguage] = useState("en");
  useEffect(() => {
    setLanguage(utils.lang)
  });
  var p1
  var p2
  var p3
  var p4
  switch (currentLanguage) {

    case "en":
      p1 = en.translation.message.p1
      p2 = en.translation.message.p2
      p3 = en.translation.message.p3
      p4 = en.translation.message.p4
      break;

    case "es":
      p1 = es.translation.message.p1
      p2 = es.translation.message.p2
      p3 = es.translation.message.p3
      p4 = es.translation.message.p4
      break;

    default:
      p1 = en.translation.message.p1
      p2 = en.translation.message.p2
      p3 = en.translation.message.p3
      p4 = en.translation.message.p4
      break;
  }

  //Calculo
  const [total, setTotal] = useState("")
  const [comensales, setComensales] = useState("")
  const [porcentaje, setPorcentaje] = useState("")
  const [msgCalculo, setMsgCalculo] = useState("")
  const [checked, setChecked] = useState(false)

  const calcular = () => {
    // console.log(p1)
    // console.log(p2)
    // console.log(p3)
    // console.log(p4)
    // console.log(currentLanguage)
    var p = porcentaje / 100; //console.log(p)
    var propina = total * p; //console.log(propina)
    var totProp = parseFloat(propina) + parseFloat(total); //console.log(totProp)
    var split = propina / comensales
    var totSplit = (parseFloat(total) / parseFloat(comensales)) + parseFloat(split)

    if (checked) {
      propina = Math.round(propina)
      totProp = Math.round(totProp)
      split = Math.round(split)
      totSplit = Math.round(totSplit)
    }
    if (total != "" && porcentaje != "") {
      if (comensales > 1 && comensales != "") {
        setMsgCalculo(p1 + propina + p2 + totProp + p3 + split + p4 + totSplit + "€")
      } else {
        setMsgCalculo(p1 + propina + p2 + totProp + "€")
      }
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
          <Field label={t('home.total')} type='numeric' changeValue={total => setTotal(total)} text={total}></Field>
          <Field label={t('home.split')} type='numeric' changeValue={comensales => setComensales(comensales)} text={comensales} ></Field>
          <Field label={t('home.percentage')} type='numeric' changeValue={porcentaje => setPorcentaje(porcentaje)} text={porcentaje}></Field>
          <CheckB label={t('home.round')} changeValue={checked => setChecked(checked)}></CheckB>
          <Button mode="contained" color='white' style={{ borderRadius: 15 }} onPress={() => calcular()}>
            <Text style={{ color: utils.colors.blue }}>{t('home.btnCalculate')}</Text>
          </Button>
          <Button mode="contained" color='white' style={{ borderRadius: 15, height: 30, width: 100 }} onPress={() => clear()}>
            <Text style={{ color: utils.colors.blue, fontSize: 10 }}>{t('home.btnClear')}</Text>
          </Button>
        </View>
        <Text style={{ color: 'white', fontFamily: 'HARRINGT', marginBottom: '-20%' }}>{msgCalculo}</Text>
        <View style={styles.grpBox}>
          <Text style={{ color: 'white', marginBottom: '-40%' }}>{t('home.survey')}</Text>
          <Button mode="contained" color='white' style={{ borderRadius: 15, marginBottom: '-35%' }} onPress={() => navigation.navigate('Survey')}>
            <Text style={{ color: utils.colors.blue }}>{t('home.btnSurvey')}</Text>
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