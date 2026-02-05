import Link from 'next/link';
import { Heart, Phone, MapPin, Clock, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <Heart className="h-8 w-8 text-teal-400 mr-2" />
              <div className="text-xl font-bold">
                Mikie
                <span className="text-teal-400 ml-1">Fisioterapia</span>
              </div>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              Fisioterapia especializada para mujeres en Asunción. La única
              perspectiva que realmente entiende el cuerpo femenino.
            </p>
            <p className="text-sm text-gray-400">
              <strong>Mikie Moyano Nakamura</strong> - Fisioterapeuta
              especializado en salud femenina.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/servicios"
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre-mi"
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  Sobre Mí
                </Link>
              </li>
              <li>
                <Link
                  href="/empresas"
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  Servicios Corporativos
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-teal-400" />
                <a
                  href="https://wa.me/595991763400"
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  +595 991 763 400
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 text-teal-400 mt-1" />
                <span className="text-gray-300">
                  Villa Aurelia, Asunción
                  <br />
                  Paraguay
                </span>
              </li>
              <li className="flex items-start">
                <Clock className="h-4 w-4 mr-2 text-teal-400 mt-1" />
                <span className="text-gray-300">
                  Lun - Vie: 08:00 - 18:00
                  <br />
                  Sáb: 08:00 - 12:00
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-teal-400" />
                <span className="text-gray-300">
                  consultas@mikiefisio.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Services Highlight */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <h4 className="text-lg font-semibold mb-4 text-center">
            Servicios Especializados
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-center">
            <div className="text-gray-300">
              <div className="text-teal-400 font-medium">Prenatal</div>
              <div>Fisioterapia para embarazadas</div>
            </div>
            <div className="text-gray-300">
              <div className="text-teal-400 font-medium">Postparto</div>
              <div>Recuperación integral</div>
            </div>
            <div className="text-gray-300">
              <div className="text-teal-400 font-medium">Suelo Pélvico</div>
              <div>Rehabilitación especializada</div>
            </div>
            <div className="text-gray-300">
              <div className="text-teal-400 font-medium">Drenaje</div>
              <div>Linfático terapéutico</div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Mikie Fisioterapia. Todos los derechos reservados.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-teal-400 transition-colors"
            >
              Política de Privacidad
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-teal-400 transition-colors"
            >
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}