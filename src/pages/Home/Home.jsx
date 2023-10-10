import React from 'react';
import styles from './Home.module.css';

const Home = () => {
 return (
  <div>
   <div className={styles['home-header']}>
    <h1>About Our Company</h1>
   </div>

   <div>
    <section
     className={`${styles['home-section']} ${styles['company-description']}`}
    >
     <h2>Who We Are?</h2>
     <p>
      We are a leading company in Ukraine that provides car rental services. Our
      mission is to make car rental easy, convenient, and accessible to every
      customer.
     </p>
    </section>

    <section className={`${styles['home-section']} ${styles['our-values']}`}>
     <h2>Our Values</h2>
     <ul className={styles['home-list']}>
      <li>Quality and reliability of our vehicles</li>
      <li>High-quality customer service</li>
      <li>Convenience and affordability of rental</li>
      <li>Environmental responsibility</li>
     </ul>
    </section>

    <section className={`${styles['home-section']} ${styles['why-choose-us']}`}>
     <h2>Why Choose Us?</h2>
     <p>There are many reasons why customers choose us for car rental:</p>
     <ul className={styles['home-list']}>
      <li>Safety and comfort of our vehicle fleet</li>
      <li>Attractive rates and discounts for loyal customers</li>
      <li>Convenient online booking and quick vehicle pickup</li>
      <li>24/7 customer support</li>
     </ul>
    </section>
   </div>
  </div>
 );
};

export default Home;
