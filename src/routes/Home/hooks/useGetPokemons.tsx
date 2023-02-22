import { useEffect, useMemo, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { PokemonApi } from '../../../api/PokemonApi';
import { getItemCount, parsePokemonResponse } from './useGetPokemons.model';

export const useGetPokemons = () => {
    const [filter, setFilter] = useState('');
    const [actualPage, setActualPage] = useState(0);
    const [pageSize, setPageSize] = useState(25);

    const queryClient = useQueryClient();

    const { isLoading, data, error } = useQuery({
        queryKey: ['pokemon', filter, actualPage, pageSize],
        queryFn: ({ queryKey, signal }) => {
            queryClient.cancelQueries(queryKey);
            return PokemonApi.getPokemons({
                queryKey,
                signal,
            });
        },
    });

    const parsedData = useMemo(() => {
        return parsePokemonResponse({ data });
    }, [data]);

    const itemCount = useMemo(() => {
        return getItemCount({ data });
    }, [data]);

    useEffect(() => {
        setActualPage(0);
    }, [pageSize]);

    return {
        isLoading,
        data: parsedData,
        error,
        filter,
        setFilter,
        itemCount,
        pageSize,
        setPageSize,
        actualPage,
        setActualPage,
    };
};
