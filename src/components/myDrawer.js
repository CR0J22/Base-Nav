//importações padrão
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import {  DrawerItem } from '@react-navigation/drawer';



export function DrawerContent(props){
    return(

        //Isso tudo é o drawer
        <View style={{backgroundColor:'#ffffff', height: '100%'}}>
            <View style={{
                borderBottomColor: '#440000',
                borderBottomWidth: 1,
                width: '85%',
                flexDirection:'row',
                justifyContent: 'center', 
                alignItems: 'center', 
                margin: 20,
                top:15
            }}>
                
                <Text style={styles.cabecalho}>Base Nav</Text> 
                <Image 
                    style={{width: 70, height: 70}} 
                    source={require('../assets/icon.png')}
                />
                
            </View>
            <View style={{top:30, justifyContent: 'center', alignItems: 'center'}}>
                
            <DrawerItem 
                    style={styles.drawItem}
                    label="Inicio"
                    labelStyle={styles.label}
                    onPress={() => {props.navigation.navigate('Inicio')}}
                />
                
                <DrawerItem 
                    style={styles.drawItem}
                    label="Ajude nos"
                    labelStyle={styles.label}
                    onPress={() => {props.navigation.navigate('Doe')}}
                />
                
            </View>

         
            

        </View>
    )
}

const styles = StyleSheet.create({
    cabecalho:{

        borderRadius: 0,
        height: 100,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: 'NovaMono_400Regular',
        color: '#000000',
        fontSize: 30,
    },
    drawItem: {
        
        width: '90%',
        borderColor: '#530101',
        borderBottomWidth:1,
        borderRadius: 0,
        height: 55,
        fontFamily: 'NovaMono_400Regular',
        fontSize: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    label: {
        fontFamily: 'NovaMono_400Regular',
        fontSize: 22,
        color: '#000000',
        textAlign: 'center',
        textAlignVertical: 'center',
        
    },
    image: {
        width: 60,
        height: 60, 
        borderRadius: 90,
        
        
    },
    
})