import type { Metadata } from 'next';
import { Baby, Heart, Users, Home, Building2, Droplet, CheckCircle, Clock, MapPin, Star } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Servicios | Mikie Fisioterapia - Especializada en Mujeres',
  description:
    'Servicios especializados de fisioterapia para mujeres: prenatal, postparto, suelo pélvico, drenaje linfático y más. Asunción, Paraguay.',
  keywords: [
    'fisioterapia prenatal',
    'postparto',
    'suelo pélvico',
    'drenaje linfático',
    'mujeres',
    'embarazo',
    'Asunción',
  ],
};

const services = [
  {
    icon: Baby,
    title: 'Fisioterapia Prenatal',
    price: 'Gs. 220,000',
    duration: '60 minutos',
    description:
      'Acompañamiento especializado durante todo tu embarazo, con comprensión profunda de los cambios hormonales y biomecánicos únicos de cada trimestre.',
    benefits: [
      'Evaluación postural completa específica para embarazadas',
      'Manejo especializado del dolor pélvico y ciática',
      'Ejercicios seguros adaptados por trimestre',
      'Preparación del suelo pélvico para el parto',
      'Técnicas de relajación y respiración',
      'Prevención de diástasis de rectos',
      'Manejo de hinchazón y retención de líquidos',
      'Educación sobre cambios posturales',
    ],
    conditions: [
      'Dolor de espalda baja durante embarazo',
      'Ciática y dolor pélvico',
      'Síndrome del túnel carpiano gestacional',
      'Hinchazón de piernas y pies',
      'Tensión en cuello y hombros',
      'Preparación física para el parto',
    ],
    whySpecial: 'Como persona trans AFAB, entiendo íntimamente los cambios hormonales, las molestias específicas del embarazo y la ansiedad que puede generar. Mi experiencia personal me permite ofrecer empatía real y comprensión profunda.',
    color: 'bg-rose-50 border-rose-200',
    iconColor: 'text-rose-600',
  },
  {
    icon: Heart,
    title: 'Rehabilitación Postparto',
    price: 'Gs. 200,000',
    duration: '60 minutos',
    description:
      'Recuperación integral después del parto, enfocándose en la restauración funcional del cuerpo femenino con comprensión de los desafíos únicos del postparto.',
    benefits: [
      'Rehabilitación de cicatrices (cesárea/episiotomía)',
      'Fortalecimiento progresivo del core',
      'Corrección postural para lactancia',
      'Tratamiento de diástasis de rectos',
      'Retorno seguro al ejercicio',
      'Manejo de incontinencia postparto',
      'Tratamiento de dolor de espalda por lactancia',
      'Apoyo emocional durante la recuperación',
    ],
    conditions: [
      'Dolor abdominal postparto',
      'Debilidad del suelo pélvico',
      'Incontinencia urinaria',
      'Dolor de espalda por lactancia',
      'Cicatrices dolorosas',
      'Diástasis de rectos abdominales',
      'Fatiga muscular generalizada',
    ],
    whySpecial: 'Comprendo no solo la recuperación física, sino también el impacto emocional del postparto. Mi enfoque integral considera tanto el bienestar físico como el psicológico de la nueva madre.',
    color: 'bg-teal-50 border-teal-200',
    iconColor: 'text-teal-600',
  },
  {
    icon: Users,
    title: 'Fisioterapia de Suelo Pélvico',
    price: 'Gs. 200,000',
    duration: '45 minutos',
    description:
      'Tratamiento especializado para disfunciones del suelo pélvico, con un enfoque respetuoso y sin tabúes sobre la salud íntima femenina.',
    benefits: [
      'Evaluación funcional detallada',
      'Ejercicios de Kegel personalizados',
      'Técnicas de relajación pélvica',
      'Biofeedback para entrenamiento muscular',
      'Educación sobre anatomía pélvica',
      'Manejo de dolor pélvico crónico',
      'Preparación pre-quirúrgica',
      'Seguimiento post-quirúrgico',
    ],
    conditions: [
      'Incontinencia urinaria o fecal',
      'Prolapsos genitales',
      'Dolor pélvico crónico',
      'Vaginismo',
      'Disfunción sexual',
      'Post-cirugía ginecológica',
      'Endometriosis',
    ],
    whySpecial: 'Mi perspectiva trans AFAB me permite abordar temas íntimos sin prejuicios ni tabúes. Entiendo la importancia de crear un espacio completamente seguro para hablar de salud pélvica.',
    color: 'bg-sage-50 border-sage-200',
    iconColor: 'text-sage-600',
  },
  {
    icon: Droplet,
    title: 'Drenaje Linfático Terapéutico',
    price: 'Gs. 180,000',
    duration: '45 minutos',
    description:
      'Técnica manual especializada para mejorar la circulación linfática, reducir hinchazón y acelerar la recuperación post-quirúrgica.',
    benefits: [
      'Reducción de hinchazón y edemas',
      'Mejora de la circulación sanguínea',
      'Aceleración de cicatrización',
      'Relajación profunda',
      'Detoxificación natural',
      'Mejora del sistema inmunológico',
      'Reducción de celulitis',
      'Preparación pre-quirúrgica',
    ],
    conditions: [
      'Hinchazón durante embarazo',
      'Post-mastectomía (linfedema)',
      'Post-cirugía estética',
      'Retención de líquidos',
      'Celulitis',
      'Síndrome premenstrual severo',
      'Varices y problemas circulatorios',
    ],
    whySpecial: 'Mi técnica combina conocimiento anatómico profesional con comprensión empática de las necesidades específicas del cuerpo femenino en diferentes etapas de la vida.',
    color: 'bg-blue-50 border-blue-200',
    iconColor: 'text-blue-600',
  },
  {
    icon: Home,
    title: 'Atención Domiciliaria',
    price: 'Gs. 270,000',
    duration: '60 minutos',
    description:
      'Fisioterapia profesional en la comodidad de tu hogar, ideal para postparto, embarazo avanzado o situaciones que requieren máxima comodidad.',
    benefits: [
      'Comodidad total en tu hogar',
      'Equipamiento portátil profesional',
      'Mayor privacidad y confidencialidad',
      'Ahorro de tiempo y traslado',
      'Ambiente familiar relajante',
      'Flexibilidad de horarios',
      'Seguimiento personalizado',
      'Ideal para nuevas madres',
    ],
    conditions: [
      'Postparto inmediato',
      'Embarazo de alto riesgo',
      'Movilidad reducida',
      'Preferencia por privacidad',
      'Horarios difíciles',
      'Múltiples hijos pequeños',
    ],
    whySpecial: 'Entiendo la importancia de sentirse cómoda en tu propio espacio, especialmente durante momentos vulnerables como el postparto o embarazo avanzado.',
    color: 'bg-amber-50 border-amber-200',
    iconColor: 'text-amber-600',
  },
  {
    icon: Building2,
    title: 'Servicios Corporativos',
    price: 'Consultar',
    duration: 'Variable',
    description:
      'Bienestar laboral específicamente diseñado para empleadas mujeres, con protocolo 100% libre de acoso y comprensión de las necesidades femeninas.',
    benefits: [
      'Evaluación ergonómica específica para mujeres',
      'Pausas activas adaptadas para cuerpo femenino',
      'Manejo de estrés relacionado con ciclo menstrual',
      'Protocolo 0% acoso sexual garantizado',
      'Charlas sobre ergonomía femenina',
      'Descuentos grupales',
      'Horarios flexibles',
      'Programas de bienestar integral',
    ],
    conditions: [
      'Síndrome de oficina en mujeres',
      'Dolor por uso de tacones',
      'Tensión por cargar carteras pesadas',
      'Estrés laboral + hormonal',
      'Problemas posturales específicos',
      'Ergonomía inadecuada',
    ],
    whySpecial: 'Soy la única opción que elimina completamente el riesgo de situaciones incómodas en el ambiente laboral, permitiendo que las empleadas se sientan 100% seguras.',
    color: 'bg-purple-50 border-purple-200',
    iconColor: 'text-purple-600',
  },
];

