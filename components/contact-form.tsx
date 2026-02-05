'use client';

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
    preferredTime: '',
    urgency: 'normal',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    'Consulta general',
    'Fisioterapia prenatal',
    'Rehabilitación postparto',
    'Fisioterapia de suelo pélvico',
    'Drenaje linfático',
    'Atención domiciliaria',
    'Servicio corporativo',
    'Primera consulta (20% OFF)',
  ];

  const timeSlots = [
    'Mañana (08:00 - 12:00)',
    'Tarde (13:00 - 17:00)',
    'Flexible',
    'Fin de semana',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create WhatsApp message
    const whatsappMessage = `
🩺 *Nueva Consulta - Fisioterapia Mujeres*

👤 *Paciente:* ${formData.name}
📞 *Teléfono:* ${formData.phone}
📧 *Email:* ${formData.email}

🏥 *Servicio solicitado:* ${formData.service}
⏰ *Horario preferido:* ${formData.preferredTime}
🚨 *Urgencia:* ${formData.urgency === 'urgent' ? 'URGENTE' : 'Normal'}

💬 *Mensaje:*
${formData.message}

---
*Enviado desde el formulario web*
`.trim();

    // Open WhatsApp with pre-filled message
    const phoneNumber = '595991763400';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank');

    setIsSubmitted(true);
    setIsSubmitting(false);

    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: '',
        preferredTime: '',
        urgency: 'normal',
      });
    }, 5000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-green-800 mb-3">
          ¡Mensaje enviado exitosamente!
        </h3>
        <p className="text-green-700 mb-4">
          Tu consulta se abrió automáticamente en WhatsApp. Si no se abrió, puedes enviar el mensaje manualmente a:
        </p>
        <a
          href="https://wa.me/595991763400"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 font-semibold hover:text-green-700"
        >
          +595 991 763 400
        </a>
        <p className="text-sm text-green-600 mt-3">
          Me contactaré contigo dentro de las próximas 2 horas.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Personal Info */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Nombre completo *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            placeholder="Tu nombre completo"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Teléfono/WhatsApp *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            placeholder="+595 9XX XXX XXX"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          placeholder="tu.email@ejemplo.com"
        />
      </div>

      {/* Service Selection */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
            Servicio de interés *
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          >
            <option value="">Selecciona un servicio</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
            Horario preferido
          </label>
          <select
            id="preferredTime"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          >
            <option value="">Selecciona horario</option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Urgency */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Urgencia del caso
        </label>
        <div className="flex space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="urgency"
              value="normal"
              checked={formData.urgency === 'normal'}
              onChange={handleInputChange}
              className="mr-2 text-teal-600 focus:ring-teal-500"
            />
            <span className="text-gray-700">Normal</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="urgency"
              value="urgent"
              checked={formData.urgency === 'urgent'}
              onChange={handleInputChange}
              className="mr-2 text-rose-600 focus:ring-rose-500"
            />
            <span className="text-gray-700">Urgente</span>
          </label>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Mensaje adicional
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          placeholder="Cuéntame sobre tu situación, síntomas, o cualquier pregunta que tengas..."
        />
      </div>

      {/* Privacy Notice */}
      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
        <p className="text-sm text-gray-600">
          🔒 <strong>Privacidad garantizada:</strong> Toda la información compartida es confidencial y está protegida bajo secreto médico. 
          Solo será utilizada para brindar el mejor cuidado posible.
        </p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center ${
          isSubmitting
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-teal-600 hover:bg-teal-700 hover:shadow-lg'
        }`}
      >
        {isSubmitting ? (
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
        ) : (
          <Send className="w-5 h-5 mr-2" />
        )}
        {isSubmitting ? 'Enviando...' : 'Enviar consulta por WhatsApp'}
      </button>

      <p className="text-sm text-gray-500 text-center">
        Al hacer clic en "Enviar", se abrirá WhatsApp con tu mensaje pre-escrito para confirmar el envío.
      </p>
    </form>
  );
}