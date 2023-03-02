import React from 'react';
import './TransactionList.scss';

const TransactionList = () => {

    const transactions = [
        {
            id: 1,
            user: {
                name: 'Aokiji',
                image: 'https://randomuser.me/api/portraits/men/1.jpg'
            },
            date: '28 Feb 2023',
            time: "6:23 PM",
            money: '$23.50',
            status: "Received"
        },
        {
            id: 2,
            user: {
                name: 'Kizaru',
                image: 'https://randomuser.me/api/portraits/women/2.jpg'
            },
            date: '28 Feb 2023',
            time: "6:23 PM",
            money: '$23.50',
            status: "Outgoing"
        },
        {
            id: 3,
            user: {
                name: 'Akainu',
                image: 'https://randomuser.me/api/portraits/men/3.jpg'
            },
            date: '28 Feb 2023',
            time: "6:23 PM",
            money: '$23.50',
            status: "Received"
        }
    ];

    return (
        <div className="transaction-list">
            <h1 className='transaction_heading'>Last Transactions</h1>
            {transactions.map((transaction) => (
                <div className="transaction-card" key={transaction.id}>
                    <div className="transaction-card__user">
                        <img src={transaction.user.image} alt={`User ${transaction.user.name}`} />
                        <div className='transaction-card__name_date'>
                            <div className='details'><h3>{transaction.user.name}</h3></div>
                            <div className='date'>{transaction.date}
                                <div className='time'>{transaction.time}</div>
                            </div>
                        </div>
                    </div>

                    <div>
                    <div className="transaction-card__money">{transaction.money}</div>
                    <div className='status'>{transaction.status}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TransactionList;
