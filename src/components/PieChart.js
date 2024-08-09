import React, { useContext, useMemo } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { TransactionContext } from '../context/TransactionContext';

ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChart = () => {
    const { transactions } = useContext(TransactionContext);

    // Calculate total amount
    const total = useMemo(() => transactions.reduce((acc, txn) => acc + txn.amount, 0), [transactions]);

    // Prepare data for the pie chart
    const data = useMemo(() => {
        const labels = [];
        const dataValues = [];

        transactions.forEach(txn => {
            if (labels.includes(txn.desc)) {
                const index = labels.indexOf(txn.desc);
                dataValues[index] += txn.amount;
            } else {
                labels.push(txn.desc);
                dataValues.push(txn.amount);
            }
        });

        return {
            labels,
            datasets: [{
                data: dataValues,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1,
            }],
        };
    }, [transactions]);

    const options = {
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        const label = context.label || '';
                        const value = context.raw || 0;
                        const percentage = ((value / total) * 100).toFixed(2);
                        return `${label}: Rs.${value}  (${percentage}%)`;
                    }
                }
            }
        }
    };
    return (
        <div>
            <h2>Transaction Distribution Chart</h2>
            <Pie data={data} options={options} />
        </div>
    );
};

