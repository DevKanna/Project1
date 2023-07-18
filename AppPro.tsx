
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, useColorScheme } from 'react-native';

export default function AppPro() : JSX.Element{
    const isDarkmode = useColorScheme() === 'light'
    return (
        <SafeAreaView style ={styles.container}>
            {/* <View > */}
                <Text style ={isDarkmode ? styles.whiteText : styles.blackText}>
                    Dashboard...!!!!
                </Text>
            {/* </View> */}
            </SafeAreaView>  
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    whiteText:{
        color: 'red',
    },blackText:{
        color: 'black',
    }
})


