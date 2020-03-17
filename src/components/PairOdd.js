import React from 'react';
import {View, Text} from 'react-native';
import Global from '../Global';

function isPair(number) {
  const result = number % 2 == 0 ? 'Par' : 'Ímpar';
  return <Text style={Global.text}>{number} é {result}</Text>
}

export default function PairOdd ({route}) {
  const {number} = route.params;
  return(
    <View style={Global.box}>
      {isPair(number)}
    </View>
  );
} 