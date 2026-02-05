import Link from 'next/link';
import { Heart, Shield, Award, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="hero-gradient min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="flex items-center space-x-2 text-sm">
                <Shield className="w-5 h-5 text-teal-600" />
                <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full font-medium">
                  Protocolo 0% Acoso Sexual
                </span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Fisioterapia
                  <span className="text-teal-600 block">
                    Especializada
                  </span>
                  <span className="text-sage-700">para Mujeres</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-600 max-w-lg">
                  La única perspectiva en Asunción que{' '}
                  <strong className="text-gray-900">
                    realmente entiende
                  </strong>{' '}
                  el cuerpo femenino.
                </p>
              </div>

              {/* Value Props */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Heart className="w-6 h-6 text-rose-500" />
                  <span className="text-lg text-gray-700">
                    Comprensión trans AFAB única en Paraguay
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-sage-600" />
                  <span className="text-lg text-gray-700">
                    Especialista en prenatal, postparto y suelo pélvico
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-teal-600" />
                  <span className="text-lg text-gray-700">
                    Ambiente 100% seguro y libre de incomodidad
                  </span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://wa.me/595991763400"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Agenda tu Consulta
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>

                <Link
                  href="/servicios"
                  className="border-2 border-sage-600 text-sage-700 hover:bg-sage-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
                >
                  Ver Servicios
                </Link>
              </div>

              {/* Urgency/Social Proof */}
              <div className="bg-white/80 backdrop-blur rounded-lg p-4 border border-teal-200">
                <p className="text-sm text-gray-600 mb-2">
                  <strong className="text-gray-900">
                    ⚡ Agenda limitada
                  </strong>{' '}
                  - Solo 8 pacientes por semana
                </p>
                <p className="text-sm text-teal-700">
                  📱 WhatsApp: +595 991 763 400
                </p>
              </div>
            </div>

            {/* Image/Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-400 to-sage-500 rounded-2xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-lg p-8 transform -rotate-3">
                  <div className="text-center space-y-6">
                    {/* Placeholder for professional photo */}
                    <div className="w-32 h-32 bg-gradient-to-br from-teal-100 to-sage-100 rounded-full mx-auto flex items-center justify-center">
                      <Heart className="w-16 h-16 text-teal-600" />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Mikie Moyano Nakamura
                      </h3>
                      <p className="text-gray-600">
                        Fisioterapeuta especializada en mujeres
                      </p>
                    </div>

                    <div className="text-sm text-gray-500 space-y-1">
                      <p>🎓 Estudiante de último año — Fisioterapia</p>
                      <p>♀️ Especialista en salud femenina</p>
                      <p>🏥 Asunción, Paraguay</p>
                    </div>

                    <div className="bg-teal-50 rounded-lg p-3">
                      <p className="text-xs text-teal-800 font-medium">
                        "La fisioterapia que las mujeres estaban esperando"
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-rose-100 rounded-full p-3 animate-bounce">
                <Heart className="w-6 h-6 text-rose-600" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-sage-100 rounded-full p-3 animate-pulse">
                <Shield className="w-6 h-6 text-sage-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}