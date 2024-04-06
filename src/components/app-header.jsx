import react from '../assets/react.svg';
import App_Nav from './app-nav';
import '../styles/app.css';

function App_Header() {
  return (
    <>
      <div className="m-5 p-5 flex flex-col flex-[50%] justify-center items-center" >
        <div className="m-5 p-5 flex flex-row justify-start items-center" >
          <h1 className="m-2.5 p-2.5 text-2.5xl font-semibold" >
            Pages-Movies
          </h1>
          <a href="https://reactjs.dev">
            <img src={react} className="m-1 p-1 flex-row" alt="React-Logo" width={75} />
          </a>
        </div>
        <App_Nav />
      </div>
    </>
  );
}

export default App_Header;
