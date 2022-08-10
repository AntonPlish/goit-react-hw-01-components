import styled from '@emotion/styled'

export const FriendListStyled = styled.ul`
    display: block;
    list-style: none;
    padding: ${props => props.theme.space[0]}px;
    margin-left: auto;
    margin-right: auto;
    margin-top: ${props => props.theme.space[4]}px;
`;