import React from "react";
import { Pressable, TextInput, View } from "react-native";
import styles from "./styles";
import { Icon } from "react-native-vector-icons/Entypo";
import { COLORS } from "../../common";

// controlled component :- doesn't mentain its own state and gets every thing from parent
export default function SearchBar(value , onChange,onPress) {

    return (
        <>
            <View style={styles.container}>
                <TextInput style={styles.textInput} placeholder="Enter  Movie name ..." placeholderTextColor={COLORS.sun} value={value} onChangeText={onChange} />
                <Pressable onPress={onPress}>
                    <View style={styles.iconContainer}>
                    <Icon name="magnifying-glass" size={30} color={COLORS.sun} />
                    </View>
                </Pressable>

            </View>

        </>
    )
}