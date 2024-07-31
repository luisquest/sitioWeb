import { CheckIcon } from '@heroicons/react/20/solid'

const includedFeatures = [
  'Soporte presencial y remoto',
  'Mantenimiento preventivo',
  'Mantenimiento correctivo',
  'Propuestas de mejoras',
]

const Plans=()=> {
  return (
    <div className="bg-white py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl sm:text-center">
          <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Elige el plan en TI que mejor se ajuste </h3>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Descubre nuestros servicios adaptados a tus necesidades con tres planes flexibles y disfruta de soluciones personalizadas que maximizan tus resultados. <br /> <b>¡Estamos aquí para ayudarte a alcanzar el éxito!</b>
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Plan básico </h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
            Para computadoras y laptops, resolvemos problemas de hardware, software, y redes, asegurando un rendimiento óptimo y una rápida recuperación ante fallos. En el caso de impresoras, gestionamos desde la configuración inicial hasta la resolución de problemas de impresión, conexión y mantenimiento. 
            </p>
            <div className="mt-8 flex items-center gap-x-4">
              <h3 className="flex-none text-sm font-semibold leading-6 text-[#ea0a2a]">Ofrecemos</h3>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-[#ea0a2a]" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">Precio incluyen IGV</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">s/149.00</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600"> Soles</span>
                </p>
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md bg-[#000] px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#ea0a2a] "
                >
                  Consultar
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Invoices and receipts available for easy company reimbursement
                </p>
              </div>
            </div>
          </div>
        </div>


        

      </div>
    </div>
  );
};
export  default Plans