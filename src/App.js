import React from 'react';
import MainScreen from './components/MainScreen';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Helmet } from 'react-helmet';

export default function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>React Password Generator</title>
        <link
          rel="icon"
          type="image/png"
          href={require('../src/assets/favicon.ico')}
          sizes="16x16"
        />
      </Helmet>
      <MainScreen />
      <ToastContainer />
    </>
  );
}
