import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
// import PricingListItem from './PricingList/PricingListItem';
import PricingList from './PricingList/PricingList';

function PricingPage () {
  return (
    <>
      <Header />
      {/* <section></section> */}
      <PricingList />
      <Footer />
    </>
  );
}

export default PricingPage;
