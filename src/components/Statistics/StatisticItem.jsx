import { Item, Label, Percentage } from './StatisticItem.styled';
const randomColor = require('randomcolor'); 

export default function StatisticItem({ label, percentage }) {
    let color = randomColor();
    return (<Item style={{ backgroundColor: color, width: "100%", height: '100%',}}>
        <Label>{label}</Label>
        <Percentage>{percentage}%</Percentage>
    </Item>
    );
};