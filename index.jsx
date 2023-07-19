import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
        <Header />
        <About />
        <Footer />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />); 