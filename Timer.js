import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState (0);

  useEffect(() => {
  const interval = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
  
  return () => clearInterval(interval);
}, []);

  return (
    <div className="Timer App">
      <header className='App-header'>
        <p>Timer: {count} seconds</p>
      </header>
    </div>
  );
}

export default Timer;

/*import React from 'react';
import LoginPage from './LoginPage';
import Counter from './useState';
import ChickenBanana from './ChickenBanana';
import Calculator from './Calculator';


function App(){
    return(
        <div>
            <Calculator />
        </div>
    );
}

export default App;
/*
function App(){
  return(
    <div>
      <Welcome name="Gab"/>
      <Welcome name="Max"/>
      <Welcome name="Marc"/>
    </div>
  );
}

export default App;

function Welcome(props){
  return<h2>Welcome, {props.name}!</h2>;
}
  */