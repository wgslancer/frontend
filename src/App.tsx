import './App.css';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

function App() {
  const appRef = useRef(null);
  useEffect(() => {
    gsap
      .timeline()
      .to(appRef.current, {
        background: 'green',
      })
      .to(appRef.current, {
        background: 'blue',
      })
      .repeat(10);
  }, []);
  return (
    <div className='App' style={{ background: 'red' }} ref={appRef}>
      This is a test title
    </div>
  );
}

export default App;
