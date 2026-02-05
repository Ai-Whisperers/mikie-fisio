import { Award, Heart, Users, Shield, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const achievements = [
  {
    icon: Award,
    title: 'Licenciado en Fisioterapia',
    description: 'Título universitario con especialización en salud femenina',
  },
  {
    icon: Heart,
    title: 'Perspectiva Trans AFAB',
    description: 'Comprensión única del cuerpo femenino desde adentro',
  },
  {
    icon: Users,
    title: '+50 Mujeres Atendidas',
    description: 'Experiencia real con pacientes de todas las edades',
  },
  {
    icon: Shield,
    title: 'Protocolo 0 Acoso',
    description: 'Ambiente 100% seguro y profesional garantizado',
  },
];

const whyDifferent = [
  'Comprensión íntima de los cambios hormonales femeninos',
  'Experiencia personal con dolor menstrual y ciclos',
  'Empatía real hacia la incomodidad con terapeutas masculinos',
  'Conocimiento vivido de las diferencias biomecánicas',
  'Ambiente sin prejuicios sobre el cuerpo femenino',
  'Comunicación sin tabúes sobre salud íntima',
];

export function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  ¿Por qué soy
                  <span className="text-teal-600"> diferente?</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Como persona trans AFAB, tengo una perspectiva única que
                  combina{' '}
                  <strong className="text-gray-900">
                    formación profesional
                  </strong>{' '}
                  con{' '}
                  <strong className="text-gray-900">
                    comprensión vivida
                  </strong>{' '}
                  del cuerpo femenino.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Lo que hace única mi práctica:
                </h3>
                <ul className="space-y-3">
                  {whyDifferent.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-teal-600 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-sage-50 border border-sage-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-sage-800 mb-3">
                  💡 Mi Misión
                </h4>
                <p className="text-sage-700">
                  "Crear un espacio donde las mujeres se sientan completamente
                  seguras, entendidas y libres de incomodidad durante su
                  tratamiento de fisioterapia. Porque entender el cuerpo
                  femenino va más allá de la teoría."
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/sobre-mi"
                  className="border-2 border-teal-600 text-teal-700 hover:bg-teal-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Conoce mi historia completa
                </Link>
                <Link
                  href="https://wa.me/595991763400"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sage-600 hover:bg-sage-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Agenda tu consulta
                </Link>
              </div>
            </div>

            {/* Visual/Stats */}
            <div className="space-y-8">
              {/* Professional Photo Placeholder */}
              <div className="relative">
                <div className="bg-gradient-to-br from-teal-100 to-sage-100 rounded-2xl p-8 text-center">
                  <div className="w-48 h-48 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <div className="text-center">
                      <Heart className="w-16 h-16 text-teal-600 mx-auto mb-2" />
                      <div className="text-sm text-gray-600">
                        Foto profesional
                        <br />
                        Mikie Moyano
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Mikie Moyano Nakamura
                  </h3>
                  <p className="text-gray-600">
                    Fisioterapeuta especializada en mujeres
                  </p>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  🏆 Única en PY
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-rose-50 border border-rose-200 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-rose-600">8+</div>
                  <div className="text-sm text-rose-700">
                    Años de formación especializada
                  </div>
                </div>
                <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-teal-600">100%</div>
                  <div className="text-sm text-teal-700">
                    Enfoque en mujeres
                  </div>
                </div>
                <div className="bg-sage-50 border border-sage-200 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-sage-600">0</div>
                  <div className="text-sm text-sage-700">
                    Casos de incomodidad reportados
                  </div>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-amber-600">24/7</div>
                  <div className="text-sm text-amber-700">
                    WhatsApp disponible
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Credenciales y Experiencia
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.title}
                  className="text-center p-4 bg-white rounded-lg border border-gray-200 hover:border-teal-300 transition-colors"
                >
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-8 h-8 text-teal-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Signals */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-sage-600 to-teal-600 text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                ¿Por qué las mujeres confían en mí?
              </h3>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl mb-2">🤝</div>
                  <h4 className="font-semibold mb-2">Comprensión Real</h4>
                  <p className="text-sm opacity-90">
                    Experiencia vivida del cuerpo femenino, no solo teórica
                  </p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🛡️</div>
                  <h4 className="font-semibold mb-2">Ambiente Seguro</h4>
                  <p className="text-sm opacity-90">
                    Cero riesgo de incomodidad o situaciones inadecuadas
                  </p>
                </div>
                <div>
                  <div className="text-3xl mb-2">💬</div>
                  <h4 className="font-semibold mb-2">Comunicación Abierta</h4>
                  <p className="text-sm opacity-90">
                    Sin tabúes, sin prejuicios sobre el cuerpo femenino
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}