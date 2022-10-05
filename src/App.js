import React from 'react';
import MainScreen from './components/MainScreen';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function App() {
  return (
    <>
      <MainScreen />
      <ToastContainer />
    </>
  );
}
