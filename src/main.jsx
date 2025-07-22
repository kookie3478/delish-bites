import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import FullMenu from './pages/FullMenu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { CartProvider } from './context/CartContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider> 
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/full-menu" element={<FullMenu />} />
        </Routes>
      </Router>
    </CartProvider>
  </StrictMode>
);
