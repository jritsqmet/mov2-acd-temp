import { StyleSheet, Text, TouchableOpacity, View, Modal, Button, Image } from 'react-native'
import React, { useState } from 'react'

export default function Tarjeta2(props: any) {
    //console.log(props);
    const [visible, setvisible] = useState(false)

    return (
        <TouchableOpacity onPress={()=> setvisible(true) }>
            <Text style={{ fontSize: 30 }}>{props.datos.name.first}</Text>
            <Modal
                visible={visible}
                transparent={true}
            >
                <View style={styles.modal}>
                    <Image 
                        source={{ uri: props.datos.images.main}}
                        style={styles.img}
                    />
                    <Text style={styles.txtTitulo}>{props.datos.name.first} {props.datos.name.last}</Text>
                    <Button title='REGRESAR' onPress={() => setvisible(false)}/>

                </View>
            </Modal>

        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    modal: {
        backgroundColor: 'rgb(166,89,89)',
        flex: 1
    },
    img:{
        width:250,
        height:400,
        resizeMode:'contain'
    },
    txtTitulo:{
        fontSize:50
    }
})