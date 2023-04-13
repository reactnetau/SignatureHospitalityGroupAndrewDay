import React from 'react'
import { View, FlatList } from 'react-native'
import { IMovieList } from '../../types/interfaces'
import MovieItem from '../MovieItem/MovieItem'

const MovieList = ({ movies }: IMovieList) => {
    return (
            <View>
                { movies && (
                    <FlatList
                        numColumns={2}
                        data={movies}
                        renderItem={({item}) => <MovieItem movie={item} />}
                    />
                )}
            </View>
    )
}

export default MovieList