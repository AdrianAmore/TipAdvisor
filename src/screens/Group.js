import React, { useState } from 'react';
import '../../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';

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
      .then(console.log(value))
      .catch(err => console.log(err));
  };
  return (
    <View>
      <Text style={{ fontFamily: 'Macondo' }}>{t('home.split')}</Text>
      <Text style={{ fontFamily: 'Cormorant Garamond Regular' }}>{t('home.a')}</Text>
      <Button mode="contained" color='white' style={{ borderRadius: 15, }} onPress={() => changeLanguage("es")}>
        <Text style={{ color: 'red' }}>Cambiar idioma</Text>
      </Button>
    </View>
  )

}