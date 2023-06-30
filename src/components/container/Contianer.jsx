import React, { useEffect, useState } from 'react'
import './container.css'

export default function Contianer() {
  const [count, setCount] = useState(0)

  const handleCount = () => {
    setCount((prevCount) => prevCount + 1)
  }

  const resetCount = ()=>{
     setCount(0)
  }

  useEffect(() => {
    const storedCount = localStorage.getItem('count');
    if (storedCount !== null) {
      setCount(parseInt(storedCount));
    }
  }, []);

  useEffect(() => {
     localStorage.setItem('count', count.toString());
   }, [count]);
 

  return (
    <>
      <div className="container">
        <div className="display" onClick={handleCount}>
        <h3>
          {count
            .toString()
            .split("")
            .map((digit, index) => (
              <span
                key={index}
                className={`digit digit-${index + 1}`}
              >
                {digit}
              </span>
            ))}
        </h3>
        </div>
        <button className="resetbox" disabled={!count} onClick={resetCount}>Reset</button>
        
      </div>
      <div class="lg-display">
        <h3>This app only works in screens with 800 pixels or below</h3>
      </div>
    </>
  )
}
