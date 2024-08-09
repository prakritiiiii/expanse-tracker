import React, { createContext, useState, useEffect } from 'react';

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
    const [transactions, setTransactions] = useState(() => {
        const savedTransactions = localStorage.getItem('transactions');
        return savedTransactions ? JSON.parse(savedTransactions) : [];
    });

    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);

    useEffect(() => {
        // Calculate income and expense
        let inc = 0;
        let exp = 0;
        transactions.forEach(txn => {
            if (txn.type === 'INCOME') {
                inc += txn.amount;
            } else if (txn.type === 'EXPENSE') {
                exp += txn.amount;
            }
        });
        setIncome(inc);
        setExpense(exp);
    }, [transactions]);

    useEffect(() => {
        // Save transactions to local storage
        localStorage.setItem('transactions', JSON.stringify(transactions));
    }, [transactions]);

    const addTransaction = (transaction) => {
        setTransactions(prevTransactions => [...prevTransactions, transaction]);
    };

    const deleteTransaction = (id) => {
        setTransactions(prevTransactions => prevTransactions.filter(txn => txn.id !== id));
    };

    return (
        <TransactionContext.Provider value={{ transactions, income, expense, addTransaction, deleteTransaction }}>
            {children}
        </TransactionContext.Provider>
    );
};
