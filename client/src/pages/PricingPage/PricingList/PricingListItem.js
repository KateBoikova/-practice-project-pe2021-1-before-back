import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PricingList.module.sass';

function PricingListItem (props) {
  console.log(props);
  const {
    priceItem: {
      colorName,
      description,
      price: { amount, currency },
      options,
    },
    color,
  } = props;

  // const mapPrices = (price, i) => (
  //   <article className={styles.pricingContainer} key={i}>
  //     <div className={styles.headerBox} style={stylesMap[i]}>
  //       <h2 style={stylesMap[i]}>{price.colorName}</h2>
  //       <p>{price.description}</p>
  //       <p>
  //         {price.price.amount}
  //         {price.price.currency}
  //       </p>
  //     </div>
  //     <ul>
  //       <li>{price.options}</li>
  //     </ul>
  // </article>
  // );
  return (
    <li className={styles.pricingListItem}>
      <div className={styles.header} style={{ borderColor: color }}>
        <h2 style={{ color: color }} className={styles.colorName}>
          {colorName}
        </h2>
        <p>{description}</p>
        <p style={{ color: color }}>
          {currency} {amount}
        </p>
      </div>
      <ul className={styles.optionsList}>
        {options.map((option, i) => (
          <li data-tooltip={'tooltip'} key={i}>
            {option}
          </li>
        ))}
      </ul>
      <Link style={{ backgroundColor: color }} className={styles.startLink}>
        <i />
        Start
      </Link>
    </li>
  );
}
export default PricingListItem;
