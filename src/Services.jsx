
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } 
from '@heroicons/react/24/outline'

const features = [
    {
      name: 'Asistencia remota y presencial',
      description:
        'Brindamos soporte a equipos de computo entre ellos: computadoras, portatiles, impresoras de inyeccion y matriciales',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Seguridad Electrónica',
      description:
        'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
      icon: LockClosedIcon,
    },
    {
      name: 'Infraestructura ',
      description:
        'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
      icon: ArrowPathIcon,
    },
    {
      name: 'Desarrollo de páginas web',
      description:
        'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
      icon: FingerPrintIcon,
    },
  ]





const Services = () => {
  return (
  <div className="bg-white pt-20 sm:pt-20" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-[#ea0a2a]">Nuestros Servicios</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
           En Inversiones Tecnológicas W&L SAC,
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Ofrecemos una amplia cartera de servicios informáticos
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#ea0a2a]">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Services;