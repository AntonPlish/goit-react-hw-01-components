import styled from '@emotion/styled'

export const StatisticsList = styled.section`
    margin: 0 ${props => props.theme.space[4]}px 0 ${props => props.theme.space[4]}px;
    background-color: ${props => props.theme.colors.background};
    width: 500px;
    margin-left: auto;
    margin-right: auto;
    margin-top: ${props => props.theme.space[4]}px;
`;

export const Statlist = styled.ul`
    display: flex;
    list-style: none;
    padding: ${props => props.theme.space[0]}px;
    align-items: center;
    justify-content: center;
    margin: ${props => props.theme.space[0]}px;
`;

export const Title = styled.h2`
    text-align: center;
    text-transform: uppercase;
    font-size: ${props => props.theme.fontSizes.l};
    padding: ${props => props.theme.space[5]}px 0 ${props => props.theme.space[5]}px 0;
    margin: ${props => props.theme.space[0]}px;
`;