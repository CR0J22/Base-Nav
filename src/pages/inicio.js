import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Platform,
  
} from 'react-native';

import Lottie from 'lottie-react-native'



import Chat from '../assets/chat.json'

export default function Inicio({navigation}) {
 

  return (
      
    <View style={styles.container}>

        <View style={styles.titleCont}>
          <Text onPress={() => navigation.openDrawer()} style={styles.titleText}>Olá! 😃</Text>
        </View>
        
            <View>
                <Text style={styles.textall}>
                    Que legal te ver por aqui
                    {"\n"}Espero que tenha gostado do meu template
                    {"\n"}E que seu trabalho renda muito mais
                    {"\n"}Manda um salve para nossos devs
                    {"\n"}Flw tmj
                    <Text style={[styles.textall,{fontSize:25,color: '#fff'}]}>😁</Text>
                </Text>
               
            </View>

            <View style={{ alignSelf:'center', bottom:30}}>
                <Lottie autoSize style={{ width: 200, height: 200}}resizeMode="contain" source={Chat} autoPlay loop/>
            </View>
            
           
    </View>
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'space-between', 
    paddingTop: Platform.OS === 'android' ? 44 : 44,
    padding: 20,
    
  },
  textall:{
    fontSize: 18,
    fontFamily: 'NovaMono_400Regular',
    textAlign: 'center',
    top:5,
  },
  titleText:{
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'NovaMono_400Regular',
    fontSize: 22,
  },
  titleCont: {
    height:40,
    backgroundColor: '#530101',
    width: '100%',
    textAlign: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginBottom: 20,
  },
});