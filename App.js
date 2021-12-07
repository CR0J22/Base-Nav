import * as React from 'react';

//Fontes
import AppLoading from 'expo-app-loading';
import { useFonts, NovaMono_400Regular } from '@expo-google-fonts/nova-mono'

//Navegação
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContent } from './src/components/myDrawer';

/*Paginas*/
import Inicio from './src/pages/inicio';
import Doe from './src/pages/doe';


const Drawer = createDrawerNavigator();



export default function App() {

  let [fontsLoaded] = useFonts({
    NovaMono_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (

    //Invoca e configura a navegação e o drawer
    <NavigationContainer>
      
      <Drawer.Navigator initialRouteName={"Inicio"} drawerContent={props => <DrawerContent {...props}/>}>
        <Drawer.Screen options={{headerShown: false}} name="Inicio" component={Inicio} />
        <Drawer.Screen options={{headerShown: false}} name="Doe" component={Doe} />
      </Drawer.Navigator>  
    
  </NavigationContainer>
  );
}