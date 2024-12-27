import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList, TextInput } from 'react-native-gesture-handler';
import Tarjeta3 from '../components/Tarjeta3';

export default function Pagina7Screen() {
    const [datos, setdatos] = useState()
    const [filtro, setfiltro] = useState("")
    const [filtrados, setfiltrados] = useState("")

    useEffect(() => {
        async function leer(){
            const resp = await fetch('https://randomuser.me/api/?results=20');
            const json = await resp.json();
            setdatos(json.results);
        }
        leer()
        console.log(datos);        
        
    }, [])

    
    


  return (
    <View>
        <TextInput
            placeholder='Ingresar genero'
            onChangeText={(text)=> setfiltro(text)}
        />
       <FlatList 
        data = {datos}
        renderItem={ ({item}) => 
          <Tarjeta3  datos ={item}/>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({})