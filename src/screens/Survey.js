import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, View, Image, Alert } from 'react-native'
import utils from '../utils/utils.json'
import StarRating2 from '../components/StarRating2';
import '../../assets/i18n/i18n';
import en from '../../assets/i18n/en.json'
import es from '../../assets/i18n/es.json'
import { useTranslation } from 'react-i18next';
import { Button } from 'react-native-paper';
export default function Survey({ navigation }) {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setLanguage] = useState("en");
  useEffect(() => {
    setLanguage(utils.lang)
  });
  var voteCaption = ""
  var voteMessage = ""

  switch (currentLanguage) {

    case "en":
      voteCaption = en.translation.survey.voteCaption
      voteMessage = en.translation.survey.voteMessage
      break;

    case "es":
      voteCaption = es.translation.survey.voteCaption
      voteMessage = es.translation.survey.voteMessage
      break;

    default:
      voteCaption = en.translation.survey.voteCaption
      voteMessage = en.translation.survey.voteMessage
      break;
  }


  //Votos
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
    //console.log(total)
  }

  const pressHandler = () => {
    calcular()
    Alert.alert(voteCaption, voteMessage,
      [{ onPress: () => { utils.porciento = total; navigation.goBack() } }])

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
    width: '100%',
    backgroundColor: 'green'
  },
  grpBox: {
    flex: 1,
    //display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
  },
});