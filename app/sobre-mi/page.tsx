import type { Metadata } from 'next';
import { Heart, Award, Users, Shield, Target, BookOpen, Lightbulb, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sobre Mí | Mikie Moyano Nakamura - Fisioterapeuta Especializada',
  description:
    'Conoce la historia de Mikie Moyano Nakamura, la única fisioterapeuta trans AFAB en Paraguay especializada en salud femenina.',
  keywords: [
    'Mikie Moyano',
    'fisioterapeuta',
    'trans AFAB',
    'especialista mujeres',
    'Paraguay',
    'salud femenina',
  ],
};

const values = [
  {
    icon: Heart,
    title: 'Empatía Real',
    description:
      'Mi experiencia personal me permite entender verdaderamente los desafíos del cuerpo femenino, desde los cambios hormonales hasta las inseguridades únicas.',
  },
  {
    icon: Shield,
    title: 'Ambiente Seguro',
    description:
      'Garantizo un espacio 100% libre de incomodidad, donde puedas sentirte completamente relajada y confiada durante tu tratamiento.',
  },
  {
    icon: Users,
    title: 'Comunicación Sin Tabúes',
    description:
      'Hablo abiertamente sobre temas que otros evitan: salud pélvica, cambios hormonales, sexualidad e intimidad, sin prejuicios ni juicios.',
  },
  {
    icon: Target,
    title: 'Enfoque Personalizado',
    description:
      'Cada mujer es única. Adapto mis tratamientos considerando tu historia personal, objetivos específicos y comodidad individual.',
  },
];

const journey = [
  {
    year: '2019-2025',
    title: 'Licenciatura en Fisioterapia',
    description:
      'Formación universitaria completa con especialización en biomecánica y rehabilitación funcional.',
    highlight: 'Graduación Enero 2027',
  },
  {
    year: '2023-2024',
    title: 'Especialización en Salud Femenina',
    description:
      'Cursos específicos en fisioterapia prenatal, postparto y rehabilitación del suelo pélvico.',
    highlight: 'Certificación Internacional',
  },
  {
    year: '2024-2025',
    title: 'Práctica Especializada',
    description:
      'Más de 300 horas de práctica específica con mujeres en diferentes etapas: embarazo, postparto, tercera edad.',
    highlight: '+50 Pacientes Atendidas',
  },
  {
    year: '2025',
    title: 'Apertura de Consulta Especializada',
    description:
      'Lanzamiento de la primera consulta en Paraguay 100% dedicada a la fisioterapia femenina.',
    highlight: 'Primera en Paraguay',
  },
];

const achievements = [
  'Única fisioterapeuta trans AFAB en Paraguay',
  'Especialización en fisioterapia prenatal y postparto',
  'Más de 50 mujeres han confiado en mi tratamiento',
  'Protocolo 0% acoso sexual desarrollado y aplicado',
  'Tasa de satisfacción del 98% según encuestas',
  'Certificación en drenaje linfático terapéutico',
  'Formación continua en salud pélvica femenina',
  'Respuesta WhatsApp promedio: menos de 2 horas',
];

const whyTrans = [
  {
    title: 'Experiencia Hormonal Vivida',
    description:
      'He experimentado personalmente los efectos de los cambios hormonales en el cuerpo, lo que me da una comprensión única de cómo afectan la postura, el dolor y la función muscular.',
  },
  {
    title: 'Comprensión de la Anatomía Femenina',
    description:
      'Mi conocimiento del cuerpo AFAB viene tanto de la educación profesional como de la experiencia personal, creando una perspectiva integral imposible de replicar.',
  },
  {
    title: 'Empatía con la Incomodidad',
    description:
      'Entiendo perfectamente la vulnerabilidad que sienten las mujeres con terapeutas masculinos, porque yo mismo he estado en esa posición.',
  },
  {
    title: 'Comunicación Sin Prejuicios',
    description:
      'Mi propia experiencia navegando temas de identidad y cuerpo me permite hablar sin tabúes sobre cualquier aspecto de la salud femenina.',
  },
];

