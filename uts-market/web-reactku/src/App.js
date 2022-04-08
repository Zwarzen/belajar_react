import React from 'react';
import Shelf from '../Shelf';
import Filter from '../Shelf/Filter';
import FloatCart from '../FloatCart';
import Footer from '../Footer/index';
import Header from '../Header/index';
const App = () => (
  <React.Fragment>
    <Header />
      <main>
        <Filter />
        <Shelf />
      </main>
    <FloatCart />
    <Footer />
    </React.Fragment>
);
export default App;