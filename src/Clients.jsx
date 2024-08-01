import limagas from './assets/images/limagas.png';
import gca from './assets/images/gca.png';
import medinet from './assets/images/medinet.png';
import aib from './assets/images/aib.png';
import ayq from './assets/images/ayq.png';
import tecmed from './assets/images/tecmed.png';

const Clients=()=>{
    return (
      <div className="bg-white py-24 sm:py-32" id="clients">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
              CLIENTES QUE CONFIAN EN NUESTROS PRODUCTOS Y SERVICIOS
          </h2>
          <div className="mx-auto mt-12 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              alt="GCA"
              src={gca}
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="Aib Agroindustrias"
              src={aib}
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="Medinet"
              src={medinet}
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="Lima gas"
              src={limagas}
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            />
            <img
              alt="Tec Med Equipos"
              src={tecmed}
              width={158}
              height={48}
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            />
            
          </div>
        </div>
      </div>
    );
  };

  export default Clients