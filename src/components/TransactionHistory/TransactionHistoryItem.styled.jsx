import styled from '@emotion/styled'

export const Tabletd = styled.td`
    padding: ${props => props.theme.space[2]}px ${props => props.theme.space[7]}px ${props => props.theme.space[2]}px ${props => props.theme.space[7]}px;
`;

export const Tabletr = styled.tr`
    background-color: ${props => props.theme.colors.background};
    &:nth-of-type(even) {
        background: ${props => props.theme.colors.lightaccent};
    }
`;