import type { Metadata } from 'next';
import { Building2, Shield, Users, Heart, CheckCircle, Star, Clock, Target } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Servicios Corporativos | Mikie Fisioterapia - Bienestar Laboral Femenino',
  description:
    'Servicios de fisioterapia corporativa especializados para empleadas mujeres. Protocolo 0% acoso, ergonomía femenina y bienestar laboral integral.',
  keywords: [
    'fisioterapia corporativa',
    'bienestar laboral femenino',
    'empresas',
    'empleadas mujeres',
    'ergonomía',
    'Paraguay',
  ],
};

const packages = [
  {
    name: 'Básico',
    price: 'Gs. 800,000',
    originalPrice: 'Gs. 1,000,000',
    duration: 'mensual',
    employees: '10-25 empleadas',
    description: 'Ideal para empresas pequeñas que quieren comenzar con bienestar femenino',
    features: [
      '4 sesiones individuales por mes',
      '1 charla grupal sobre ergonomía femenina',
      'Evaluaciones posturales básicas',
      'Protocolo 0% acoso garantizado',
      'WhatsApp de consultas',
      'Material educativo digital',
    ],
    highlight: 'Más Popular',
    color: 'bg-teal-50 border-teal-200',
    badgeColor: 'bg-teal-600',
  },
  {
    name: 'Estándar',
    price: 'Gs. 1,400,000',
    originalPrice: 'Gs. 1,800,000',
    duration: 'mensual',
    employees: '25-50 empleadas',
    description: 'Perfecto para empresas medianas con enfoque en salud preventiva',
    features: [
      '8 sesiones individuales por mes',
      '2 charlas educativas especializadas',
      'Pausas activas semanales grupales',
      'Evaluaciones ergonómicas completas',
      'Protocolo embarazo en el trabajo',
      'Seguimiento personalizado',
      'Reportes de bienestar mensual',
      'Descuento 15% servicios adicionales',
    ],
    highlight: 'Mejor Valor',
    color: 'bg-sage-50 border-sage-200',
    badgeColor: 'bg-sage-600',
  },
  {
    name: 'Premium',
    price: 'Gs. 1,900,000',
    originalPrice: 'Gs. 2,500,000',
    duration: 'mensual',
    employees: '50+ empleadas',
    description: 'Solución integral para grandes empresas comprometidas con sus empleadas',
    features: [
      '12 sesiones individuales por mes',
      '4 charlas especializadas variadas',
      'Pausas activas diarias',
      'Evaluaciones ergonómicas premium',
      'Protocolo integral salud femenina',
      'Fisioterapeuta on-site 1 día/semana',
      'Programa de maternidad y postparto',
      'Reportes ejecutivos detallados',
      'Descuento 25% todos los servicios',
      'Línea directa 24/7',
    ],
    highlight: 'Premium',
    color: 'bg-rose-50 border-rose-200',
    badgeColor: 'bg-rose-600',
  },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: 'Protocolo 0% Acoso Sexual',
    description: 'Como fisioterapeuta trans AFAB, elimino completamente el riesgo de situaciones incómodas para las empleadas.',
    benefit: 'Mayor confianza y participación de empleadas',
  },
  {
    icon: Heart,
    title: 'Comprensión del Cuerpo Femenino',
    description: 'Entiendo los desafíos específicos: tacones, carteras pesadas, ciclo menstrual, embarazo laboral.',
    benefit: 'Soluciones específicas y efectivas',
  },
  {
    icon: Users,
    title: 'Ambiente Profesional Femenino',
    description: 'Las empleadas pueden hablar libremente sobre dolencias íntimas sin incomodidad ni vergüenza.',
    benefit: 'Mejor diagnóstico y adherencia al tratamiento',
  },
  {
    icon: Target,
    title: 'Ergonomía Específicamente Femenina',
    description: 'Evaluaciones que consideran diferencias anatómicas, calzado femenino y necesidades específicas.',
    benefit: 'Prevención más efectiva de lesiones laborales',
  },
];