const packages = [
  {
    title: 'Paquete Embarazo Completo',
    price: 'Gs. 1,800,000',
    originalPrice: 'Gs. 2,200,000',
    sessions: '6 sesiones prenatales + 4 postparto',
    description: 'Acompañamiento integral desde el segundo trimestre hasta la recuperación completa postparto.',
    includes: [
      '6 sesiones fisioterapia prenatal',
      '4 sesiones rehabilitación postparto',
      'Plan de ejercicios personalizado',
      'Seguimiento vía WhatsApp',
      'Material educativo exclusivo',
    ],
    savings: 'Ahorra Gs. 400,000',
  },
  {
    title: 'Paquete Suelo Pélvico',
    price: 'Gs. 900,000',
    originalPrice: 'Gs. 1,000,000',
    sessions: '5 sesiones especializadas',
    description: 'Tratamiento integral para disfunciones del suelo pélvico con seguimiento personalizado.',
    includes: [
      '5 sesiones fisioterapia pélvica',
      'Evaluación funcional completa',
      'Plan de ejercicios en casa',
      'Seguimiento telefónico',
      'Guía educativa digital',
    ],
    savings: 'Ahorra Gs. 100,000',
  },
  {
    title: 'Paquete Bienestar Mensual',
    price: 'Gs. 600,000/mes',
    originalPrice: 'Gs. 680,000',
    sessions: '4 sesiones mensuales',
    description: 'Mantenimiento mensual para mujeres que buscan bienestar continuo.',
    includes: [
      '4 sesiones fisioterapia general',
      'Flexibilidad de servicios',
      'Prioridad en agenda',
      'Descuento en servicios adicionales',
      'Consultas WhatsApp ilimitadas',
    ],
    savings: 'Ahorra Gs. 80,000/mes',
  },
];

