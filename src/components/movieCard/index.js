import React from "react";
import { Text, View, ViewBase } from "react-native";
import style from './styles';
export default function MovieCard(){

    return(
        <>
        <View style={style.Card}>
            <View style={style.imgCard}>
                
            </View>
            <View style={style.txtCard}>
                <Text style={style.title}>
                    {"Anything"}
                </Text>
                <Text style={style.subtitle}>
                    {"Anything"}
                </Text>
            </View>
        </View>
        </>
    )
}