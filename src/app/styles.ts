import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        height: 190,
        width: 190,
        resizeMode: 'cover',
    },
    texto: {
        fontSize: 17,
        marginTop: 20,
        color: '#ffffff',
        fontWeight: 'bold',
        margin: 30,
        fontStyle: 'italic',
        textAlign: 'center'
    },
    botao: {
        width: 250,
        height: 50,
        borderWidth: 2,
        borderRadius: 50,
    },
    btnArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBotao: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff'
    }
})