import React, { useContext, useState, useCallback, useEffect } from 'react';
import { TransactionContext } from '../context/TransactionContext';

const TransactionCell = ({ payload }) => {
    const { deleteTransaction } = useContext(TransactionContext);
    const cellClass = payload?.type === 'EXPENSE' ? 'cell expense' : 'cell income';

    return (
        <div className={cellClass}>
            <span>{payload?.desc}</span>
            <span>Rs.{payload?.amount}</span>
            <span
                className="delete-icon"
                onClick={() => deleteTransaction(payload.id)}
            >
                &times;
            </span>
        </div>
    );
};

export const History = () => {
    const { transactions } = useContext(TransactionContext);
    const [searchText, updateSearchText] = useState('');
    const [filteredTransaction, updateTxn] = useState(transactions);

    const filterData = useCallback((searchText) => {
        if (!searchText || !searchText.trim().length) {
            updateTxn(transactions);
            return;
        }
        const txn = transactions.filter((payload) =>
            payload.desc.toLowerCase().includes(searchText.toLowerCase().trim())
        );
        updateTxn(txn);
    }, [transactions]);

    useEffect(() => {
        filterData(searchText);
    }, [searchText, filterData]);

    return (
        <div className='block'>
            Transactions
            <input
                placeholder='Search'
                onChange={(e) => {
                    updateSearchText(e.target.value);
                    filterData(e.target.value);
                }}
            />
            {filteredTransaction.map((payload, index) => (
                <TransactionCell key={index} payload={payload} />
            ))}
        </div>
    );
};
