import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  let [userText,setText] = useState('');
  let [reply, setReply] = useState('');

  const getText = (input) =>{
    setText(input.target.value);
    

  }
  const onButton = () =>{
    if(userText === '') return;
    fetch('http://localhost:3001/ask', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          input: userText
        })
      })
    .then(response=>response.json())
    .then(answer => setReply(answer.output.text))
}

  return (
    <div className="App">
      <div className = 'main'>
        <h1> You're chatting with Chris </h1>
        <h4> Enter your question or comment </h4>
        <textarea onChange = {getText}className = 'input'/>
        <br/>
        <button onClick={onButton}>Enter</button>
        <br/>
      </div>
      <div className = 'reply'>
        {reply}
      </div>

    </div>
  );
}

export default App;
