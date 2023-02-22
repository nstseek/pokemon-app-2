import { CircularProgress, TablePagination, TextField } from '@mui/material';
import React from 'react';
import {
    PokemonLink,
    PokemonList,
    SearchBarContainer,
    Wrapper,
} from './Home.styled';
import { useGetPokemons } from './hooks/useGetPokemons';

export const Home: React.FC = () => {
    const {
        isLoading,
        data,
        filter,
        setFilter,
        actualPage,
        pageSize,
        itemCount = 0,
        setPageSize,
        setActualPage,
    } = useGetPokemons();

    return (
        <Wrapper>
            <SearchBarContainer>
                <TextField
                    placeholder="Type a pokemon name or ID"
                    value={filter}
                    onChange={({ target: { value } }) => setFilter(value)}
                    style={{ width: 300 }}
                />
                <TablePagination
                    component="div"
                    count={itemCount}
                    page={actualPage}
                    onPageChange={(_, page) => setActualPage(page)}
                    rowsPerPage={pageSize}
                    onRowsPerPageChange={({ target: { value } }) =>
                        setPageSize(Number(value))
                    }
                />
            </SearchBarContainer>
            <PokemonList>
                {isLoading && <CircularProgress style={{ margin: 'auto' }} />}
                {!isLoading &&
                    data?.map(({ name, id }) => (
                        <PokemonLink key={id} to={`/pokemon/${id}`}>
                            {name}
                        </PokemonLink>
                    ))}
            </PokemonList>
        </Wrapper>
    );
};
