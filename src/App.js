import React,{useState} from 'react';
import './App.css'
import Clock from 'react-digital-clock'; 

function App() {

  // const state = useState();   // This is hook
  // console.log(state);

  let [count, setCount] = useState(0);

  // const name =['kis', 'han', 'dixit']

  // const [kis, han ,dixit] = name;  // Array destructuring

// let count =1;
const IncNum =()=> {
  setCount(count+1);
  console.log("I am clicked" + count++);
}

  return (
    <>
    <div className='comp'>
      <h1>{count}</h1>
      <button onClick={IncNum}>Click Me</button>
    </div>
    <div className="digital-react-clock">
      <Clock/>
    </div>
    </>
  );
}

export default App;
