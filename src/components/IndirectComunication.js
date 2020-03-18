import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import Global from '../Global';

export const Input = props =>
  <View>
    <TextInput style={Global.text} value={props.text} onChangeText={callWhenChange}/>
  </View>

export default function SyncText (){

  const [text, setText] = useState('');

  changeText = text => {
    setText(text);
  }

  return(
    <View style={Global.box}>
      <Text style={Global.text}>{text}</Text>
      <Input text={text} callWhenChange={changeText}/>
    </View>
  );
}