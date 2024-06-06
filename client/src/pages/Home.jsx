import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Products from '../components/Products'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import { Provider } from 'react-redux'


const Home = () => {
  return (
    <div>
      <Announcement/>
      <Navbar />
      <Slider/>
      <Categories/>
      <Products/>
      <Footer/>
    </div>
  );
};

export default Home
