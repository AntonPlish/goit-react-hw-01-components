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
margin-right: 10px;
`;