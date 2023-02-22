import {
    ApiPaginatedResponse,
    CompletePokemon,
    SimplePokemon,
} from '../../../api/PokemonApi';
import _ from 'lodash';

export const isPaginatedResponse = (
    data: any,
): data is ApiPaginatedResponse<SimplePokemon> => !!data.results;

export const getPokemonId = ({ url }: { url: string }) => {
    const pokemonUrlParts = url.split('/');
    return pokemonUrlParts[pokemonUrlParts.length - 2];
};

export const parsePokemonResponse = ({
    data,
}: {
    data: ApiPaginatedResponse<SimplePokemon> | CompletePokemon | undefined;
}) => {
    if (data) {
        if (isPaginatedResponse(data)) {
            return data?.results.map((pokemon) => ({
                ...pokemon,
                name: _.capitalize(pokemon.name),
                id: getPokemonId({ url: pokemon.url }),
            }));
        } else {
            return [
                {
                    ...data,
                    name: _.capitalize(data.name),
                },
            ];
        }
    } else {
        return data;
    }
};

export const getItemCount = ({
    data,
}: {
    data: ApiPaginatedResponse<SimplePokemon> | CompletePokemon | undefined;
}) => {
    if (data) {
        if (isPaginatedResponse(data)) {
            return data.count;
        } else {
            return 1;
        }
    } else {
        return undefined;
    }
};
