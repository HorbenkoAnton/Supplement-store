import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './Pages/HomePage';
import { ProductsProvider } from './State';
import ContactsPage from './Pages/ContactsPage';
import InformationPage from './Pages/InformationPage';
import ProductPage from './Pages/ProductPage';



function App() {
  return (
    <Router>
      <div className="App">
        <ProductsProvider >
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/contacts' element={<ContactsPage />} />
          <Route path='/information' element={<InformationPage />} />
          <Route path='/products' element={<ProductPage />} />
        </Routes>
        <Footer />
        </ProductsProvider>
      </div>
    </Router>
  );
}

export default App;
