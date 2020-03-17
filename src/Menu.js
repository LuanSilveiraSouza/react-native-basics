import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SimpleText from './components/SimpleText';
import PairOdd from './components/PairOdd';

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
});