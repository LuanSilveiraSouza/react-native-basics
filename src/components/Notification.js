import React from 'react';
import {Button, View, Alert, ToastAndroid, Platform} from 'react-native';
import Global from '../Global';

export default function Notification () {
  const notify = msg => {
    if(Platform.OS == 'android') {
      ToastAndroid.show(msg, ToastAndroid.LONG);
    } else {
      Alert.alert('Notificação', msg);
    }
  }

  return(
    <View style={Global.box}>
      <Button style={Global.button} title='Notificar' onPress={() => notify('Hello World!!!')}/>
    </View>
  );
}