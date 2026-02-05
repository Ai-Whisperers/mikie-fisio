import { Heart, Baby, Users, Home, Building2, Droplet } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Baby,
    title: 'Fisioterapia Prenatal',
    description:
      'Acompañamiento especializado durante el embarazo. Manejo de dolor pélvico, ciática y preparación para el parto.',
    price: 'Gs. 220,000',
    features: [
      'Evaluación postural completa',
      'Ejercicios seguros por trimestre',
      'Preparación suelo pélvico',
      'Manejo dolor ciática',
    ],
    color: 'bg-rose-50 border-rose-200',
    iconColor: 'text-rose-600',
  },
  {
    icon: Heart,
    title: 'Rehabilitación Postparto',
    description:
      'Recuperación integral después del parto. Fortalecimiento core, cicatrices y vuelta al deporte.',
    price: 'Gs. 200,000',
    features: [
      'Recuperación cesárea/episiotomía',
      'Fortalecimiento abdominal',
      'Corrección postural lactancia',
      'Retorno seguro al ejercicio',
    ],
    color: 'bg-teal-50 border-teal-200',
    iconColor: 'text-teal-600',
  },
  {
    icon: Users,
    title: 'Fisioterapia Suelo Pélvico',
    description:
      'Tratamiento especializado para incontinencia, prolapsos y disfunciones del suelo pélvico.',
    price: 'Gs. 200,000',
    features: [
      'Evaluación funcional completa',
      'Ejercicios personalizados',
      'Técnicas de relajación',
      'Educación en anatomía pélvica',
    ],
    color: 'bg-sage-50 border-sage-200',
    iconColor: 'text-sage-600',
  },
  {
    icon: Droplet,
    title: 'Drenaje Linfático',
    description:
      'Técnica especializada para reducir hinchazón, mejorar circulación y acelerar recuperación.',
    price: 'Gs. 180,000',
    features: [
      'Post-cirugía (mastectomía, estética)',
      'Hinchazón embarazo/postparto',
      'Mejora de circulación',
      'Relajación profunda',
    ],
    color: 'bg-blue-50 border-blue-200',
    iconColor: 'text-blue-600',
  },
  {
    icon: Home,
    title: 'Atención Domiciliaria',
    description:
      'Fisioterapia en la comodidad de tu hogar. Ideal para postparto y tratamientos de seguimiento.',
    price: 'Gs. 270,000',
    features: [
      'Atención en tu hogar',
      'Equipamiento portátil',
      'Mayor privacidad',
      'Ahorro de tiempo traslado',
    ],
    color: 'bg-amber-50 border-amber-200',
    iconColor: 'text-amber-600',
  },
  {
    icon: Building2,
    title: 'Servicios Corporativos',
    description:
      'Bienestar laboral específico para mujeres. Ergonomía, pausas activas y prevención de lesiones.',
    price: 'Consultar',
    features: [
      'Evaluación ergonómica femenina',
      'Pausas activas especializadas',
      'Protocolo 0 acoso garantizado',
      'Descuentos grupos',
    ],
    color: 'bg-purple-50 border-purple-200',
    iconColor: 'text-purple-600',
  },
];

export function Services() {
  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Servicios
            <span className="text-teal-600"> Especializados</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada servicio está diseñado específicamente para las necesidades
            únicas del cuerpo femenino, desde la comprensión hormonal hasta la
            biomecánica específica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`${service.color} rounded-xl p-6 border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-in`}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="flex items-center mb-4">
                <div
                  className={`w-12 h-12 rounded-lg ${service.color} border-2 ${service.color.replace(
                    'bg-',
                    'border-'
                  )} flex items-center justify-center mr-4`}
                >
                  <service.icon className={`w-6 h-6 ${service.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-lg font-semibold text-gray-700">
                    {service.price}
                  </p>
                </div>
              </div>

              <p className="text-gray-600 mb-4">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Special Offers */}
        <div className="bg-gradient-to-r from-teal-600 to-sage-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Promociones Especiales</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/20 rounded-lg p-4">
              <h4 className="text-lg font-semibold mb-2">
                Primera Consulta 20% OFF
              </h4>
              <p className="text-sm opacity-90">
                Evaluación inicial completa por Gs. 160,000 (precio normal: Gs.
                200,000)
              </p>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <h4 className="text-lg font-semibold mb-2">
                Paquete Prenatal Completo
              </h4>
              <p className="text-sm opacity-90">
                6 sesiones prenatales + 4 postparto por Gs. 1,800,000 (ahorra
                Gs. 400,000)
              </p>
            </div>
          </div>
          <div className="mt-6">
            <Link
              href="https://wa.me/595991763400?text=Hola! Me interesa conocer más sobre las promociones especiales."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Consultar Promociones
            </Link>
          </div>
        </div>

        {/* CTA to Services Page */}
        <div className="text-center mt-12">
          <Link
            href="/servicios"
            className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold text-lg"
          >
            Ver todos los servicios en detalle
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}