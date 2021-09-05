import React from 'react';
import PricingListItem from './PricingListItem';
import prices from './prices.json';
import styles from './PricingList.module.sass';

const stylesMap = [
  'rgb(226,186,151)',
  'rgb(233,191,100)',
  'rgb(101,101,101)',
  'rgb(61,213,212)',
];

function PricingList () {
  console.log(prices);
  return (
    <ul className={styles.articlesList}>
      {prices.map((price, i) => (
        <PricingListItem key={i} priceItem={price} color={stylesMap[i]} />
      ))}
    </ul>
  );
}

export default PricingList;
