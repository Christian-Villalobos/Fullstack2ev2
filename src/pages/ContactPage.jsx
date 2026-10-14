import { ContactTemplate } from '../components/templates/ContactTemplate';

const contactTitles = [
  { variant: "h1", content: "Contacto y Soporte", className: "titulo-principal" },
  { variant: "p", content: "¿Tienes dudas sobre un intercambio, una entrega o problemas con tu cuenta? Déjanos un mensaje.", className: "subtitulo" }
];

const contactCards = [
  {
    src: '/images/poe2-soldier.webp',
    alt: 'Soporte 24/7',
    title: 'Soporte 24/7',
    description: 'Atención personalizada para que tus orbes lleguen a salvo y a tiempo a tu alijo.'
  },
  {
    src: '/images/Path-of-Exile-Logo.webp',
    alt: 'Comunidad Oficial',
    title: 'Comunidad Oficial',
    description: 'Únete a nuestra comunidad para verificar cotizaciones y reputación en tiempo real.'
  }
];

const contactForm = {
  fields: [
    { label: "Nombre o IGN (In-Game Name)", type: "text", name: "name", placeholder: "Ej. Marauder99" },
    { label: "Correo electrónico", type: "email", name: "email", placeholder: "tu@correo.com" },
    { label: "Asunto", type: "text", name: "subject", placeholder: "¿En qué podemos ayudarte?" },
    { label: "Mensaje", type: "text", name: "message", placeholder: "Describe los detalles de tu consulta u orden..." }
  ],
  buttonText: "Enviar Mensaje",
  onSubmit: (data) => {
    alert(`¡Gracias por contactarnos, ${data.name || 'exiliado'}! Tu mensaje ha sido enviado correctamente.`);
  }
};

// Página: Suministra los datos reales al ContactTemplate
export function ContactPage({ navbar, footer }) {
  return (
    <ContactTemplate
      navbar={navbar}
      titles={contactTitles}
      contactCards={contactCards}
      form={contactForm}
      footer={footer}
    />
  );
}
