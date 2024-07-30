


const navs = () => {
  return <nav className="bg-blue-800 text-black p-4 shadow-md ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold ">Mi Empresa</div>
        <ul className="flex space-x-4">
          <li>
            <a href="#about-us" className="hover:text-gray-300">Quiénes Somos</a>
          </li>
          <li>
            <a href="#services" className="hover:text-gray-300">Servicios</a>
          </li>
          <li>
            <a href="#products" className="hover:text-gray-300">Productos</a>
          </li>
          <li>
            <a href="#clients" className="hover:text-gray-300">Clientes</a>
          </li>
          <li>
            <a href="#testimonials" className="hover:text-gray-300">Recomendaciones</a>
          </li>
        </ul>
      </div>
    </nav>
  
}

export default navs;