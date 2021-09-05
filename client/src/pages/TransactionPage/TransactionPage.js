import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import TransactionTable from './TransactionTable';
import styles from './TransactionPage.module.sass';

const transactions = [
  { id: 1, date: '2021-01-01', operationType: 'INCOME', amount: 100 },
  { id: 2, date: '2021-01-02', operationType: 'INCOME', amount: 100 },
  { id: 3, date: '2021-01-03', operationType: 'INCOME', amount: 100 },
];

function TransactionPage () {
  return (
    <>
      <Header />
      <section className={styles.transactionTableContainer}>
        <TransactionTable transactions={transactions} />
      </section>

      <Footer />
    </>
  );
}

export default TransactionPage;
