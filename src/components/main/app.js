import React from 'react';
import Search from '../../containers/search';
import Result from '../../containers/result';
import Header from './header';
import Footer from './footer';
import styles from './app.css';

const App = () => (
  <div className={styles.app}>
    <Header />
    <main>
      <Search />
      <Result />
    </main>
    <Footer />
  </div>
);

export default App;
