import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import AppRoutes from './routes';
import './App.css';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="app">
          <Header />
          <main>
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;