import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import store from './utils/store';

export default function App() {

  return (
    <>
      <Provider store={store}>
      <Navbar/>
      <Outlet/>
      <Footer/>
      </Provider>
    </>
  )
}
