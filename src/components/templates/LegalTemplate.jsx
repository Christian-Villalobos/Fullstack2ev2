import { Navbar } from '../organisms/Navbar';
import { Footer } from '../organisms/Footer';
import { Text } from '../atoms/Text';

// Template reutilizable para páginas legales (Privacidad, Términos, etc.)
// sections: [{ title: string, content: string }]
export function LegalTemplate({ navbar, pageTitle, sections, footer }) {
    return (
        <div className="legal-template">
            {/* 1. Barra superior */}
            <Navbar {...navbar} />

            {/* 2. Contenido legal */}
            <main className="legal-content">
                <Text variant="h1" className="titulo-principal">{pageTitle}</Text>

                {sections && sections.map((section, index) => (
                    <section key={index} className="legal-section">
                        {section.title && (
                            <Text variant="h2" className="legal-section-title">
                                {section.title}
                            </Text>
                        )}
                        <Text variant="p" className="legal-section-text">
                            {section.content}
                        </Text>
                    </section>
                ))}
            </main>

            {/* 3. Footer */}
            {footer && <Footer {...footer} />}
        </div>
    );
}
