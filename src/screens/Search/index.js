import React, { useEffect, useState, useCallback } from "react";
import { View, SafeAreaView } from "react-native";
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import SearchBar from "../../components/searchbar";
import MovieCard from "../../components/movieCard";
import getMovs from "../../networks/getAllMovs";
import { __ } from "lodash";
import { storeMovieAction } from "../../store/action";
import HeaderElement from "../../components/header";

export default function Search() {
    const [value, setval] = useState('');
    const [movs, setmovs] = useState([]);
    let reduxMovies = useSelector((movie)=> movie);
    let dispatch = useDispatch();

    const getData = useCallback(
        _.debounce(async value => {
            const res = await getMovs(value);
            setmovs(res);
        }),
        [],
    );

    // function to follow the change in my textbox

    async function changeText(val) {
        setval(val);
        await getData(val);
    }

    // when writing in the textbox searching for movs

    async function searchFunc(){
        const res = await getMovs(value);
        setmovs(res)
    }

    // pressing on the movie card

   function pressMoviefunc(value){
       dispatch(storeMovieAction(value));
       console.log(value);
    }

    useEffect(() => {
        setmovs([]);
    }, [value])
    console.log(movs);
    console.log("hello");

    return (
        <>
            <SafeAreaView style={styles.container}>
                <SearchBar
                    value={value}
                    onChange={(val) => changeText(val)}
                    onPress={() => searchFunc()} />
                    <Header text={!data ? 'Recent Searches' : 'Search Result'} />

                <View>
                    <MovieList
                        data={movs && value !== '' ? movs : reduxMovies}
                        onPress={value => pressMoviefunc(value)}
                    />
                </View>
            </SafeAreaView>
        </>
    )
}