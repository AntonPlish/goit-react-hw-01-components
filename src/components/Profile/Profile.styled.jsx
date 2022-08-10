import styled from '@emotion/styled'

export const Profiles = styled.div`
    position: relative;
    background-color: white;
    height: 450px;
    width: 300px;
    border-radius: 5px;
    box-shadow: 3px 3px 3px grey;
    margin-left: auto;
    margin-right: auto;
    margin-top: 25px;
`;

export const Avatar = styled.img`
    display: block;
    border-radius: 100%;
    width: 150px;
    height: 150px;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    padding-top: 20px;
`;

export const Name = styled.p`
    text-align: center;
    font-size: 32px;
    font-weight: 500;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const Tag = styled.p`
    text-align: center;
    font-size: 20px;
    color: rgb(79, 79, 79);
    font-weight: 500;
`;

export const Location = styled.p`
    text-align: center;
    font-size: 20px;
    color: rgb(79, 79, 79);
    font-weight: 500;
    margin-bottom: 30px;
`;

export const Stats = styled.ul`
    position: absolute;
    background-color: rgb(176, 176, 176);
    list-style: none;
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    width: 100%;
    border-radius: 0 0 5px 5px;
    bottom: 0;
`;

export const Statsitem = styled.li`
    width: 100px;
    height: 100px;
    border-top: 1px solid grey;
        &:nth-of-type(2):
        border-left: 1px solid grey;
        border-right: 1px solid grey;
`;

export const Label = styled.span`
    display: block;
    font-size: 18px;
    text-align: center;
    margin: 20px 0 0 0;
    padding: 0;
`;

export const Quantity = styled.span`
    display: block;
    font-size: 18px;
    text-align: center;
    margin: 10px 0 0 0;
    font-weight: 700;
`;