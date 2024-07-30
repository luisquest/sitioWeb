
const Saludo=()=>{
    return (
        <nav className="bg-white text-white shadow-md h-20 fixed top-0 w-full z-50" >
          <div className="container flex justify-between items-center text-black font-semibold ">
            <div className="bg-white">
                <img alt="" src="https://i.ibb.co/tZ62Wr9/logo-con-lema.png" className="max-h-14 w-auto ml-16 mt-3" />
            </div>

            <ul className="hidden md:flex space-x-8">
              <li>
                <a href="#about-us" className="hover:text-gray-300">Inicio</a>
              </li>
              <li>
                <a href="#services" className="hover:text-gray-300">Servicios</a>
              </li>
              <li>
                <a href="#products" className="hover:text-gray-300">Productos</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-gray-300">Proyectos</a>
              </li>
              <li>
                <a href="#clients" className="hover:text-gray-300">Clientes</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-300">Contáctenos</a>
              </li>
            </ul>
            <div className="md:hidden">
              <button className="text-white focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>
      );
};

export default Saludo