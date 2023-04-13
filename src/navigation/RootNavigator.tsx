import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigatorParamList } from '../types';
import MoviesScreen from '../containers/MoviesScreen/MoviesScreen';
import MovieScreen from '../containers/MovieScreen/MovieScreen';

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Movies'>
                <Stack.Screen name="Movies" component={MoviesScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Movie" component={MovieScreen} options={({ route }) => ({ title: route.params.name })} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;