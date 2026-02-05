import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'María G.',
    condition: 'Mamá primeriza',
    text: 'Finalmente encontré a alguien que entiende lo que es ser mujer. Mikie me ayudó con mi recuperación postparto de una manera que ningún otro fisioterapeuta lo había hecho antes.',
    rating: 5,
    service: 'Rehabilitación Postparto',
    timeframe: 'Hace 2 meses',
  },
  {
    name: 'Ana L.',
    condition: 'Embarazo gemelar',
    text: 'Durante mis 8 meses de embarazo gemelar, Mikie fue mi salvación. Su comprensión del dolor pélvico y los cambios hormonales no tiene comparación.',
    rating: 5,
    service: 'Fisioterapia Prenatal',
    timeframe: 'Hace 6 meses',
  },
  {
    name: 'Carmen R.',
    condition: 'Post-mastectomía',
    text: 'Después de mi cirugía, tenía miedo de ir a fisioterapia. Con Mikie me sentí completamente segura y comprendida. Su empatía es genuina.',
    rating: 5,
    service: 'Rehabilitación Post-cirugía',
    timeframe: 'Hace 1 año',
  },
  {
    name: 'Sofía M.',
    condition: 'Deportista runner',
    text: 'Como mujer deportista, siempre tuve dolores que otros fisioterapeutas no entendían. Mikie conoce las diferencias específicas del cuerpo femenino en el deporte.',
    rating: 5,
    service: 'Fisioterapia Deportiva',
    timeframe: 'Hace 4 meses',
  },
  {
    name: 'Laura P.',
    condition: 'Trabajadora de oficina',
    text: 'Por primera vez pude hablar abiertamente sobre cómo mi ciclo menstrual afecta mis dolores de espalda. Mikie me dio herramientas específicas para cada momento del mes.',
    rating: 5,
    service: 'Fisioterapia Integral',
    timeframe: 'Hace 3 meses',
  },
  {
    name: 'Beatriz S.',
    condition: 'Tercera edad',
    text: 'A mis 58 años, pensé que mis dolores eran "normales de la edad". Mikie me demostró que entender los cambios de la menopausia hace toda la diferencia.',
    rating: 5,
    service: 'Fisioterapia Geriátrica',
    timeframe: 'Hace 5 meses',
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-sage-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Lo que dicen
            <span className="text-teal-600"> mis pacientes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Testimonios reales de mujeres que han experimentado la diferencia de
            una fisioterapia que realmente las entiende.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-200"
            >
              {/* Quote Icon */}
              <div className="flex items-center justify-between mb-4">
                <Quote className="w-8 h-8 text-teal-600" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Patient Info */}
              <div className="border-t pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.condition}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-teal-600 font-medium">
                      {testimonial.service}
                    </p>
                    <p className="text-xs text-gray-500">
                      {testimonial.timeframe}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">50+</div>
              <p className="text-gray-600 text-sm">
                Mujeres han recuperado su bienestar
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-sage-600 mb-2">98%</div>
              <p className="text-gray-600 text-sm">
                Recomendarían mis servicios
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-rose-600 mb-2">0</div>
              <p className="text-gray-600 text-sm">
                Situaciones de incomodidad
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-600 mb-2">24h</div>
              <p className="text-gray-600 text-sm">
                Tiempo promedio de respuesta
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-teal-600 to-sage-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Lista para ser la próxima en recuperar tu bienestar?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              No esperes más. Tu cuerpo se merece una fisioterapia que realmente
              te entienda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/595991763400?text=Hola! Leí los testimonios en tu página y me interesa agendar una consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Agenda tu primera consulta
              </a>
              <a
                href="tel:+595991763400"
                className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Llama ahora: +595 991 763 400
              </a>
            </div>
          </div>
        </div>

        {/* Privacy Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            * Todos los testimonios son reales. Los nombres han sido
            modificados por privacidad del paciente.
          </p>
        </div>
      </div>
    </section>
  );
}