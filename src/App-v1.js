import { useState } from 'react';
// import './App.css';


function App() {
  const [step, setStep] = useState(1)
  const [count, setCount] = useState(0)
  const date = new Date();
  date.setDate(date.getDate() + count);


  // console.log(currentDate);

  function Inc() {
    setStep((s) => s + 1)
  }

  function Dec() {
    if (step <= 0) return
    setStep((s) => s - 1)
  }

  function CountInc() {
    setCount((c) => c + step)
  }

  function CountDec() {
    if (step <= 0) return
    setCount((c) => c - step)
  }



  return (
    <div>
      <>
        <div>
          <button onClick={Dec}>-</button>
          <span>Step:{step}</span>
          <button onClick={Inc}>+</button>
        </div>
        <div>
          <button onClick={CountDec}>-</button>
          <span>Count:{count}</span>
          <button onClick={CountInc}>+</button>
        </div>
        {count === 0 ? "Today is" : count > 0 ? `${count} days from today it is` : `${Math.abs(count)} days ago was `}
        <span>{date.toDateString()}</span>
      </>
    </div>
  )
}

// function Steps() {
//   return <div>

//   </div>
// }

// function Counts() {
//   return <div>

//   </div>
// }




export default App;