const services = [
  {
    title: 'Evaluaciones Ergonómicas Especializadas',
    description: 'Análisis del puesto de trabajo considerando las diferencias anatómicas y necesidades específicas del cuerpo femenino.',
    includes: [
      'Evaluación de altura de escritorio vs anatomía femenina',
      'Análisis del impacto de calzado (tacones) en postura',
      'Ergonomía específica para embarazadas',
      'Adaptaciones para diferentes fases del ciclo menstrual',
    ],
  },
  {
    title: 'Charlas Educativas Especializadas',
    description: 'Conferencias adaptadas a las necesidades específicas de empleadas mujeres.',
    includes: [
      '"Ergonomía femenina: más allá del escritorio"',
      '"Manejo del estrés laboral + síndrome premenstrual"',
      '"Trabajar durante el embarazo: guía completa"',
      '"Vuelta al trabajo post-maternidad"',
    ],
  },
  {
    title: 'Pausas Activas Específicas para Mujeres',
    description: 'Ejercicios diseñados considerando ropa de trabajo femenina, tacones y necesidades específicas.',
    includes: [
      'Rutinas adaptadas para vestimenta formal femenina',
      'Ejercicios para aliviar tensión por tacones',
      'Estiramientos discretos para uso con falda/vestido',
      'Relajación para síndrome premenstrual',
    ],
  },
  {
    title: 'Protocolo de Embarazo Laboral',
    description: 'Plan integral para empleadas embarazadas, desde adaptaciones ergonómicas hasta preparación para licencia.',
    includes: [
      'Adaptación del puesto de trabajo por trimestre',
      'Ejercicios seguros durante horario laboral',
      'Coordinación con RRHH para licencias',
      'Plan de retorno post-maternidad',
    ],
  },
];

const clientTypes = [
  {
    industry: 'Call Centers',
    employees: '300-600 empleadas',
    needs: 'Síndrome de oficina intenso, turnos largos, estrés por metas',
    examples: 'Teleperformance, Sitel Paraguay',
    solutions: 'Pausas activas cada 2h, evaluaciones ergonómicas intensivas',
  },
  {
    industry: 'Bancos',
    employees: '100-300 empleadas',
    needs: 'Uso obligatorio tacones, atención al cliente, estrés financiero',
    examples: 'Banco Itaú, Visión Banco, Banco Continental',
    solutions: 'Ergonomía específica tacones, manejo estrés laboral',
  },
  {
    industry: 'Centros Comerciales',
    employees: '200-400 empleadas',
    needs: 'Trabajo de pie prolongado, calzado formal, horarios extensos',
    examples: 'Shopping del Sol, Mariscal López Shopping',
    solutions: 'Ejercicios para trabajo de pie, cuidado de extremidades',
  },
  {
    industry: 'Clínicas y Hospitales',
    employees: '150-500 enfermeras/auxiliares',
    needs: 'Levantamiento de peso, turnos rotativos, estrés emocional',
    examples: 'Hospital Bautista, Clínica Francesa',
    solutions: 'Prevención lesiones levantamiento, manejo fatiga',
  },
];

