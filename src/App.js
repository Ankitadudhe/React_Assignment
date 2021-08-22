import React, { useCallback, useState } from 'react';
import Button from './components/UI/Button/Button'
import './App.css';
import Demo from './components/Demo'
function App() {
  const [showParagragh,setShowParagragh]=useState(false);
  const [allowToggle,setAllowToggle]=useState(false);

  const onClickHandler=useCallback(()=>{
    if(allowToggle){
      setShowParagragh(prevshowParagragh=>!prevshowParagragh)
      }
  },[allowToggle]);

  const allowToggleHandler=()=>{
    setAllowToggle(true);
  }
  return (
    <div className="app">
      <h1>Hi there!</h1>
     {/* {showParagragh && <p>This is new</p>} */}
     <Demo show={showParagragh}/>
     {/* React.memo() */}
     {/* <Demo show={false}/> */}
     <Button onClick={allowToggleHandler}>Allows Toggle</Button>
     <Button onClick={onClickHandler}>Toggle paragragh</Button>
    </div>
  );
}

export default App;
