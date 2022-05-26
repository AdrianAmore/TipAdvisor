import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, View, Image, Alert } from 'react-native'
import utils from '../utils/utils.json'
import StarRating2 from '../components/StarRating2';
import '../../assets/i18n/i18n';
import en from '../../assets/i18n/en.json'
import es from '../../assets/i18n/es.json'
import { useTranslation } from 'react-i18next';
import { Button, TextInput } from 'react-native-paper';
import axios from 'axios';
export default function Group({ navigation }) {
  const colors = {
    themeColor: "white",
    tint: "#2b49c3"
  }
  ///////////////////////// MySQL ////////////////////////////

  const [votos, setVotos] = useState([])

  const [codigoMesa, setCodigoMesa] = useState('')
  const [nombre, setNombre] = useState('')
  const [puntos, setPuntos] = useState(10)
  const [cuenta, setCuenta] = useState()



  //Recupera la info y la pasa como JSON
  const getVotos = async () => {
    const respuesta = await axios.get('http://192.168.1.132/php/')
    setVotos(respuesta.data)
    //console.log(JSON.stringify(respuesta.data))
  }


  //Recupera el total de la cuenta por numero de mesa
  const getTotalCuenta = (nMesa) => {
    var total = parseFloat(0)
    var f = votos.map((element, index) => {
      if (element.codigoMesa === nMesa) {
        total += parseFloat(element.cuenta)
      }
    })
    return total
    //console.log(total)
  }

  //Añade un registro
  const addVoto = async () => {
    const obj = { codigoMesa, puntos, cuenta, nombre }
    const respuesta = await axios.post('http://192.168.1.132/php/', obj)
  }

  ///////////////////////////////////////////////////////////

  ///////////////////////// I18n ////////////////////////////


  const { t, i18n } = useTranslation();
  const [currentLanguage, setLanguage] = useState("en");
  useEffect(() => {
    setLanguage(utils.lang)
  });
  var voteCaption = ""
  var voteMessage = ""
  var voteMessage2= ""
  var tCodeMsg = ""
  var errCodeCap = ""

  switch (currentLanguage) {

    case "en":
      voteCaption = en.translation.survey.voteCaption
      voteMessage = en.translation.survey.voteMessage
      voteMessage2 = en.translation.survey.voteMessage2
      tCodeMsg = en.translation.grp.tCodeMsg
      errCodeCap=en.translation.grp.errCodeCap
      break;

    case "es":
      voteCaption = es.translation.survey.voteCaption
      voteMessage = es.translation.survey.voteMessage
      voteMessage2 = es.translation.survey.voteMessage2
      tCodeMsg = es.translation.grp.tCodeMsg
      errCodeCap=es.translation.grp.errCodeCap
      break;

    default:
      voteCaption = en.translation.survey.voteCaption
      voteMessage = en.translation.survey.voteMessage
      voteMessage2 = en.translation.survey.voteMessage2
      tCodeMsg = en.translation.grp.tCodeMsg
      errCodeCap=en.translation.grp.errCodeCap
      break;
  }

  ///////////////////////////////////////////////////////////

  ///////////////////////// Votos ////////////////////////////
  const [quality, setQuality] = useState(quality)
  if (typeof quality === 'undefined') { setQuality(1) }
  const [speed, setSpeed] = useState(speed)
  if (typeof speed === 'undefined') { setSpeed(1) }
  const [service, setService] = useState(service)
  if (typeof service === 'undefined') { setService(1) }
  const [quantity, setQuantity] = useState(quantity)
  if (typeof quantity === 'undefined') { setQuantity(1) }
  const [place, setPlace] = useState(place)
  if (typeof place === 'undefined') { setPlace(1) }

  var total
  const calcular = () => {
    var total = parseInt(quality) + parseInt(speed) + parseInt(service) + parseInt(quantity) + parseInt(place)
    setPuntos(total)
    //console.log(total)
  }
  ///////////////////////////////////////////////////////////


  const pressHandler = () => {

    if (codigoMesa.length != 8) {
      Alert.alert(errCodeCap, tCodeMsg)
    } else {
      calcular()
      addVoto()
      Alert.alert(voteCaption, voteMessage2,
        [{ onPress: () => {navigation.navigate('Group2',{
          codigoMesa:codigoMesa,
          nombre:nombre,
          cuenta:cuenta,
          votos: votos
        } ) } }])
    }
  }



  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <View style={styles.delimiter}>
          <TextInput
            selectionColor={colors.themeColor}
            outlineColor={colors.themeColor}
            theme={{ colors: { primary: colors.tint } }}
            style={styles.box}
            label={t('grp.tCode')}
            value={codigoMesa}
            mode='outlined'
            onChangeText={codigoMesa => { setCodigoMesa(codigoMesa) }}
          ></TextInput>
          <TextInput
            selectionColor={colors.themeColor}
            outlineColor={colors.themeColor}
            theme={{ colors: { primary: colors.tint } }}
            style={styles.box}
            label={t('grp.uName')}
            value={nombre}
            mode='outlined'
            onChangeText={nombre => { setNombre(nombre) }}
          ></TextInput>
          <TextInput
            selectionColor={colors.themeColor}
            outlineColor={colors.themeColor}
            theme={{ colors: { primary: colors.tint } }}
            style={styles.box}
            label={t('grp.bill')}
            value={cuenta}
            keyboardType='numeric'
            mode='outlined'
            onChangeText={cuenta => { setCuenta(cuenta) }}
          ></TextInput>
        </View>

      </View>
      <View View style={styles.body}>
        <Text style={{ marginBottom: 10 }}>{t('survey.instructions')}</Text>
        <View style={styles.grpBox}>
          <Text style={{ marginBottom: '2%', marginTop: '2%', fontSize: 20 }}>{t('survey.quality')}</Text>
          <StarRating2 getVoto={quality => setQuality(quality)} />
          <Text style={{ marginBottom: '2%', marginTop: '2%', fontSize: 20 }}>{t('survey.speed')}</Text>
          <StarRating2 getVoto={speed => setSpeed(speed)} />
          <Text style={{ marginBottom: '2%', marginTop: '2%', fontSize: 20 }}>{t('survey.service')}</Text>
          <StarRating2 getVoto={service => setService(service)} />
          <Text style={{ marginBottom: '2%', marginTop: '2%', fontSize: 20 }}>{t('survey.quantity')}</Text>
          <StarRating2 getVoto={quantity => setQuantity(quantity)} />
          <Text style={{ marginBottom: '2%', marginTop: '2%', fontSize: 20 }}>{t('survey.place')}</Text>
          <StarRating2 getVoto={place => setPlace(place)} />
          <Button mode="contained" color='white' style={{ borderRadius: 15, marginTop: '10%' }} onPress={() => pressHandler()}>
            <Text style={{ color: utils.colors.blue }}>{t('survey.vote')}</Text>
          </Button>
        </View>
      </View >
      <View View style={styles.footer}>
      </View>
    </View>
  )

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
    justifyContent: 'center',
  },
  header: {
    flex: 0.5,
    padding: '3%',
    width: '100%',
    backgroundColor: 'green',
    flexDirection: 'row',

    justifyContent: 'center',
  },
  grpBox: {
    flex: 1,
    //display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
  },
  delimiter: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  box: {
    height: 35,
    width: '30%',
    fontSize: 14,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10

  }
});