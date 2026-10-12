import { Navbar } from '../organisms/Navbar';
import { Texts } from '../molecules/Texts';
import { TextsImages } from '../molecules/TextsImages';
import { ImageCards } from '../molecules/ImageCards';
import { Footer } from '../organisms/Footer';

// Template para la página Quiénes Somos:
// Define la estructura visual sin contener datos fijos.
export function AboutTemplate({ navbar, titles, intros, teamTitle, team, footer }) {
    return (
        <div className="about-template">
            {/* 1. Barra superior */}
            <Navbar {...navbar} />

            {/* 2. Título principal y subtítulo */}
            {titles && <Texts texts={titles} />}

            {/* 3. Historia / Misión (bloques de texto + imagen) */}
            {intros && <TextsImages textsImages={intros} />}

            {/* 4. Sección de equipo / valores */}
            {team && (
                <section className="about-team-section">
                    {teamTitle && <h2 className="about-team-title">{teamTitle}</h2>}
                    <ImageCards items={team} className="team-cards-grid" />
                </section>
            )}

            {/* 5. Footer */}
            {footer && <Footer {...footer} />}
        </div>
    );
}
