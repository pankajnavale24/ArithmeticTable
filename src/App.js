import React, { useState } from 'react';
import './App.css';
import AdditionTable from './AdditionTable';
import SubtractionTable from './SubtractionTable';
import MultiplicationTable from './MultiplicationTable';
import DivisionTable from './DivisionTable';

function App() {
  const [currentTable, setCurrentTable] = useState('addition');

  const renderTable = () => {
    switch (currentTable) {
      case 'addition':
        return <AdditionTable />;
      case 'subtraction':
        return <SubtractionTable />;
      case 'multiplication':
        return <MultiplicationTable />;
      case 'division':
        return <DivisionTable />;
      default:
        return <AdditionTable />;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Arithmetic Tables</h1>
        <div className="navigation">
          <button onClick={() => setCurrentTable('addition')}>Addition</button>
          <button onClick={() => setCurrentTable('subtraction')}>Subtraction</button>
          <button onClick={() => setCurrentTable('multiplication')}>Multiplication</button>
          <button onClick={() => setCurrentTable('division')}>Division</button>
        </div>
        {renderTable()}
      </header>
    </div>
  );
}

export default App;
