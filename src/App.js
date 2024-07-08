import { useState } from 'react';
import './App.css';


const message = [
  "Download TimeBee",
  "Install TimeBee",
  "Run TimeBee"
]

function App() {


  // const step = 0;
  const [currentStep, setCurrentStep] = useState(0);
  const [visibile, setVisibility] = useState(true);
  const [name, setName] = useState({ name: "Ahmad" })

  function increment() {
    if (currentStep >= 2) return
    setCurrentStep((s) => s + 1)
    setName({ name: "Muhammad" })
  }
  function decrement() {
    if (currentStep < 1) return
    setCurrentStep((s) => s - 1)
  }


  function visibility() {
    setVisibility(!visibile)
  }

  return (

    <div className='main-div'>
      <button onClick={visibility} className={`btn-show ${visibile ? "red" : "blue"}`}>{visibile ? "Hide" : "Show"}</button>


      {visibile && <div className='steps'>
        <div className={`numbers`}>
          <div className={`${currentStep >= 0 ? "active" : ""}`}>
            1
          </div>
          <div className={`${currentStep >= 1 ? "active" : ""}`}>
            2
          </div>
          <div className={`${currentStep >= 2 ? "active" : ""}`}>
            3
          </div>
        </div>
        <p className='message'>
          Step{currentStep + 1} :{message[currentStep]}
        </p>

        <div className='buttons'>
          <button onClick={() => decrement()} className={`${currentStep <= 0 ? "disable" : ""}`}>Previous</button>
          <button onClick={() => increment()}
            // disabled={currentStep >= 2 ? true : false}>
            className={`${currentStep >= 2 ? "disable" : ""}`}>
            Next
          </button>
        </div>
      </div >}

    </div>
  );
}



export default App;