export default function EmpresasPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white rounded-full p-4 shadow-lg">
                <Building2 className="w-12 h-12 text-teal-600" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Bienestar Laboral
              <span className="text-teal-600"> Especializado</span>
              <br />
              para Empleadas Mujeres
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              La primera empresa en Paraguay que ofrece fisioterapia corporativa 
              <strong className="text-gray-900"> 100% libre de acoso</strong> 
              con comprensión real de las necesidades femeninas en el trabajo.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/80 backdrop-blur rounded-lg p-4 border border-teal-200">
                <Shield className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">0% Acoso</h3>
                <p className="text-sm text-gray-700">Protocolo garantizado</p>
              </div>
              <div className="bg-white/80 backdrop-blur rounded-lg p-4 border border-sage-200">
                <Users className="w-8 h-8 text-sage-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Solo Mujeres</h3>
                <p className="text-sm text-gray-700">Enfoque 100% femenino</p>
              </div>
              <div className="bg-white/80 backdrop-blur rounded-lg p-4 border border-rose-200">
                <Heart className="w-8 h-8 text-rose-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Comprensión Real</h3>
                <p className="text-sm text-gray-700">Experiencia trans AFAB</p>
              </div>
            </div>

            <Link
              href="#packages"
              className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Ver Paquetes Corporativos
            </Link>
          </div>
        </div>
      </section>

      {/* Por qué elegir nuestros servicios */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              ¿Por qué somos
              <span className="text-teal-600"> diferentes?</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {whyChooseUs.map((reason, index) => (
                <div key={reason.title} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <reason.icon className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {reason.title}
                      </h3>
                      <p className="text-gray-700 mb-3">{reason.description}</p>
                      <div className="bg-teal-50 border border-teal-200 rounded-lg p-3">
                        <p className="text-sm text-teal-800 font-medium">
                          💡 Beneficio: {reason.benefit}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Paquetes */}
      <section id="packages" className="py-20 bg-gradient-to-br from-sage-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Paquetes <span className="text-teal-600">Corporativos</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Planes flexibles diseñados para empresas de todos los tamaños que priorizan el bienestar de sus empleadas.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <div key={pkg.name} className={`${pkg.color} rounded-xl p-6 border-2 relative overflow-hidden`}>
                {pkg.highlight && (
                  <div className={`absolute top-4 right-4 ${pkg.badgeColor} text-white text-sm font-medium px-3 py-1 rounded-full`}>
                    {pkg.highlight}
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-3xl font-bold text-gray-900">{pkg.price}</span>
                    <span className="text-lg text-gray-500 line-through ml-2">{pkg.originalPrice}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">por {pkg.duration}</p>
                  <p className="text-sm font-medium text-gray-700">{pkg.employees}</p>
                </div>

                <p className="text-gray-700 mb-6 text-center">{pkg.description}</p>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`https://wa.me/595991763400?text=Hola! Me interesa el paquete corporativo ${pkg.name} para mi empresa. ¿Podrían darme más información?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-teal-600 hover:bg-teal-700 text-white text-center py-3 rounded-lg font-semibold transition-colors"
                >
                  Solicitar {pkg.name}
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white rounded-xl p-6 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                ¿Empresa con más de 100 empleadas?
              </h3>
              <p className="text-gray-700 mb-4">
                Creamos planes personalizados para grandes corporaciones con necesidades específicas.
              </p>
              <Link
                href="https://wa.me/595991763400?text=Hola! Somos una empresa grande (+100 empleadas) y nos interesa un plan corporativo personalizado."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sage-600 hover:bg-sage-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Solicitar Plan Personalizado
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Incluidos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Servicios <span className="text-teal-600">Incluidos</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={service.title} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start">
                        <Star className="w-4 h-4 text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Empresas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Sectores que <span className="text-teal-600">Atendemos</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {clientTypes.map((client, index) => (
                <div key={client.industry} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {client.industry}
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-gray-600">Empleadas típicas:</span>
                      <p className="text-gray-700">{client.employees}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-600">Necesidades principales:</span>
                      <p className="text-gray-700">{client.needs}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-600">Ejemplos:</span>
                      <p className="text-gray-700 font-medium">{client.examples}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-600">Soluciones específicas:</span>
                      <p className="text-teal-700 font-medium">{client.solutions}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-sage-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Lista para ser la primera empresa en Paraguay 
              <span className="text-teal-200"> que realmente cuida a sus empleadas?</span>
            </h2>
            
            <p className="text-xl leading-relaxed mb-8 opacity-90">
              Conviértete en referente de bienestar laboral femenino. 
              Tus empleadas lo notarán, tu productividad mejorará, y tu empresa brillará.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl mb-2">📈</div>
                <h3 className="font-semibold mb-2">Mayor Productividad</h3>
                <p className="text-sm opacity-90">Empleadas más cómodas trabajan mejor</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">👩‍💼</div>
                <h3 className="font-semibold mb-2">Retención de Talento</h3>
                <p className="text-sm opacity-90">Las mejores empleadas quieren quedarse</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🏆</div>
                <h3 className="font-semibold mb-2">Imagen Corporativa</h3>
                <p className="text-sm opacity-90">Ser pionero en bienestar femenino</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://wa.me/595991763400?text=Hola! Soy de RRHH de una empresa y me interesa implementar fisioterapia corporativa especializada para nuestras empleadas mujeres."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Solicitar Propuesta Comercial
              </Link>
              <Link
                href="/contacto"
                className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Más Información
              </Link>
            </div>

            <p className="text-sm opacity-75 mt-6">
              Evaluación inicial gratuita • Implementación en 7 días • Garantía de satisfacción
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}