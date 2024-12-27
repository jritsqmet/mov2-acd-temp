import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'

export default function Pagina6Screen() {
    const [kelvin, setkelvin] = useState(0)

    const [celcius, setcelcius] = useState(0)
    const [farh, setfarh] = useState(0)

    useEffect(() => {
        if( celcius>100){
            Alert.alert("⚠️⚠️Mensaje⚠️⚠️", "Ha superado la temperatura máxima")
        }
      
    }, [celcius])
    

    function calcular() {
        setcelcius( kelvin - 273.15 )
        setfarh( ( ( (kelvin-273.15)* 9) /5) +32  )
    }

    return (
        <View style={styles.container}>
            <Text>Pagina6Screen</Text>
            <TextInput
                placeholder='Ingresar temperatura'
                keyboardType='numeric'
                style={{ fontSize: 30, height: 50, width: "70%" }}
                onChangeText={(texto) => setkelvin(+texto)}
            />
            <Button title='Calcular' color={'green'} onPress={()=> calcular() }/>

            <View
                style={styles.linea}
            />

            <Text style={styles.txtRespuesta}>Temperatura en Celcius: {celcius}</Text>
            <Text style={styles.txtRespuesta}>Temperatura en farenheit: {farh}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    linea: {
        width: "90%",
        height: 5,
        margin: 10,
        backgroundColor: 'black',
    },
    container: {
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: '#6666',
        flex:1
    },
    txtRespuesta:{
        fontSize:25
    }
})