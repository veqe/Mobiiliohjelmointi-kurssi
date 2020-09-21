import React, { useState, useRef } from 'react'
import {
    StyleSheet,
    View,
    Button,
    Text,
    TextInput,
    FlatList,
} from 'react-native'

export default function Calculator({ navigation }) {
    const [ResultTeksti, setResultTeksti] = useState('')
    const [numero1, setNumero1] = useState('')
    const [numero2, setNumero2] = useState('')
    const [historia, setHistoria] = useState([])

    const InitialFocus = useRef(null)

    const calculate = (opertator) => {
        //console.log(numero1, numero2, opertator);
        const [numb1, numb2] = [Number(numero1), Number(numero2)]

        let result

        if (isNaN(numb1) || isNaN(numb2)) {
            setResultTeksti('0')
        } else {
            switch (opertator) {
                case '+':
                    result = numb1 + numb2
                    break
                case '-':
                    result = numb1 - numb2
                    break
            }
        }
        setResultTeksti(result)

        const tekstii =
            numb1 + ' ' + opertator + ' ' + numb2 + ' ' + '=' + ' ' + result

        setHistoria([
            ...historia,
            {
                key: String(historia.length),
                text: tekstii,
            },
        ])
        //console.log(historia)

        setNumero1('')
        setNumero2('')
        InitialFocus.current.focus()
    }

    return (
        <View style={styles.container}>
            <Text style={styles.head}>Reslut: {ResultTeksti}</Text>
            <TextInput
                style={styles.input}
                ref={InitialFocus}
                keyboardType="number-pad"
                onChangeText={(text) => setNumero1(text)}
                value={numero1}
            />
            <TextInput
                style={styles.input}
                keyboardType={'number-pad'}
                onChangeText={(text) => setNumero2(text)}
                value={numero2}
            />
            <View style={styles.buttonit}>
                <Button title="+" onPress={() => calculate('+')}></Button>
                <Button title="-" onPress={() => calculate('-')}></Button>
                <Button
                    title="Historia"
                    onPress={() =>
                        navigation.navigate('Historia', { historia: historia })
                    }
                ></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },
    head: {
        fontSize: 20,
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 5,
        margin: 5,
        width: '50%',
    },
    buttonit: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        padding: 5,
        margin: 5,
    },
})
