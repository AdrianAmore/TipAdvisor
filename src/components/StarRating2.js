/**
 * @class StarRating2
 * @summary Componente que sirve para mostrar 5 estrellas clickables y votar los proyectos.
 * @property getVoto() Recoge el numero de estrellas marcadas y le suma 1 porque empiezan en la posicion 0, devuelve el valor al componente padre
 * @example <StarRating2 getVoto={votoIT => setVotoIT(votoIT)} />
 */
import React, { useState } from "react";
import { Animated, TouchableWithoutFeedback, View, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const StarRating2 = (props) => {

    const [rating, setRating] = useState(0);
    const numEstrellas = 5;

    let Estrellas = [];

    function rate(star) {
        setRating(star)
    }

    for (let i = 0; i < numEstrellas; i++) {
        Estrellas.push(
            <TouchableWithoutFeedback key={i}
                onPress={() => { rate(i), props.getVoto(i + 1) }}>
                <Animated.View >
                    <Star filled={i <= rating ? true : false} />
                </Animated.View>
            </TouchableWithoutFeedback>
        )
    }
    return (

        <View style={{ flexDirection: "row", justifyContent: "center" }}>
            {Estrellas}
        </View>
    );
}

class Star extends React.Component {
    render() {
        return (
            <Icon name={this.props.filled === true ? "star" : "star-o"} size={40} color="white"></Icon>
        );
    }
}

export default StarRating2;