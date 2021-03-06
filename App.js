import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SimpleText from './src/components/SimpleText';
import PairOdd from './src/components/PairOdd';
import Inverse from './src/components/Inverse';
import Sorter from './src/components/Sorter';
import Counter from './src/components/Counter';
import Notification from './src/components/Notification';
import Event from './src/components/Event';
import GrandFather from './src/components/DirectComunication';
import SyncText from './src/components/IndirectComunication';
import FlexList from './src/components/FlexList';
import Flex from './src/components/Flex';

const Drawer = createDrawerNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Texto Simples">
        <Drawer.Screen name="Texto Simples" component={SimpleText} initialParams={{text: 'Hello World!!!'}}/> 
        <Drawer.Screen name="Par OU Ímpar" component={PairOdd} initialParams={{number: 20}}/> 
        <Drawer.Screen name="Inverter" component={Inverse} initialParams={{text: 'Hello World'}}/>
        <Drawer.Screen name="Sorteador" component={Sorter} initialParams={{qtd: 7}}/>
        <Drawer.Screen name="Contador" component={Counter} initialParams={{number: 5}}/>
        <Drawer.Screen name="Notificação" component={Notification}/>
        <Drawer.Screen name="Evento" component={Event}/>
        <Drawer.Screen name="Comunicação Direta" component={() => <GrandFather nome='Lucio' sobrenome='Fraga'/>}/>
        <Drawer.Screen name="Comunicação Indireta" component={SyncText}/>
        <Drawer.Screen name="Lista Flex" component={FlexList}/>
        <Drawer.Screen name="Flexbox" component={Flex}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

/*
export default createDrawerNavigator({
  SimpleText: {
    screen: () => {<SimpleText text="Hello World!"/>},
    navigationOptions: {
      title: 'Texto Simples'
    }
  },
  PairOdd: {
    screen: () => {<PairOdd number={10}/>},
    navigationOptions: {
      title: 'Par OU Ímpar'
    }
  }
});*/