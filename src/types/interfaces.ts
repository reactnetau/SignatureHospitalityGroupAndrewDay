import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootNavigatorParamList } from ".";

export interface IMovieList {
    movies: [];
}

export interface IMovie {
    movie: {
        Poster: string;
        imdbID: string;
        Title: string;
        Year: string;
    },
}

export interface IMovieProps {
    route: { params: { id: string, name: string }};
}

export interface IMovieState {
    Poster: string;
    Year: string;
    Director: string;
    Plot: string;
}

export type CreateNavigationProp = NativeStackNavigationProp<
  RootNavigatorParamList,
  'Movie'
>;