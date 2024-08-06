import "../styles/app.css";

function App_Card() {
  return (
    <>
      <div
        id="app"
        className="m-5 p-5 flex flex-col justify-center items-center"
      >
        <div id="app_table" className="m-0 p-5 bg-[#1f1d1d] text-[#b8adad] rounded-lg">
            <h2 id="app_bold" className="m-1 p-1 text-3xl font-semibold">Eventos - En Vivo</h2>
            <a href="" className="m-1 p-1"><ol className="m-1 p-1">Canal 1</ol></a>
            <a href="" className="m-1 p-1"><ol className="m-1 p-1">Canal 1</ol></a>
            <a href="" className="m-1 p-1"><ol className="m-1 p-1">Canal 1</ol></a>
            <a href="" className="m-1 p-1"><ol className="m-1 p-1">Canal 1</ol></a>
            <a href="" className="m-1 p-1"><ol className="m-1 p-1">Canal 1</ol></a>
        </div>
      </div>
    </>
  );
}

export default App_Card;
