import PropTypes from 'prop-types';
import TransactionHistoryItem from './TransactionHistoryItem'
import css from './TransactionHistory.module.css'

export const TransactionHistory = ({ items }) => {
    return (<table className={css.transactionhistory}>
        <thead>
            <tr className={css.tabletr}>
                <th className={css.tableth}>Type</th>
                <th className={css.tableth}>Amount</th>
                <th className={css.tableth}>Currency</th>
            </tr>
        </thead>
        {items.map(({ id, type, amount, currency }) => (
            <TransactionHistoryItem
                key={id}
                type={type}
                amount={amount}
                currency={currency}
            />
        ))}
    </table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })).isRequired,
};