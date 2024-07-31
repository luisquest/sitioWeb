import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Soporte Técnico.',
    description:
      'Con un equipo de expertos dedicados, brindamos soluciones efectivas y personalizadas para cada tipo de dispositivo, garantizando la máxima eficiencia y satisfacción del cliente.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Infraestructura y cloud.',
    description: 'Nos encargamos de la instalación y configuración de servidores, adaptándolos a las necesidades específicas de tu empresa. Además, ofrecemos mantenimiento proactivo para prevenir fallos, realizar actualizaciones y asegurar la seguridad y estabilidad del sistema.',
    icon: LockClosedIcon,
  },
  {
    name: 'Seguridad Electrónica.',
    description: 'abarca la instalación, configuración y mantenimiento de cámaras de seguridad, sistemas de control de acceso y control de asistencia. Implementamos soluciones avanzadas para monitorear y proteger tus instalaciones con cámaras de alta definición, asegurando una vigilancia continua y efectiva. Los sistemas de control de acceso permiten gestionar de manera segura el ingreso a áreas restringidas, mientras que nuestras soluciones de control de asistencia optimizan el seguimiento y la gestión del tiempo de tus empleados. Con un enfoque integral y personalizado, garantizamos una protección robusta y una gestión eficiente de tus recursos.',
    icon: ServerIcon,
  },
]

const Servicestwo=()=> {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Estamos comprometidos</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">En brindar servicios de calidad</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Brindamos un servicio de calidad, con un enfoque personalizado para garantizar tu total satisfacción y el funcionamiento óptimo de tus sistemas. <b>Tu tranquilidad es nuestra prioridad.</b>
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
};
export default Servicestwo