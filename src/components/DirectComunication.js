import React from 'react';
import {View, Text} from 'react-native';

const font = {style: {fontSize: 30}};

function passProps(props) {
  return React.Children.map(props.children,
      c => React.cloneElement(c, { ...props, ...c.props }))
}

export const Child = props => 
  <View>
    <Text {...font}>Filho: {props.nome} {props.sobrenome}</Text>
  </View>

export const Father = props => 
<View>
  <Text {...font}>Pai: {props.nome} {props.sobrenome}</Text>
  {passProps(props)}
</View>

export const GrandFather = props => 
<View>
  <Text {...font}>Avô: {props.nome} {props.sobrenome}</Text>
  <Father nome='Márcio' sobrenome={props.sobrenome}>
    <Child nome='Lucas' />
    <Child nome='Bruno' />
  </Father>
  <Father {...props} nome='Luciana'>
    <Child nome='Rafael' />
  </Father>
</View>

export default GrandFather;