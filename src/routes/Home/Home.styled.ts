import styled, { CSSObject } from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div(
    (): CSSObject => ({
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
    }),
);

export const SearchBarContainer = styled.div(
    (): CSSObject => ({
        display: 'flex',
        padding: 13,
        width: '100%',
        justifyContent: 'center',
        gap: 55,
    }),
);

export const PokemonList = styled.div(
    (): CSSObject => ({
        display: 'flex',
        flexWrap: 'wrap',
        padding: 13,
        width: '100%',
        gap: 13,
    }),
);

export const PokemonLink = styled(Link)(
    (): CSSObject => ({
        padding: 13,
        minWidth: 120,
        color: 'black',
        borderRadius: 5,
        textDecoration: 'none',
        backgroundColor: 'lightgray',
    }),
);
