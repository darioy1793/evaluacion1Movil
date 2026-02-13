import React from 'react'
import { StyleSheet, View } from 'react-native'

export const Pantalla1 = () => {
  return (
   <View style={styles.container}>
        <View ></View> 
         <View style={styles.boxBlue}></View>
        <View style={styles.boxOrage}></View>
        <View style={styles.boxRed}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#1C5682',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    boxBlue:{
        backgroundColor: 'blue',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        
        
        
    },
    boxOrage:{
        backgroundColor: 'orange',
        width: 100,
        height: 650,
        borderWidth: 10,
        borderColor: 'white',
        
       
    }
    ,
    boxRed:{
        backgroundColor: 'red',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        
       
    }
})

