import React from 'react';
import {View, Text} from 'react-native';
import Global from '../Global';

export default function Inverse({route}) {
  const {text} = route.params;
  const inverse = text.split('').reverse().join('');
  return(
    <View style={Global.box}>
      <Text style={Global.text}>{text} = {inverse}</Text>
    </View>
  );
}