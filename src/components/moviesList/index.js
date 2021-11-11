import React from 'react';
import {FlatList} from 'react-native';
import MovieCard from '../movieCard';
import style from './style';


export default function MovieList({data, containerStyle, onPress}){
    function rendermovs(movie){
        return <MovieCard data={movie} onPress={() => onPress(movie)} />
    }
  return (
    <FlatList
      data={data}
      renderItem={rendermovs}
      contentContainerStyle={[style.contentContainer, containerStyle]}
      showsVerticalScrollIndicator={false}
    />
  );

}



export {MovieList};
