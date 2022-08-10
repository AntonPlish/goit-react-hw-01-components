import { Tabletr, Tabletd } from './TransactionHistoryItem.styled';

export default function TransactionHistoryItem({ type, amount, currency }) {
    return (<Tabletr>
            <Tabletd>{type}</Tabletd>
            <Tabletd>{amount}</Tabletd>
            <Tabletd>{currency}</Tabletd>
        </Tabletr>
    );
};