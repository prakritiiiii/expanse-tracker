import React, { useState, useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';

const AddTransaction = (props) => {
    const [amount, setAmount] = useState("");
    const [desc, setDesc] = useState("");
    const [type, setType] = useState(""); 

    const handleAddTransaction = () => {
        if (!type) {
            alert('Please select a transaction type (Income or Expense).');
            return;
        }
        if (!desc.trim()) {
            alert('Please enter a category.');
            return;
        }
        if (!amount || isNaN(amount) || amount <= 0) {
            alert('Please enter a valid amount.');
            return;
        }
        props.addTransaction({
            id: Date.now(),
            amount: Number(amount),
            desc,
            type,
        });
    };

    return (
        <div className={`txn-container ${props.isAddTxnVisible ? "flex" : "none"}`}>
            <input
                placeholder="Category"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
            />
            <input
                placeholder="Amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <div className='radioBox'>
                <input
                    type="radio"
                    id="expense"
                    name="type"
                    value="EXPENSE"
                    checked={type === "EXPENSE"}
                    onChange={(e) => setType(e.target.value)}
                />
                <label htmlFor="expense">Expense</label>
                <input
                    type="radio"
                    id="income"
                    name="type"
                    value="INCOME"
                    checked={type === "INCOME"}
                    onChange={(e) => setType(e.target.value)}
                />
                <label htmlFor="income">Income</label>
            </div>
            <div className='txn'>
                <button className='btn' onClick={handleAddTransaction}>
                    Add Transaction
                </button>
            </div>
        </div>
    );
};

export const HomeComponent = () => {
    const { expense, income, addTransaction } = useContext(TransactionContext);
    const [isAddTxnVisible, toggleAddTxn] = useState(false);

    return (
        <div className='container'>
            <div className='balance'>
                Balance: Rs.{income - expense}
                <div className='txn'>
                    {
                        isAddTxnVisible ? (
                            <button className='btn' onClick={() => { toggleAddTxn(false) }}>CANCEL</button>
                        ) : (
                            <button className='btn' onClick={() => { toggleAddTxn(true) }}>ADD</button>
                        )
                    }
                </div>
            </div>
            {isAddTxnVisible && (
                <AddTransaction
                    isAddTxnVisible={isAddTxnVisible}
                    addTransaction={(payload) => {
                        addTransaction(payload);
                        toggleAddTxn((isVisible) => !isVisible);
                    }}
                />
            )}
            <div className='expenseContainer'>
                <div className='expenseBox expense'>
                    Expense<span>Rs.{expense}</span>
                </div>
                <div className='expenseBox income'>
                    Income<span>Rs.{income}</span>
                </div>
            </div>
        </div>
    );
};
