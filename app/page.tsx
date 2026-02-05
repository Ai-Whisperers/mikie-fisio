import { Heart, Award, Users, Phone } from 'lucide-react';
import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { About } from '@/components/sections/about';
import { Testimonials } from '@/components/sections/testimonials';
import { CTA } from '@/components/sections/cta';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Hero />

      {/* Value Propositions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir Mikie Fisioterapia?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La única fisioterapia en Asunción que realmente entiende el cuerpo
              femenino
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Comprensión Única
              </h3>
              <p className="text-gray-600">
                Como persona trans AFAB, Mikie combina profesionalismo con
                comprensión íntima del cuerpo femenino.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-sage-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Ambiente 100% Seguro
              </h3>
              <p className="text-gray-600">
                Protocolo cero acoso. Elimina completamente la incomodidad con
                terapeutas masculinos tradicionales.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Especialización Femenina
              </h3>
              <p className="text-gray-600">
                Servicios específicos: prenatal, postparto, suelo pélvico,
                drenaje linfático y más.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <Services />

      {/* About Section */}
      <About />

      {/* Testimonials */}
      <Testimonials />

      {/* Call to Action */}
      <CTA />

      {/* Contact Info Bar */}
      <section className="bg-sage-700 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <Phone className="w-5 h-5 mr-2" />
              <span className="font-medium">
                WhatsApp: +595 991 763 400
              </span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm opacity-90">
                Asunción, Paraguay • Atención de Lunes a Viernes
              </p>
              <p className="text-sm opacity-90">08:00 - 18:00hs</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}