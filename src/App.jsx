import React from 'react';
import Header from './components/Header';
//import Sidebar from './components/Sidebar';
//import Dashboard from './components/Dashboard';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './index.css';

function App() {
    return (
        <div className="app">
            <Header />
            <MainContent />
            <div className="content">
                
                
                <Footer/>
            </div>
        </div>
    );
}

export default App;
