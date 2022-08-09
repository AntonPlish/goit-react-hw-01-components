import css from './TransactionHistoryItem.module.css'

export default function TransactionHistoryItem({ type, amount, currency }) {
    return (<tbody>
        <tr className={css.tabletr}>
            <td className={css.tabletd}>{type}</td>
            <td className={css.tabletd}>{amount}</td>
            <td className={css.tabletd}>{currency}</td>
        </tr>
    </tbody>
    );
};