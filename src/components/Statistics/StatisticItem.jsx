import css from './StatisticItem.module.css'
const randomColor = require('randomcolor'); 

export default function StatisticItem({ label, percentage }) {
    let color = randomColor();
    return (<li className={css.item} style={{ backgroundColor: color, width: "100%", height: '100%',}}>
        <span className={css.label}>{label}</span>
        <span className={css.percentage}>{percentage}%</span>
    </li>
    );
};