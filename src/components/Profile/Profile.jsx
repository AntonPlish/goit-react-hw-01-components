import PropTypes from 'prop-types';
import { Profiles, Avatar, Name, Tag, Location, Stats, Statsitem, Label, Quantity } from './Profile.styled'


export const Profile = ({ avatar, username, tag, location, followers, views, likes}) => {
    return <Profiles>
        <div>
            <Avatar
                src={avatar}
                alt="User avatar"
            />
            <Name>{username}</Name>
            <Tag>@{tag}</Tag>
            <Location>{location}</Location>
        </div>
        
        <Stats>
            <Statsitem>
                <Label>Followers</Label>
                <Quantity>{followers}</Quantity>
            </Statsitem>
            <Statsitem>
                <Label>Views</Label>
                <Quantity>{views}</Quantity>
            </Statsitem>
            <Statsitem>
                <Label>Likes</Label>
                <Quantity>{likes}</Quantity>
            </Statsitem>
        </Stats>
    </Profiles>
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
}