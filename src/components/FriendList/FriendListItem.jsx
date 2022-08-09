import css from './FriendListItem.module.css'
import { Chip } from './FriendListItem.styled'

export default function StatisticItem({ avatar, name, isOnline }) {
    return (<li className={css.item}>
        <Chip className={css.status} isOnline={isOnline}></Chip>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
    </li>
    );
};