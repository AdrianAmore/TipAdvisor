import React, { useState } from 'react';
import '../../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import CambiarIdioma from '../components/CambiarIdioma';
import utils from '../utils/utils.json'
import { Button } from 'react-native-paper';
import { Text, View } from 'react-native'
export default function Group() {

  const { t, i18n } = useTranslation();

  const [currentLanguage, setLanguage] = useState('en');

  const changeLanguage = value => {
    i18n
      .changeLanguage(value)
      .then(() => { setLanguage(value) })
      .then(utils.lang = value)
      .then(console.log(utils.lang))
      .catch(err => console.log(err));
  };
  return (
    <View>
      <CambiarIdioma></CambiarIdioma>
    </View>
  )

}