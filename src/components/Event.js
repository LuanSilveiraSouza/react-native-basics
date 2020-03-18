import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import Global from '../Global';

export default function Event (){

  const [text, setText] = useState('');

  changeText = text => {
    setText(text);
  }

  return(
    <View style={Global.box}>
      <Text style={Global.text}>{text}</Text>
      <TextInput style={Global.text} value={text} onChangeText={changeText}/>
    </View>
  );
}