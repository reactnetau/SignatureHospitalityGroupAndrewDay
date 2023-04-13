import React from 'react'
import { Text, Image, Pressable, StyleProp, ViewStyle, TextProps, ImageStyle } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { CreateNavigationProp, IMovie, } from '../../types/interfaces';
import styles from './MovieItem.scss';

const MovieItem = ({ movie } :IMovie ) => {
    const navigation = useNavigation<CreateNavigationProp>();
    const id = movie.imdbID;

    return (
        <Pressable style={styles.item as StyleProp<ViewStyle>} onPress={() => navigation.navigate("Movie", { id, name: movie.Title })}>
            <Image source={{ uri: movie.Poster }} style={styles.image as StyleProp<ImageStyle>} />
            <Text style={styles.text as Readonly<TextProps>}>{movie.Title}</Text>
            <Text style={styles.text as Readonly<TextProps>}>{movie.Year}</Text>
        </Pressable>
    )
}

export default MovieItem