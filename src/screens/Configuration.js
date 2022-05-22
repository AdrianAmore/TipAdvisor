import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component, useState, useEffect } from 'react'
import utils from '../utils/utils.json'
import '../../assets/i18n/i18n';
import en from '../../assets/i18n/en.json'
import es from '../../assets/i18n/es.json'
import { useTranslation } from 'react-i18next';
import CambiarIdioma from '../components/CambiarIdioma';
export default function Configuration() {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setLanguage] = useState("en");
  useEffect(() => {
    setLanguage(utils.lang)
  });
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
          <Text style={{marginTop: '2%', marginBottom: '2%', fontSize: 25}}>{t('configuration.language')}</Text>
          <CambiarIdioma></CambiarIdioma>
        </View>
        <View style={styles.grpBox}>

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
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
  },
});