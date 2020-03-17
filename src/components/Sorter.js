import React from 'react';
import {View, Text} from 'react-native';
import Global from '../Global';

export default function Sorter({route}) {
  const {qtd} = route.params;
  const numbers = Array(qtd || 6).fill(0);

  for(let i = 0; i < numbers.length; i++) {
    let num = 0;
    while(numbers.includes(num)) {
      num = Math.floor((Math.random() * 60) + 1);
    }
    numbers[i] = num;
  }
  numbers.sort((a, b) => a - b);

  return(
    <View style={Global.box}>
      <Text style={Global.text}>{numbers.join(', ')}</Text>
    </View>
  );
}