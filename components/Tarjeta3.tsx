import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Tarjeta3( props: any) {
  return (
    <View>
      <Text>{props.datos.gender}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})