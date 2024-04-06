import react from '../assets/react.svg';
import '../styles/app.css';

function App_Row() {
  return (
    <>
    <div className="m-0.5 p-0.5 flex flex-[50%] flex-row justify-center items-center">
        <div className="m-1 p-1 flex flex-col justify-center items-center bg-[#312e2e] text-slate-300 rounded-lg ">
        <h2>Estrenos</h2>
          <ul className="m-1 p-1 flex flex-row items-center bg-[#312e2e] text-slate-300 rounded-lg justify-between">
            <a href="https://reactjs.dev">
              <img src={react} className="m-1 p-1 flex-row" alt="React-Logo" width={100} />
            </a>
          </ul>
          <ul className="m-1 p-1 flex flex-row items-center bg-[#312e2e] text-slate-300 rounded-lg justify-between">
            <a href="https://reactjs.dev">
              <img src={react} className="m-1 p-1 flex-row" alt="React-Logo" width={100} />
            </a>
          </ul>
          <ul className="m-1 p-1 flex flex-row items-center bg-[#312e2e] text-slate-300 rounded-lg justify-between">
            <a href="https://reactjs.dev">
              <img src={react} className="m-1 p-1 flex-row" alt="React-Logo" width={100} />
            </a>
          </ul>
          <ul className="m-1 p-1 flex flex-row items-center bg-[#312e2e] text-slate-300 rounded-lg justify-between">
            <a href="https://reactjs.dev">
              <img src={react} className="m-1 p-1 flex-row" alt="React-Logo" width={100} />
            </a>
          </ul>
          <ul className="m-1 p-1 flex flex-row items-center bg-[#312e2e] text-slate-300 rounded-lg justify-between">
            <a href="https://reactjs.dev">
              <img src={react} className="m-1 p-1 flex-row" alt="React-Logo" width={100} />
            </a>
          </ul>
        </div>
    </div>
    </>
  );
}

export default App_Row;
