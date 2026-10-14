import { LegalTemplate } from '../components/templates/LegalTemplate';

const termsSections = [
  {
    title: "1. Aceptación de los términos",
    content: "Al registrarte o utilizar Path of Exile Currency Exchange, aceptas plenamente estos Términos y Condiciones. Si no estás de acuerdo con alguno de ellos, te pedimos que no uses la plataforma."
  },
  {
    title: "2. Naturaleza del servicio",
    content: "Path of Exile Currency Exchange es una plataforma de intermediación para el intercambio de divisas virtuales del videojuego Path of Exile (Divine Orbs, Chaos Orbs, Mirror of Kalandra, etc.). Los orbes y objetos intercambiados son bienes virtuales sin valor monetario legal. Grinding Gear Games no patrocina ni avala esta plataforma."
  },
  {
    title: "3. Elegibilidad",
    content: "Para usar esta plataforma debes tener al menos 13 años de edad. Al registrarte, declaras que cumples con este requisito y que dispones de una cuenta activa en Path of Exile."
  },
  {
    title: "4. Conducta del usuario",
    content: "Está estrictamente prohibido: intentar estafar o engañar a otros usuarios, usar bots o scripts para automatizar intercambios, crear cuentas falsas o suplantación de identidad. El incumplimiento resultará en la suspensión permanente de la cuenta."
  },
  {
    title: "5. Responsabilidad de las transacciones",
    content: "Path of Exile Currency Exchange actúa como plataforma de intermediación. Una vez que confirmas un intercambio y este se completa dentro del juego, la transacción es definitiva. Recomendamos siempre verificar la reputación del vendedor antes de concretar."
  },
  {
    title: "6. Limitación de responsabilidad",
    content: "No nos hacemos responsables por pérdidas de divisas debidas a cambios en las mecánicas del juego, actualizaciones de Grinding Gear Games, sanciones impuestas por el desarrollador, ni por eventos de fuerza mayor que impidan completar un intercambio acordado."
  },
  {
    title: "7. Modificaciones",
    content: "Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Los cambios entrarán en vigor 7 días después de su publicación en la plataforma. El uso continuado del servicio implica la aceptación de los nuevos términos."
  }
];

// Página: Suministra el contenido de Términos al LegalTemplate
export function TermsPage({ navbar, footer }) {
  return (
    <LegalTemplate
      navbar={navbar}
      pageTitle="Términos y Condiciones"
      sections={termsSections}
      footer={footer}
    />
  );
}
