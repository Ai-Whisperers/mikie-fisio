'use client';

import { MessageCircle } from 'lucide-react';

export function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      'Hola! Me interesa conocer más sobre los servicios de fisioterapia especializada para mujeres.'
    );
    window.open(
      `https://wa.me/595991763400?text=${message}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="whatsapp-float"
      aria-label="Contactar por WhatsApp"
      title="¡Agenda tu consulta por WhatsApp!"
    >
      <MessageCircle className="w-8 h-8" />
    </button>
  );
}