export default function SobreMiPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-48 h-48 bg-gradient-to-br from-teal-100 to-sage-100 rounded-full p-8 shadow-xl">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <Heart className="w-16 h-16 text-teal-600 mx-auto mb-2" />
                    <div className="text-sm text-gray-600 font-medium">
                      Mikie Moyano
                      <br />
                      Nakamura
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Hola, soy
              <span className="text-teal-600"> Mikie</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              La única fisioterapeuta en Paraguay que combina formación
              profesional con{' '}
              <strong className="text-gray-900">experiencia trans AFAB</strong>,
              creando un espacio verdaderamente seguro para la salud femenina.
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="bg-white/80 backdrop-blur rounded-lg p-4 border border-teal-200">
                <h3 className="font-semibold text-gray-900 mb-2">
                  🎓 Formación Profesional
                </h3>
                <p className="text-sm text-gray-700">
                  Estudiante de último año de Fisioterapia — Enfoque en Salud Femenina
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur rounded-lg p-4 border border-sage-200">
                <h3 className="font-semibold text-gray-900 mb-2">
                  💡 Perspectiva Única
                </h3>
                <p className="text-sm text-gray-700">
                  Trans AFAB = Comprensión vivida del cuerpo femenino
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mi Historia */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Mi Historia: ¿Por qué la
              <span className="text-teal-600"> fisioterapia femenina?</span>
            </h2>

            <div className="prose prose-lg max-w-none">
              <div className="bg-sage-50 border-l-4 border-sage-400 p-6 rounded-r-lg mb-8">
                <p className="text-lg leading-relaxed text-gray-700 italic">
                  "Durante años, como persona AFAB, experimenté la incomodidad
                  de recibir fisioterapia de terapeutas masculinos. Sabía que
                  había una brecha enorme en el mercado: mujeres que necesitaban
                  fisioterapia pero se sentían incómodas, incomprendidas o
                  juzgadas."
                </p>
                <p className="text-right text-gray-600 mt-2 not-italic font-medium">
                  - Mikie Moyano Nakamura
                </p>
              </div>

              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  Mi camino hacia la fisioterapia especializada en mujeres
                  comenzó con una experiencia personal. Como hombre trans (AFAB
                  - Assigned Female At Birth), he vivido en ambos lados de la
                  perspectiva de género, y esto me ha dado una comprensión única
                  del cuerpo femenino que va más allá de lo que cualquier
                  textbook puede enseñar.
                </p>

                <p className="text-lg leading-relaxed">
                  Durante mi transición y mi formación como fisioterapeuta, me
                  di cuenta de que existía una necesidad no satisfecha en el
                  mercado paraguayo:{' '}
                  <strong className="text-gray-900">
                    mujeres que necesitaban fisioterapia pero se sentían
                    incómodas o incomprendidas
                  </strong>{' '}
                  con los enfoques tradicionales.
                </p>

                <p className="text-lg leading-relaxed">
                  He experimentado personalmente los cambios hormonales, los
                  dolores menstruales, las fluctuaciones de energía, y las
                  vulnerabilidades específicas del cuerpo femenino. Esta
                  experiencia vivida, combinada con mi formación profesional, me
                  permite ofrecer algo que nadie más en Paraguay puede: una
                  fisioterapia que realmente, genuinamente, entiende a las
                  mujeres.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué ser Trans me hace diferente */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              ¿Por qué mi perspectiva
              <span className="text-teal-600"> trans AFAB</span> es una ventaja?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {whyTrans.map((reason, index) => (
                <div
                  key={reason.title}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {reason.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-teal-600 to-sage-600 rounded-xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">El Resultado:</h3>
              <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                Una fisioterapia donde las mujeres pueden hablar sin tabúes
                sobre su cuerpo, sentirse completamente seguras, y recibir
                tratamiento de alguien que realmente entiende lo que están
                viviendo porque lo ha vivido también.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mi Formación y Experiencia */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Mi Formación y
              <span className="text-teal-600"> Experiencia</span>
            </h2>

            <div className="space-y-8">
              {journey.map((step, index) => (
                <div
                  key={step.year}
                  className="flex items-start space-x-6 relative"
                >
                  {/* Timeline line */}
                  {index < journey.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-16 bg-teal-200"></div>
                  )}

                  {/* Timeline dot */}
                  <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {index + 1}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {step.title}
                        </h3>
                        <span className="text-sm font-medium text-teal-600 bg-teal-100 px-3 py-1 rounded-full">
                          {step.year}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-3">{step.description}</p>
                      <div className="inline-block bg-sage-100 text-sage-800 text-sm font-medium px-3 py-1 rounded-full">
                        {step.highlight}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mis Valores */}
      <section className="py-20 bg-gradient-to-br from-sage-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Mis Valores y
              <span className="text-teal-600"> Compromisos</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                      <value.icon className="w-6 h-6 text-teal-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Logros y Reconocimientos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Logros y
              <span className="text-teal-600"> Reconocimientos</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement}
                  className="flex items-start space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mi Misión */}
      <section className="py-20 bg-gradient-to-r from-sage-600 to-teal-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Lightbulb className="w-16 h-16 mx-auto mb-6 text-teal-200" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Mi Misión</h2>
            <blockquote className="text-xl md:text-2xl leading-relaxed italic mb-8">
              "Crear el primer espacio en Paraguay donde las mujeres puedan
              recibir fisioterapia sintiéndose completamente seguras, entendidas
              y libres de cualquier incomodidad o juicio."
            </blockquote>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl mb-2">🛡️</div>
                <h3 className="font-semibold mb-2">Seguridad Total</h3>
                <p className="text-sm opacity-90">
                  Protocolo 0% acoso garantizado
                </p>
              </div>
              <div>
                <div className="text-3xl mb-2">💬</div>
                <h3 className="font-semibold mb-2">Comunicación Abierta</h3>
                <p className="text-sm opacity-90">Sin tabúes ni prejuicios</p>
              </div>
              <div>
                <div className="text-3xl mb-2">❤️</div>
                <h3 className="font-semibold mb-2">Empatía Genuina</h3>
                <p className="text-sm opacity-90">
                  Comprensión real del cuerpo femenino
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ¿Lista para una fisioterapia que
              <span className="text-teal-600"> realmente te entienda?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Agenda tu primera consulta y experimenta la diferencia de ser
              tratada por alguien que verdaderamente comprende tu cuerpo y tus
              necesidades.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://wa.me/595991763400?text=Hola Mikie! Leí tu historia en la página web y me interesa agendar una consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                <Heart className="w-5 h-5 mr-2" />
                Agenda tu consulta
              </Link>
              <Link
                href="/servicios"
                className="border-2 border-teal-600 text-teal-700 hover:bg-teal-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Ver mis servicios
              </Link>
            </div>

            <p className="text-sm text-gray-500 mt-6">
              Primera consulta con 20% OFF • Solo 8 cupos por semana disponibles
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}