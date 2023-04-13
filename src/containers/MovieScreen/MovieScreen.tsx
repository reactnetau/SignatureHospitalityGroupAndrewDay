import React, { useEffect, useState } from 'react'
import { View, Text, Image, ViewStyle, StyleProp, ImageStyle, TextProps } from 'react-native'
import { IMovieProps, IMovieState } from '../../types/interfaces';
import styles from './MovieScreen.scss';

const MovieScreen = ({ route }: IMovieProps) => {
    const [movie, setMovie] = useState<IMovieState>();
    const { id } = route.params;
    
    const handleSearch = async () => {
        const url = `https://www.omdbapi.com/?i=${id}&apikey=e2e51b11`;
        const response = await fetch(url);
        const jsonData = await response.json();

        setMovie(jsonData);
    }

    useEffect(() => {
        handleSearch();
    }, []);
    return (
        <View>
            <Image source={{ uri: movie?.Poster }} style={styles.poster as StyleProp<ImageStyle>} />
            <View style={styles.movieContainer as StyleProp<ViewStyle>}>
                <Text style={styles.movieText as Readonly<TextProps>}>Year {movie?.Year}</Text>
                <Text style={styles.movieText as Readonly<TextProps>}>Direction {movie?.Director}</Text>
            </View>
            <Text style={styles.movieText as Readonly<TextProps>}>{movie?.Plot}</Text>
        </View>
    )
}

export default MovieScreen