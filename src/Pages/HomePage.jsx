import React from 'react';
import Slider from '../components/HomePage/Slider'; 
import ProductList from '../components/HomePage/TopSales'; 
import QuestionsBlock from '../components/HomePage/QuestionsBlock'; 

function HomePage() {
  return (
    <div>
      <Slider />
      <ProductList />
      <QuestionsBlock />
    </div>
  );
}

export default HomePage;
