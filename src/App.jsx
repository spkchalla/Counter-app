import './Counter.css';
import { useEffect, useState } from 'react';
function App() {

  const [count , setCount] = useState(()=>{
    const saved = localStorage.getItem('count');
    return saved? JSON.parse(saved): 0;
  });

  useEffect(()=>{
    localStorage.setItem('count', JSON.stringify(count));
  }, [count])

  const [message, setMessage] = useState('');

  const [theme, setTheme] = useState(() => {
  return localStorage.getItem('theme') || 'Light';
});

  useEffect(() => {
  document.body.className = theme;
  localStorage.setItem('theme', theme);
}, [theme]);


  const toggleTheme = ()=>{
    setTheme(theme==='Light'?'Dark':'Light');
  }

  const handleDecrement = ()=>{
    if (count>0){
      setCount(count-1);
      setMessage('');
    }
    else{
      setMessage('Neeyavva THAGGEDE LE!');
    }
  }
  const handleIncrement=()=>{
    if(count>=0){
      setCount(count+1);
      setMessage('');
    }
  }
  const handleReset=()=>{
    
      setCount(0);
      setMessage('');
    
  }

  return (   
    
    <div className='container'>
      <button className='themeToggle' onClick={toggleTheme}>
          {theme === 'Light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>

      <h1 className='title'>Counter App</h1>
      <div className='countBox'><p className='countValue'>Count: {count}</p></div>
      <div className='blank'></div>
      <div className='buttonGroup'>
        <button onClick={handleIncrement} className='add'>+</button>
        <button onClick={handleDecrement} className='sub'>-</button><br />
        <button onClick={handleReset} className='reset'>Reset</button>
      </div>
      <div>
        {message && <p className='feedback'>{message}</p>}
      </div>

    </div>
  );
}

export default App;
