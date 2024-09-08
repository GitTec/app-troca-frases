import { StatusBar } from 'react-native';
import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import { personagens } from '../data/index'
import { styles } from './styles'

export default function Frases_Potter() {

    const [img, setImg] = useState(require('../assets/hogwarts.png'))
    const [frase, setFrase] = useState('Harry Potter é reliquia')

    function trocarAtor() {
        let trocaAleatoria = Math.floor(Math.random() * personagens.length)
        let atorEscolhido = personagens[trocaAleatoria];


        let imgRandom = Math.floor(Math.random() * atorEscolhido.imagens.length);
        let fraseRandom = Math.floor(Math.random() * atorEscolhido.frases.length);

        setImg(atorEscolhido.imagens[imgRandom]);
        setFrase('" ' + atorEscolhido.frases[fraseRandom] + ' "');

    }

    function reiniciar() {
        setFrase('Harry Potter é uma reliquia')
        setImg(require('../assets/hogwarts.png'))
    }

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#000000"/>
            <ImageBackground
                source={require('../assets/back_hog.png')}
                resizeMode='cover'
                style={styles.container}
                imageStyle={{ opacity: 0.7 }}>

                <Image style={styles.img} source={img} />

                <Text style={styles.texto}>{frase}</Text>

                <TouchableOpacity style={styles.botao} onPress={trocarAtor}>
                    <View style={[styles.btnArea, { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
                        <Text style={styles.textBotao}>TROCAR</Text>
                        <Icon
                            name="arrow-right"
                            size={15}
                            color="#fff"
                            style={{ marginLeft: 15 }}
                        />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.botao, { marginTop: 15, borderColor: "#b04d4d" }]} onPress={reiniciar}>
                    <View style={[styles.btnArea, { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
                        <Text style={[styles.textBotao,]}>REINICIAR</Text>
                        <Icon
                            name="refresh"
                            size={15}
                            color="#fff"
                            style={{ marginLeft: 15 }}
                        />
                    </View>
                </TouchableOpacity>
            </ImageBackground>
        </>
    );

}