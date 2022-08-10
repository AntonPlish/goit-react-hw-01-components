import PropTypes from 'prop-types';
import TransactionHistoryItem from './TransactionHistoryItem'
import { TansactionTable, Tabletr, Tableth } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return (<TansactionTable>
        <thead>
            <Tabletr>
                <Tableth>Type</Tableth>
                <Tableth>Amount</Tableth>
                <Tableth>Currency</Tableth>
            </Tabletr>
        </thead>
        <tbody>
        {items.map(({ id, type, amount, currency }) => (
            <TransactionHistoryItem
                key={id}
                type={type}
                amount={amount}
                currency={currency}
            />
        ))}
        </tbody>
        </TansactionTable>
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