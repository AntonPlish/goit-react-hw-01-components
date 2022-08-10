import styled from '@emotion/styled'

export const TansactionTable = styled.table`
    font-size: ${props => props.theme.fontSizes.xs};
    text-align: center;
    width: 500px;
    padding: ${props => props.theme.space[3]}px ${props => props.theme.space[3]}px ${props => props.theme.space[3]}px ${props => props.theme.space[3]}px;
    margin-left: auto;
    margin-right: auto;
    margin-top: ${props => props.theme.space[4]}px;
    margin-bottom: ${props => props.theme.space[4]}px;
`;

export const Tabletr = styled.tr`
    background-color: ${props => props.theme.colors.specailAccent};
`;

export const Tableth = styled.th`
    padding: ${props => props.theme.space[3]}px ${props => props.theme.space[3]}px ${props => props.theme.space[3]}px ${props => props.theme.space[3]}px;
`;