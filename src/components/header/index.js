import React from 'react';
import {View, Text} from 'react-native';
import style from './style';


export default function HeaderElement(text){
    return (
        <View style={style.container}>
          <Text style={style.headerTxt}>{text}</Text>
          <View style={style.line} />
        </View>
      );
}
