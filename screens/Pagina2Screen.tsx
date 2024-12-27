import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'


export default function Pagina2Screen() {
  const usuarios =[
    {
      nombre: "Juan Paz",
      edad:23
    },
    {
      nombre: "Ana Cruz",
      edad:19
    },
    {
      nombre: "Jose Guerra",
      edad:25
    },

  ]


  return (
    <View>
      <Text style={{ fontSize: 40, textAlign:'center'}} >USUARIOS</Text>
      <FlatList 
        data = {usuarios}
        renderItem= { ( {item} ) =>
          <View>
              <Text>{item.nombre}</Text>
              <Text>{item.edad}</Text>
          </View>
          
          
        }

      />
    </View>
  )
}

const styles = StyleSheet.create({})