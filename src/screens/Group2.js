import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, View, Image, Alert, FlatList } from 'react-native'
import utils from '../utils/utils.json'
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import '../../assets/i18n/i18n';
import en from '../../assets/i18n/en.json'
import es from '../../assets/i18n/es.json'
import { useTranslation } from 'react-i18next';
import axios from 'axios';
export default function Group2(props) {
useEffect(() => {
  pressHandler()
}, [])


    ///////////////////////// MySQL ////////////////////////////

    const [votos, setVotos] = useState(props.route.params.votos)
    const [votosFiltrados, setVotosFiltrados] = useState([])
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


    var filteredList = []
    const tCodeFilter = (nMesa) => {
        votos.map((element, index) => {
            if (element.codigoMesa === nMesa) {
                filteredList.push(element)
            }
        })
    }

    const billPercentage = () => {
        filteredList.map((element, index) => {
            element.cuenta = element.cuenta * (percentage / 100)
        })
    }

    var percentage = 0.18
    const getPercentage = () => {
        var tPuntos = 0

        filteredList.map((element, index) => {
            tPuntos += parseFloat(element.puntos)
        })
        percentage = parseFloat(tPuntos / filteredList.length)
    }

    const pressHandler = () => {
        getVotos() //Coge la lista
        // console.log("VOTOS:\n" + JSON.stringify(votos))
        tCodeFilter(props.route.params.codigoMesa) //la filtra por mesa
        // console.log("LISTA FILTRADA:\n" + JSON.stringify(filteredList))
        getPercentage() //Consigue el porcentaje respecto a los votos de cada persona
        // console.log("PORCENTAJE:\n" + percentage)
        billPercentage() //Asigna a cada cuenta su propina
        // console.log("LISTA FINAL:\n" + JSON.stringify(filteredList))
    }
    ///////////////////////////////////////////////////////////
    const { t, i18n } = useTranslation();
    const [currentLanguage, setLanguage] = useState("en");
    return (
        <View style={styles.background}>
            <View style={styles.header}>
            <Text style={{ color: 'white', fontSize: 55, fontFamily: 'Cormorant Garamond Bold' }}>TipAdvisor</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.grpBox}>
                    <FlatList
                        style={{ marginVertical: '6%', width: '75%' }}
                        data={votosFiltrados}
                        renderItem={({ item }) => (
                            <Card style={{ marginVertical: '2%' }}>
                                <Card.Title title={item.nombre} titleStyle={{ color: utils.colors.blue , fontFamily: 'Cormorant Garamond Bold'}} />
                                <Card.Content>
                                    <Paragraph style={{ color: utils.colors.blue , fontFamily: 'Cormorant Garamond Bold'}}>{t('ftlist.tip')}{Math.round((item.cuenta + Number.EPSILON) * 100) / 100}€{"\n"}{t('ftlist.votes')}{item.puntos} </Paragraph>
                                </Card.Content>
                            </Card>
                        )}
                    />
                </View>
                <View style={styles.grpBox}>
                    <Button mode="contained" color='white' style={{ borderRadius: 15, marginTop: '10%' }} onPress={() => { setVotosFiltrados(filteredList); console.log(votosFiltrados); pressHandler() }}>
                        <Text style={{ color: utils.colors.blue , fontFamily: 'Cormorant Garamond Bold'}}>{t('grp.refresh')}</Text>
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
        backgroundColor: utils.colors.blue,
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