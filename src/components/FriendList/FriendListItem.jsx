import { Chip, Name, Item } from './FriendListItem.styled'

export default function StatisticItem({ avatar, name, isOnline }) {
    return (<Item>
        <Chip isOnline={isOnline}></Chip>
        <img src={avatar} alt="User avatar" width="48" />
        <Name>{name}</Name>
    </Item>
    );
};