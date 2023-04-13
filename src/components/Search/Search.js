import React, { useState } from 'react'
import { View, TextInput, Button } from 'react-native';
import styles from './Search.scss';

const Search = ({ setMovies }) => {
    const [searchField, setSearchField] = useState('');
    const handleSearch = async () => {
        const response = await fetch(`https://www.omdbapi.com/?s=${searchField}&apikey=e2e51b11`);
        const jsonData = await response.json();

        if (Array.isArray(jsonData.Search)) {
            setMovies(jsonData.Search);
        } else {
            setMovies([jsonData.Search]);
        }
    }
    return (
        <View style={styles.searchField}>
            <TextInput placeholder='Search...' onChangeText={setSearchField}/>
            <View style={styles.searchButton}>
                <Button title='Search' onPress={() => handleSearch()}/>
            </View>
        </View>
    )
}

export default Search