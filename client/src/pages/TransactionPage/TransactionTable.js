import React from 'react';
import PropTypes from 'prop-types';

function TransactionTable (props) {
  const { transactions } = props;
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Operation</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(({ id, date, operationType, amount }) => (
          <tr key={id}>
            <td>{date}</td>
            <td>{operationType}</td>
            <td>{amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionTable.propTypes = PropTypes.arrayOf(
  PropTypes.shape({
    transactions: PropTypes.number,
    date: PropTypes.string,
    operationType: PropTypes.string,
    amount: PropTypes.number,
  })
);
export default TransactionTable;