export default function ServiciosPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Servicios
              <span className="text-teal-600"> Especializados</span>
              <br />
              para Mujeres
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Cada servicio está diseñado con comprensión profunda del cuerpo
              femenino, desde cambios hormonales hasta biomecánica específica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://wa.me/595991763400"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Agenda tu consulta
              </Link>
              <Link
                href="/contacto"
                className="border-2 border-teal-600 text-teal-700 hover:bg-teal-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Más información
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.title} className="max-w-7xl mx-auto">
                <div className={`${service.color} rounded-2xl p-8 border-2`}>
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Service Header */}
                    <div className="lg:col-span-2">
                      <div className="flex items-center mb-4">
                        <div className={`w-16 h-16 rounded-xl ${service.color} border-2 flex items-center justify-center mr-4`}>
                          <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900">
                            {service.title}
                          </h2>
                          <div className="flex items-center gap-4">
                            <p className="text-xl font-semibold text-gray-700">
                              {service.price}
                            </p>
                            <div className="flex items-center text-gray-600">
                              <Clock className="w-4 h-4 mr-1" />
                              <span className="text-sm">{service.duration}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Why Special */}
                      <div className="bg-white/80 rounded-lg p-4 mb-6 border border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          💡 ¿Por qué es especial mi enfoque?
                        </h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {service.whySpecial}
                        </p>
                      </div>
                    </div>

                    {/* Benefits & CTA */}
                    <div className="space-y-6">
                      <div className="bg-white rounded-lg p-6 border border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-4">
                          ✅ Qué incluye:
                        </h4>
                        <ul className="space-y-2">
                          {service.benefits.slice(0, 5).map((benefit) => (
                            <li key={benefit} className="flex items-start">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-white rounded-lg p-6 border border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-4">
                          🩺 Indicado para:
                        </h4>
                        <ul className="space-y-2">
                          {service.conditions.slice(0, 4).map((condition) => (
                            <li key={condition} className="flex items-start">
                              <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-sm text-gray-700">{condition}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        href={`https://wa.me/595991763400?text=Hola! Me interesa el servicio de ${service.title}. ¿Podrías darme más información?`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-teal-600 hover:bg-teal-700 text-white text-center py-3 px-4 rounded-lg font-semibold transition-colors"
                      >
                        Agendar {service.title}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-gradient-to-br from-sage-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Paquetes y <span className="text-teal-600">Promociones</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ahorra con nuestros paquetes especiales diseñados para acompañarte
              en cada etapa de tu bienestar.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div key={pkg.title} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {pkg.title}
                  </h3>
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-2xl font-bold text-teal-600">
                      {pkg.price}
                    </span>
                    {pkg.originalPrice && (
                      <span className="text-lg text-gray-500 line-through ml-2">
                        {pkg.originalPrice}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{pkg.sessions}</p>
                  {pkg.savings && (
                    <div className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full inline-block mt-2">
                      {pkg.savings}
                    </div>
                  )}
                </div>

                <p className="text-gray-700 mb-4 text-center">{pkg.description}</p>

                <ul className="space-y-2 mb-6">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start">
                      <Star className="w-4 h-4 text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`https://wa.me/595991763400?text=Hola! Me interesa el ${pkg.title}. ¿Podrías darme más detalles?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-sage-600 hover:bg-sage-700 text-white text-center py-3 rounded-lg font-semibold transition-colors"
                >
                  Consultar paquete
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Información Práctica
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-center justify-center">
                <MapPin className="w-6 h-6 text-teal-600 mr-3" />
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900">Ubicación</h3>
                  <p className="text-gray-600">
                    Villa Aurelia, Asunción, Paraguay
                    <br />
                    <span className="text-sm">(Dirección exacta por WhatsApp)</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Clock className="w-6 h-6 text-teal-600 mr-3" />
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900">Horarios</h3>
                  <p className="text-gray-600">
                    Lunes a Viernes: 08:00 - 18:00
                    <br />
                    Sábados: 08:00 - 12:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}