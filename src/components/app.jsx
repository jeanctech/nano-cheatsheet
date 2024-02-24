import App_canales from './app_canales'
import vite from '/vite.svg'
import '../styles/app.css'

function App() {
  return (
    <>
      <header id='app-header' className='m-1 p-1 flex flex-col justify-center items-center'>
        <head id='app-head' className='m-1 p-1 flex flex-row justify-start items-center'>
          <h1 className='m-1 p-1 text-2.5xl font-semibold'>Pages-Tv</h1>
          <a href="https://vitejs.dev" >
            <img src={vite} className='m-1 p-1' alt="Vite logo" width={50} />
          </a>
        </head>
        <nav id='app-nav' className="m-1 p-1 flex flex-row justify-center items-center">
          <ul className='m-1 p-1'>
            <a href="" alt="" className='m-1 p-1'>Inicio</a> \
            <a href="" alt="" className='m-1 p-1'>Canales</a> \
            <a href="" alt="" className='m-1 p-1'>Lista</a> \
            <a href="" alt="" className='m-1 p-1'>Acerca</a> \
            <a href="" alt="" className='m-1 p-1'>Contacto</a>
          </ul>
        </nav>
        <p id="read" className='m-2.5 p-2.5 bg-[#1A1A1A] rounded-lg'>
          Bienvenid@ a Pages-Tv donde Puedes Acceder <br /> a cualquier Canal de Tv gratuitamente y libre.
        </p>
      </header>
      <main id="app-main">
        <App_canales />
      </main>
    </>
  )
}

export default App
