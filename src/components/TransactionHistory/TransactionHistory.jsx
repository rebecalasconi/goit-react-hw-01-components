import React from 'react';
import styles from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

// Componenta TransactionHistory
const TransactionHistory = ({ items }) => {
    return (
        <table className={styles.transactionHistory}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
      
        <tbody>
            {items.map(({ id, type, amount, currency }) => (
                <tr key={id}>
                   <td>{type.charAt(0).toUpperCase()+ type.substring(1).toLowerCase()}</td>
                   <td>{amount.charAt(0).toUpperCase()+ amount.substring(1).toLowerCase()}</td>
                   <td>{currency.charAt(0).toUpperCase()+ currency.substring(1).toLowerCase()}</td>
                </tr>
            ))}
        </tbody>
      </table>
    );
  }
  
  // PropTypes pentru FriendListItem
TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ).isRequired
};

  export default TransactionHistory;