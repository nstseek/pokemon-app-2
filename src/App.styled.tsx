import styled, { CSSObject } from '@emotion/styled';

export const Wrapper = styled.div(
    (): CSSObject => ({
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
    }),
);

export const Header = styled.div(
    (): CSSObject => ({
        backgroundColor: 'black',
        width: '100%',
        padding: 12,
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }),
);
