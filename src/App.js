import React from 'react';
import LoginPage from './LoginPage';
import Counter from './useState';
import ChickenBanana from './ChickenBanana';


function App(){
    return(
        <div>
            <ChickenBanana />
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