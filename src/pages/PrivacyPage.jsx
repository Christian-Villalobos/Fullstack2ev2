import { LegalTemplate } from '../components/templates/LegalTemplate';

const privacySections = [
  {
    title: "1. Información que recopilamos",
    content: "Recopilamos únicamente la información que nos proporcionas voluntariamente al registrarte en la plataforma: nombre de usuario (IGN), dirección de correo electrónico y contraseña cifrada. No almacenamos datos bancarios ni de tarjetas de crédito."
  },
  {
    title: "2. Uso de la información",
    content: "La información recopilada se utiliza exclusivamente para gestionar tu cuenta, procesar tus intercambios de divisas (orbes) y enviarte notificaciones relacionadas con tus transacciones en Path of Exile Currency Exchange. No compartimos ni vendemos tus datos a terceros."
  },
  {
    title: "3. Cookies y sesión",
    content: "Utilizamos cookies de sesión estrictamente necesarias para mantener tu inicio de sesión activo mientras navegas en la plataforma. No empleamos cookies de rastreo ni publicidad de terceros."
  },
  {
    title: "4. Seguridad de los datos",
    content: "Todos los datos de tu cuenta están protegidos mediante cifrado. Aplicamos buenas prácticas de seguridad para proteger tu información frente a accesos no autorizados. Sin embargo, recuerda nunca compartir tu contraseña con otros jugadores."
  },
  {
    title: "5. Derechos del usuario",
    content: "Tienes derecho a solicitar en cualquier momento el acceso, rectificación o eliminación de tus datos personales. Para ejercerlos, contáctanos a través de la sección de Contacto de la plataforma."
  },
  {
    title: "6. Cambios en la política",
    content: "Nos reservamos el derecho de actualizar esta política de privacidad. Cualquier cambio será notificado a través del correo electrónico registrado en tu cuenta con al menos 7 días de antelación."
  }
];

// Página: Suministra el contenido de Privacidad al LegalTemplate
export function PrivacyPage({ navbar, footer }) {
  return (
    <LegalTemplate
      navbar={navbar}
      pageTitle="Política de Privacidad"
      sections={privacySections}
      footer={footer}
    />
  );
}
