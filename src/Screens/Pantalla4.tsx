import React from 'react'
import { StyleSheet, View } from 'react-native'

export const Pantalla4 = () => {
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
        alignItems: 'center',
    },
    boxBlue:{
        backgroundColor: 'blue',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        top: 0,
        left: 0,
        
        
        
    },
    boxOrage:{
        backgroundColor: 'orange',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        alignSelf: 'center',
        
       
    }
    ,
    boxRed:{
        backgroundColor: 'red',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0,
        right: 0,
        
       
    }
})

