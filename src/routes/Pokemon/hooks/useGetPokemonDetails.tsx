import { useQuery } from 'react-query';
import { PokemonApi } from '../../../api/PokemonApi';

export const useGetPokemonDetails = ({ id }: { id: string }) => {
    const { isLoading, data, error } = useQuery({
        queryKey: ['pokemon', id],
        queryFn: ({ queryKey, signal }) => {
            const queryKeyTypeFix = queryKey as [string, string];
            return PokemonApi.getPokemons({
                queryKey: queryKeyTypeFix,
                signal,
            });
        },
    });

    return { isLoading, data, error };
};
