import { MessageCircle, Phone, Calendar, ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-teal-600 via-sage-600 to-teal-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA Content */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Lista para sentirte
              <span className="text-teal-200"> completamente cómoda</span>
              <br />
              durante tu tratamiento?
            </h2>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              No postergues más tu bienestar. Agenda tu primera consulta y
              descubre la diferencia de una fisioterapia que realmente te
              entiende.
            </p>
          </div>

          {/* Urgency/Scarcity */}
          <div className="bg-white/20 backdrop-blur rounded-lg p-6 mb-8 border border-white/30">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-left mb-4 md:mb-0">
                <h3 className="text-lg font-semibold mb-2">
                  ⚡ Agenda limitada - Solo 8 pacientes por semana
                </h3>
                <p className="text-sm opacity-90">
                  Para garantizar atención personalizada de calidad
                </p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">2</div>
                <div className="text-sm opacity-90">cupos disponibles</div>
                <div className="text-sm opacity-90">esta semana</div>
              </div>
            </div>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* WhatsApp - Primary */}
            <a
              href="https://wa.me/595991763400?text=Hola! Me interesa agendar una consulta de fisioterapia especializada para mujeres."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 rounded-xl p-6 transition-all duration-300 transform hover:scale-105 group"
            >
              <MessageCircle className="w-8 h-8 mb-4 mx-auto group-hover:animate-bounce" />
              <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
              <p className="text-sm opacity-90 mb-3">
                Respuesta inmediata
                <br />
                +595 991 763 400
              </p>
              <div className="flex items-center justify-center text-sm font-medium">
                Escribir ahora
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+595991763400"
              className="bg-white/20 hover:bg-white/30 border-2 border-white/50 rounded-xl p-6 transition-all duration-300 transform hover:scale-105 group"
            >
              <Phone className="w-8 h-8 mb-4 mx-auto group-hover:animate-pulse" />
              <h3 className="text-lg font-semibold mb-2">Llamada</h3>
              <p className="text-sm opacity-90 mb-3">
                Lun - Vie: 08:00 - 18:00
                <br />
                Sáb: 08:00 - 12:00
              </p>
              <div className="flex items-center justify-center text-sm font-medium">
                Llamar ahora
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </a>

            {/* Contact Form */}
            <a
              href="/contacto"
              className="bg-white/20 hover:bg-white/30 border-2 border-white/50 rounded-xl p-6 transition-all duration-300 transform hover:scale-105 group"
            >
              <Calendar className="w-8 h-8 mb-4 mx-auto group-hover:animate-pulse" />
              <h3 className="text-lg font-semibold mb-2">Formulario</h3>
              <p className="text-sm opacity-90 mb-3">
                Agenda online
                <br />
                Respuesta en 24hs
              </p>
              <div className="flex items-center justify-center text-sm font-medium">
                Completar form
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </a>
          </div>

          {/* First Consultation Offer */}
          <div className="bg-gradient-to-r from-rose-500 to-pink-600 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">
              🎁 Primera Consulta 20% OFF
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-left mb-4 md:mb-0">
                <p className="text-lg mb-2">
                  Evaluación completa + plan de tratamiento
                </p>
                <div className="flex items-center">
                  <span className="text-2xl font-bold mr-3">Gs. 160,000</span>
                  <span className="text-lg line-through opacity-75">
                    Gs. 200,000
                  </span>
                </div>
              </div>
              <a
                href="https://wa.me/595991763400?text=¡Hola! Me interesa la promoción de primera consulta con 20% OFF."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-rose-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Aprovechar promoción
              </a>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="grid md:grid-cols-3 gap-6 text-center text-sm opacity-90">
            <div>
              <div className="text-2xl mb-2">🛡️</div>
              <p>
                <strong>100% Seguro</strong>
                <br />
                Protocolo 0 acoso garantizado
              </p>
            </div>
            <div>
              <div className="text-2xl mb-2">💬</div>
              <p>
                <strong>Sin tabúes</strong>
                <br />
                Comunicación abierta y empática
              </p>
            </div>
            <div>
              <div className="text-2xl mb-2">⚡</div>
              <p>
                <strong>Respuesta rápida</strong>
                <br />
                WhatsApp 24/7 disponible
              </p>
            </div>
          </div>

          {/* Final Message */}
          <div className="mt-12 max-w-2xl mx-auto">
            <p className="text-lg opacity-90 italic">
              "Tu cuerpo se merece una fisioterapia que realmente te entienda.
              No esperes más para sentirte cómoda y segura durante tu
              tratamiento."
            </p>
            <p className="text-base mt-4 opacity-75">
              - Mikie Moyano Nakamura, Fisioterapeuta especializada en mujeres
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}