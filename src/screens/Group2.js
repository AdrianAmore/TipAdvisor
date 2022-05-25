import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default function Group2(props) {

    const cuenta = props.route.params.cuenta
    return (
        <View>
            <Text>{props.route.params.cuenta}</Text>
        </View>
    )

}