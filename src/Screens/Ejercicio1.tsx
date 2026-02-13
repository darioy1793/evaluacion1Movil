        import React from 'react';
import { Text } from 'react-native';
import { StyleSheet, View } from 'react-native';
export const Ejercicio1 = () => {
    const arreglo: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  


const numImpares = arreglo.map((num: number) => {
        if (num % 2 !== 0) {
            return num;
        }
    });

    return (
        <View style={styles.container}>
                <Text style={styles.boxblu}>Arreglo 1:</Text>
                <Text style={styles.boxblu}>{arreglo.join(" , ")}</Text>

                <Text style={styles.boxblu}>Numeros pares:</Text>
                <Text style={styles.boxblu}>{numImpares.join("  ")}</Text>

                <Text style={styles.boxblu}>Numeros impares:</Text>
                <Text style={styles.boxblu}>{numImpares.join("  ")}</Text>
        </View>
    )
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#15977b',
        justifyContent:'center',
        alignItems:'center'
    },
    boxblu:{
        fontSize:30
    }
})
