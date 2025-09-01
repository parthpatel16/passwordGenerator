import { useCallback, useEffect, useState, useRef } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';



function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(10);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [symbolsAllowed, setSymbolsAllowed] = useState(false);
  const passwordRef = useRef(null);
    const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 101); // For mobile devices
       window.navigator.clipboard.writeText(password)
    }, [password]);

  const generatePassword = useCallback(() => {
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let pass = '';

    if(numbersAllowed) str += '0123456789'
    if(symbolsAllowed) str += '!@#$%^&*()_+[]{}|;:,.<>?';
    console.log(str.length)
    for (let i = 0; i <length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      pass+= str[randomIndex];
      
      
    }
      setPassword(pass);

  }, [length, numbersAllowed, symbolsAllowed]);

  useEffect(()=> {
    generatePassword();

  }, [length, numbersAllowed, symbolsAllowed, generatePassword]);

return (

  <>
    <Navbar />
    
    <div className=" max-w-md mx-auto mt-25 p-10 bg-gray-900 text-orange-500 rounded-lg shadow-lg">
      <h1 className="text-white text-xl font-bold text-center mb-4">
        Password Generator
      </h1>

      <div className="bg-gray-800 p-4 rounded-md mb-4 flex flex-row gap-4">
        <input
          type="text"
          value={password}
          readOnly
          className="bg-gray-700 text-white p-2 rounded-md w-full outline-none"
          ref={passwordRef}
        />
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 self-end"
          

          onClick={copyToClipboard}
        >
          Copy
        </button>
      </div>

      <div className="flex flex-col gap-6 w-max px-5 ">
        <div className="flex  gap-4">
          <input
            type="range"
            min={8}
            max={100}
            value={length}
            className="accent-orange-500 w-64"
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <label className="text-white ">Length: {length}</label>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="numbers"
            checked={numbersAllowed}
            onChange={() => setNumbersAllowed((prev) => !prev)}
            className="accent-orange-500"
          />
          <label htmlFor="numbers" className="text-white">
            Include Numbers
          </label>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="symbols"
            checked={symbolsAllowed}
            onChange={() => setSymbolsAllowed((prev) => !prev)}
            className="accent-orange-500"
          />
          <label htmlFor="symbols" className="text-white">
            Include Symbols
          </label>
        </div>
      </div>
      
    </div>
    <Footer />
    </>
  );
}


export default App;
