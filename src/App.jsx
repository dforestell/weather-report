import React from 'react';
import './App.css';

//components
import TopSection from './components/topSection';
import BottomSection from './components/bottomSection';

//styles 
import './sass/app.scss'

function App() {
  return (
    <div className="app-container">
      <div className="main-container">
        <div className="top-section">
          < TopSection />
         </div>

         <div className="bottom-section">
          < BottomSection />
         </div>
      </div>

    </div>
  );
}

export default App;
