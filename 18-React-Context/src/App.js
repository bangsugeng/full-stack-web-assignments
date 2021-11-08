import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Counter from './Counter';
import ViewCounter from './ViewCounter';

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/view" element={<ViewCounter />} />
          <Route path="/" element={<Counter />} />
        </Routes>

        <nav>
          <ul>
            <li>
              <Link to="/">Set Counter</Link>
            </li>
            <li>
              <Link to="/view">View Counter</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default App;