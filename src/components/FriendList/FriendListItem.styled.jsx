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

export const Item = styled.li`
    display: flex;
    height: 50px;
    width: 250px;
    align-items: center;
    background-color: #fff;
    margin-bottom: 15px;
    padding: 10px;
    border-radius: 2px;
    box-shadow: 2px 2px 2px 2px grey;
    margin-left: auto;
    margin-right: auto;
`;

export const Name = styled.p`
    font-size: 24px;
    font-weight: 500;
    margin: 0 0 0 10px;
`;