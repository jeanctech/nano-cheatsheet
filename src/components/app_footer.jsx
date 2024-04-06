import { useState } from "react";
import '../styles/app.css';

function App_Footer() {
  const [count, setCount] = useState(0);
  return (
    <>
    <div id="app-card"
          className="m-2.5 p-2.5 flex flex-row justify-center items-center" >
          <button onClick={() => setCount((count) => count + 1)} >
            Count Is - {count}
          </button>
          <p className="m-2.5 p-2.5 bg-[#1A1A21] text-slate-300 rounded-xl" >
            Edit <code>Src/App.jsx</code> and save to test Hmr
          </p>
        <p id="read" className="m-2.5 p-2.5 bg-[#1A121A] rounded-lg"  >
          Click on the Vite and React Logos to learn more
        </p>
      </div>
    </>
  );
}

export default App_Footer;
