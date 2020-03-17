import React, {useState} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import Global from '../Global';

export default function Counter({route}) {

  const [number, setNumber] = useState(route.params.number);

  function add(){
    setNumber(number + 1);
  }

  function reset() {
    setNumber(route.params.number);
  }

  return(
    <View style={Global.box}>
      <Text style={Global.text}>{number}</Text>
      <TouchableHighlight 
        style={Global.button}
        onPress={add}
        onLongPress={reset}
      >
        <Text>Incrementar / Resetar</Text>
      </TouchableHighlight>
    </View>
  );
}