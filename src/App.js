import React from 'react';
import { Header } from './components/Header';
import { HomeComponent } from './components/HomeComponent';
import { TransactionProvider } from './context/TransactionContext';
import { Process } from './context/Process';

import './App.css';

function App() {
  return (
    <div>
      <Header />
     <div className='body'>
     <TransactionProvider>
            <HomeComponent />
            <Process />
        </TransactionProvider>
     </div>
    </div>
  );
}

export default App;
