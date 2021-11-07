import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import styles from './styles';
import SearchBar from "../../components/searchbar";
import MovieCard from "../../components/movieCard";

export default function Search(){
   const [value,setval] = useState('');

    return(
        <>
        <SafeAreaView style={styles.container}>
            <SearchBar 
            value = {value}
            onChange = {(val)=> setval(val)}
            onPress = {()=> alert("wow")} />
            <MovieCard />
        </SafeAreaView>
        </>
    )
}