import styled from '@emotion/styled'

export const Item = styled.li`
    display: block;
    margin-left: auto;
    margin-right: auto;
`;

export const Label = styled.span`
    display: block;
    font-size: ${props => props.theme.fontSizes.xs};
    padding-bottom: ${props => props.theme.space[2]}px;
    padding-top: ${props => props.theme.space[5]}px;
    text-align: center;
`;

export const Percentage = styled.span`
    display: block;
    font-size: ${props => props.theme.fontSizes.xs};
    font-weight: ${props => props.theme.fontWeights.bold};
    text-align: center;
    padding-bottom: ${props => props.theme.space[5]}px;
`;