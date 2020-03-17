import React from 'react';
import {Text, View} from 'react-native';
import Global from '../Global';

export default function SimpleText ({route}) { 
  const {text} = route.params;
  return(
    <View style={Global.box}>
      <Text style={Global.text}>{text}</Text>
    </View>
  );
}
