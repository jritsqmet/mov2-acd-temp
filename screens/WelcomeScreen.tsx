import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

export default function WelcomeScreen( {navigation}: any ) {
  return (
    <View style ={styles.container}>
      <TouchableOpacity onPress={()=> navigation.navigate("Drawer")}>
        <Image 
        source = {require ("../assets/images/puerta.png")}   
        style={styles.img}
        />
        <Text style={{fontSize:35}}>INGRESAR</Text>

      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: "#b88f7a"
  },
  img:{
    width :100,
    height:100
  }
})