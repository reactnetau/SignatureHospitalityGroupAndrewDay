import React, { useState } from 'react'
import { View, StyleProp, ViewStyle } from 'react-native'
import Search from '../../components/Search/Search';
import MovieList from '../../components/MovieList/MovieList';
import styles from './MoviesScreen.scss';

const MoviesScreen = () => {
    const [movies, setMovies] = useState([]);
  return ( 
    <View style={styles.container as StyleProp<ViewStyle>}>
        <Search setMovies={setMovies} />
        <MovieList movies={movies} />
    </View>
  )
}

export default MoviesScreen