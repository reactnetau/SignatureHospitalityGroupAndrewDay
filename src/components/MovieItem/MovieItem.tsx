import React from 'react'
import { Text, Image, Pressable, StyleProp, ViewStyle, TextProps } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { IMovie } from '../../types/interfaces';
import styles from './MovieItem.scss';

const MovieItem = ({ movie } :IMovie ) => {
    const navigation = useNavigation();
    const id = movie.imdbID;

    console.log(id);
    return (
        <Pressable style={styles.item as StyleProp<ViewStyle>} onPress={() => navigation.navigate("Movie", { id, name: movie.Title })}>
            <Image source={{ uri: movie.Poster }} style={{width: '100%', aspectRatio: 1}} />
            <Text style={styles.text as Readonly<TextProps>}>{movie.Title}</Text>
            <Text style={styles.text as Readonly<TextProps>}>{movie.Year}</Text>
        </Pressable>
    )
}

export default MovieItem