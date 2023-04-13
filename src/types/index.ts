import { RouteProp } from "@react-navigation/native";

export type RootNavigatorParamList = {
    Movies: undefined;
    Movie: {id: string, name: string};
};

export type MovieRouteProp = RouteProp<RootNavigatorParamList, 'Movie'>;
