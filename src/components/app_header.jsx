import "../styles/app.css";

function App_Header() {
  return (
    <>
      <div
        id="app"
        className="m-5 p-5 flex flex-col justify-center items-center"
      >
        <nav id="app_nav" className="m-0 p-3 bg-[#201f1f] rounded-lg">
            <a href="" className="m-1 p-1">Inicio</a><span className="m-1 p-1 text-[#b8adad]">/</span>
            <a href="" className="m-1 p-1">En Vivo</a><span className="m-1 p-1 text-[#b8adad]">/</span>
            <a href="" className="m-1 p-1">Canales</a><span className="m-1 p-1 text-[#b8adad]">/</span>
            <a href="" className="m-1 p-1">Deportes</a><span className="m-1 p-1 text-[#b8adad]">/</span>
            <a href="" className="m-1 p-1">Acerca</a>
        </nav>
      </div>
    </>
  );
}

export default App_Header;
