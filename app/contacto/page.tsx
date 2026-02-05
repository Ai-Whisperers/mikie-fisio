import type { Metadata } from 'next';
import { Phone, MessageCircle, MapPin, Clock, Mail, Send, Heart } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';

export const metadata: Metadata = {
  title: 'Contacto | Mikie Fisioterapia - Agenda tu consulta',
  description:
    'Contacta con Mikie Fisioterapia para agendar tu consulta. WhatsApp, teléfono y formulario de contacto disponibles.',
  keywords: [
    'contacto',
    'agendar',
    'consulta',
    'WhatsApp',
    'fisioterapia',
    'mujeres',
    'Asunción',
  ],
};

export default function ContactoPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Agenda tu
              <span className="text-teal-600"> Consulta</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Estoy aquí para ayudarte. Elige la forma de contacto que más te convenga.
            </p>
            
            <div className="bg-white/80 backdrop-blur rounded-lg p-6 border border-teal-200 max-w-md mx-auto">
              <div className="flex items-center justify-center mb-3">
                <Heart className="w-6 h-6 text-rose-600 mr-2" />
                <span className="font-semibold text-gray-900">Primera consulta 20% OFF</span>
              </div>
              <p className="text-sm text-gray-700">
                Evaluación completa + plan de tratamiento
                <br />
                <span className="text-lg font-bold text-teal-600">Gs. 160,000</span> 
                <span className="text-gray-500 line-through ml-2">Gs. 200,000</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Formas de <span className="text-teal-600">Contacto</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* WhatsApp - Primary */}
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  WhatsApp
                </h3>
                <p className="text-gray-700 mb-4">
                  La forma más rápida de contactarme. Respuesta promedio en menos de 2 horas.
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-lg font-bold text-green-700">+595 991 763 400</p>
                  <p className="text-sm text-gray-600">Disponible 24/7</p>
                </div>
                <a
                  href="https://wa.me/595991763400?text=Hola! Me interesa agendar una consulta de fisioterapia especializada para mujeres."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Escribir ahora
                </a>
              </div>

              {/* Phone */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Teléfono
                </h3>
                <p className="text-gray-700 mb-4">
                  Para consultas inmediatas o si prefieres hablar directamente.
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-lg font-bold text-blue-700">+595 991 763 400</p>
                  <p className="text-sm text-gray-600">Lun-Vie: 08:00-18:00<br />Sáb: 08:00-12:00</p>
                </div>
                <a
                  href="tel:+595991763400"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Llamar ahora
                </a>
              </div>

              {/* Email */}
              <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Email
                </h3>
                <p className="text-gray-700 mb-4">
                  Para consultas detalladas o si prefieres escribir con calma.
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-lg font-bold text-purple-700">consultas@mikiefisio.com</p>
                  <p className="text-sm text-gray-600">Respuesta en 24hs</p>
                </div>
                <a
                  href="mailto:consultas@mikiefisio.com?subject=Consulta sobre fisioterapia especializada&body=Hola Mikie, me interesa conocer más sobre tus servicios de fisioterapia para mujeres."
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Enviar email
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Formulario de Contacto
                </h3>
                <p className="text-gray-600 mb-6">
                  Completa el formulario y me contactaré contigo dentro de 24 horas para coordinar tu cita.
                </p>
                <ContactForm />
              </div>

              {/* Info & Map */}
              <div className="space-y-8">
                {/* Location */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    Ubicación y Horarios
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-teal-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Dirección</h4>
                        <p className="text-gray-700">
                          Villa Aurelia, Asunción, Paraguay
                        </p>
                        <p className="text-sm text-gray-600">
                          (Dirección exacta se envía por WhatsApp al confirmar cita)
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Clock className="w-6 h-6 text-teal-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Horarios de Atención</h4>
                        <div className="text-gray-700 space-y-1">
                          <p>Lunes a Viernes: 08:00 - 18:00</p>
                          <p>Sábados: 08:00 - 12:00</p>
                          <p>Domingos: Cerrado</p>
                        </div>
                        <p className="text-sm text-teal-700 mt-2 font-medium">
                          📱 WhatsApp disponible 24/7 para emergencias
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-gray-100 rounded-lg p-8 text-center border-2 border-dashed border-gray-300">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">
                    Mapa de Ubicación
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Al confirmar tu cita, recibirás la ubicación exacta y el enlace a Google Maps.
                  </p>
                  <div className="text-sm text-gray-500">
                    📍 Villa Aurelia, zona accesible y segura
                    <br />
                    🚗 Estacionamiento disponible
                    <br />
                    🚌 Cerca de paradas de transporte público
                  </div>
                </div>

                {/* Important Notes */}
                <div className="bg-sage-50 border border-sage-200 rounded-lg p-6">
                  <h4 className="font-semibold text-sage-800 mb-3">
                    📋 Información Importante
                  </h4>
                  <ul className="space-y-2 text-sm text-sage-700">
                    <li>• <strong>Citas solo con reserva previa</strong></li>
                    <li>• <strong>Cancelaciones:</strong> avisar con 24hs de anticipación</li>
                    <li>• <strong>Vestimenta:</strong> ropa cómoda y suelta</li>
                    <li>• <strong>Primera vez:</strong> llegar 15 min antes</li>
                    <li>• <strong>Pagos:</strong> efectivo, transferencia o tarjeta</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ rápidas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              Preguntas Frecuentes
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">
                  ¿Puedo ir acompañada a la primera cita?
                </h4>
                <p className="text-gray-700 text-sm">
                  Absolutamente. Muchas pacientes vienen acompañadas, especialmente en la primera consulta. Es normal y bienvenido.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">
                  ¿Qué debo traer a mi primera cita?
                </h4>
                <p className="text-gray-700 text-sm">
                  Ropa cómoda, estudios médicos previos (si los tienes), y una lista de medicamentos que tomas actualmente.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">
                  ¿Atienden emergencias o urgencias?
                </h4>
                <p className="text-gray-700 text-sm">
                  Para urgencias reales, contacta por WhatsApp. Evalúo cada caso y, si es necesario, hago espacio en la agenda.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">
                  ¿Trabajas con obras sociales o seguros?
                </h4>
                <p className="text-gray-700 text-sm">
                  Actualmente es servicio privado, pero puedo proporcionar factura para reembolsos según tu cobertura médica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-sage-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Lista para sentirte completamente cómoda durante tu fisioterapia?
            </h3>
            <p className="text-lg mb-8 opacity-90">
              No postergues más tu bienestar. Agenda ahora y descubre la diferencia de una fisioterapia que realmente te entiende.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/595991763400?text=Hola Mikie! Vi tu página web y me interesa agendar una consulta. ¿Cuándo tienes disponibilidad?"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp: +595 991 763 400
              </a>
              
              <a
                href="tel:+595991763400"
                className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Llamar ahora
              </a>
            </div>

            <p className="text-sm opacity-75 mt-6">
              Primera consulta 20% OFF • Solo 8 cupos por semana • Respuesta en menos de 2 horas
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}