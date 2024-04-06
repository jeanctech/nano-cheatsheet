import react from '../assets/react.svg';
import '../styles/app.css';

function App_Aside() {
  return (
    <>
     <div className="m-1 p-1 flex flex-col flex-[50%] justify-center items-center bg-[#312e2e] text-slate-300 rounded-lg ">
          <p className="m-1 p-1 flex flex-row justify-center items-center bg-[#312e2e] text-slate-300 rounded-lg ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere reiciendis ratione sapiente at saepe
          nesciunt libero unde. Facere voluptate quis, repellat eos dolorum magni a fugiat ut, itaque laboriosam
          aut.
          </p>
          <div className="m-1 p-1 bg-[#343434] text-[#f8f8f8] flex flex-row justify-between items-center rounded-lg">
            <h3 className="m-1 p-1">Vistas</h3>
            <span className="m-1 p-1">Ver Todo</span>
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

export default App_Aside;
