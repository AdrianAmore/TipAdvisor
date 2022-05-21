import React,{useState} from 'react';
import '../../assets/i18n/i18n';
import {useTranslation} from 'react-i18next';


import { Button } from 'react-native-paper';
import { Text, View } from 'react-native'
export default function Pantalla1() {

  const {t, i18n} = useTranslation();
  
  const [currentLanguage,setLanguage] =useState('en');
  
  const changeLanguage = value => {
    i18n
      .changeLanguage(value)
      .then(() => setLanguage(value))
      .catch(err => console.log(err));
  };
  return (
    <View>
      <Text style={{ fontFamily: 'Macondo' }}>{t('hello')}</Text>
      <Text style={{ fontFamily: 'Cormorant Garamond Regular' }}>{t('this line is translated')}</Text>
      <Button mode="contained" color='white' style={{ borderRadius: 15,}} onPress={() => changeLanguage('es')}>
            <Text style={{ color: 'red' }}>Cambiar idioma</Text>
          </Button>
    </View>
  )

}