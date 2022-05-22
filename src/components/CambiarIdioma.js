
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import '../../assets/i18n/i18n';
import utils from '../utils/utils.json'
let contador = 0;

const CambiarIdioma = () => {
    const { t, i18n } = useTranslation('translation');

    const [currentLanguage, setLanguage] = useState('en');

    //Cambia el idioma actual y lo actualiza en Constantes
    const changeLanguage = value => {
        i18n
            .changeLanguage(value)
            .then(() => setLanguage(value))
            .then(() => utils.lang = value)
            //.then(() => console.log(idioma.valor))
            .catch(err => console.log(err));
    };

    const langs = ['en', 'es', 'vlc']
    const banderas = [require('../img/en.png'), require('../img/es.png')]
    const siguiente = (lg) => {
        if (contador >= 1) {
            contador = 0;
        } else {
            contador++;
        }
        return lg[contador];
    }
    const handlePress = () => {
        let x = siguiente(langs)
        //console.log(banderas[contador])
        changeLanguage(x)
    }


    return (
        <TouchableOpacity onPress={() => handlePress()} style={{ alignSelf: 'flex-end', marginLeft: '36%' }}>
            <Image source={banderas[contador]} style={{ width: 50, height: 30 }}></Image>
        </TouchableOpacity>

    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1.5,
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginTop: -100
    }
});

export default CambiarIdioma;