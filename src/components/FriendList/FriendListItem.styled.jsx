import styled from '@emotion/styled'

const setBgColor = props => {
    switch (props.isOnline) {
        case true:
            return 'green';
        case false:
            return 'red';
        default:
            //do nothing
    };
};

export const Chip = styled.span`
display: block;
width: 20px;
height: 20px;
border-radius: 100%;
background-color: ${setBgColor};
margin-right: ${props => props.theme.space[3]}px;
`;

export const Item = styled.li`
    display: flex;
    height: 50px;
    width: 250px;
    align-items: center;
    background-color: ${props => props.theme.colors.background};
    margin-bottom: ${props => props.theme.space[4]}px;
    padding: ${props => props.theme.space[3]}px ${props => props.theme.space[4]}px ${props => props.theme.space[3]}px ${props => props.theme.space[4]}px;
    border-radius: 2px;
    box-shadow: 2px 2px 2px 2px grey;
    margin-left: auto;
    margin-right: auto;
`;

export const Name = styled.p`
    font-size: ${props => props.theme.fontSizes.m};
    font-weight: ${props => props.theme.fontWeights.normal};
    margin: 0 0 0 ${props => props.theme.space[3]}px;
`;