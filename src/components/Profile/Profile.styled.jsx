import styled from '@emotion/styled'

export const Profiles = styled.div`
    position: relative;
    background-color: ${props => props.theme.colors.background};
    height: 450px;
    width: 300px;
    border-radius: 5px;
    box-shadow: 3px 3px 3px grey;
    margin-left: auto;
    margin-right: auto;
    margin-top: ${props => props.theme.space[4]}px;
`;

export const Avatar = styled.img`
    display: block;
    border-radius: 100%;
    width: 150px;
    height: 150px;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    padding-top: ${props => props.theme.space[4]}px;
`;

export const Name = styled.p`
    text-align: center;
    font-size: ${props => props.theme.fontSizes.xl};
    font-weight: ${props => props.theme.fontWeights.normal};
    margin-top: ${props => props.theme.space[4]}px;
    margin-bottom: ${props => props.theme.space[4]}px;
`;

export const Tag = styled.p`
    text-align: center;
    font-size: ${props => props.theme.fontSizes.s};
    color: ${props => props.theme.colors.special};
    font-weight: ${props => props.theme.fontWeights.normal};
`;

export const Location = styled.p`
    text-align: center;
    font-size: ${props => props.theme.fontSizes.s};
    color: ${props => props.theme.colors.special};
    font-weight: ${props => props.theme.fontWeights.normal};
    margin-bottom: ${props => props.theme.space[5]}px;
`;

export const Stats = styled.ul`
    position: absolute;
    background-color: ${props => props.theme.colors.special};
    list-style: none;
    display: flex;
    justify-content: center;
    margin: ${props => props.theme.space[0]}px;
    padding: ${props => props.theme.space[0]}px;
    width: 100%;
    border-radius: 0 0 5px 5px;
    bottom: 0;
`;

export const Statsitem = styled.li`
    width: 100px;
    height: 100px;
    border-top: 1px solid ${props => props.theme.colors.accent};
        &:nth-of-type(2):
        border-left: 1px solid ${props => props.theme.colors.accent};
        border-right: 1px solid ${props => props.theme.colors.accent};
`;

export const Label = styled.span`
    display: block;
    font-size: ${props => props.theme.fontSizes.xs};
    text-align: center;
    margin: ${props => props.theme.space[4]}px 0 0 0;
    padding: ${props => props.theme.space[0]}px;
`;

export const Quantity = styled.span`
    display: block;
    font-size: ${props => props.theme.fontSizes.xs};
    text-align: center;
    margin: ${props => props.theme.space[3]}px 0 0 0;
    font-weight: ${props => props.theme.fontWeights.bold};
`;