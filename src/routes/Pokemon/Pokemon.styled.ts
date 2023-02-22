import styled, { CSSObject } from '@emotion/styled';

export const Wrapper = styled.div(
    (): CSSObject => ({
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        padding: 13,
    }),
);
