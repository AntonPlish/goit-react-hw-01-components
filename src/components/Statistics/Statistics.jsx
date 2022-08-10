import PropTypes from 'prop-types';
import StatisticItem from './StatisticItem'
import { StatisticsList, Title, Statlist } from './Statistics.styled'

export const Statistics = ({ title, stats }) => {
    return (<StatisticsList>
        <Title>{title}</Title>
        
        <Statlist>
            {stats.map(({ id, label, percentage }) => (
                <StatisticItem
                    key={id}
                    label={label}
                    percentage={percentage}
                />
            ))}
        </Statlist>
    </StatisticsList>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })).isRequired,
};