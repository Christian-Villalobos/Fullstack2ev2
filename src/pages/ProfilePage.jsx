import { useEffect } from 'react';
import { ProfileTemplate } from '../components/templates/ProfileTemplate';
import { getCurrentUser, getUsers } from '../services/auth';

// Página: busca quién inició sesión y le entrega los datos al template
export function ProfilePage({ navbar, footer }) {
    // Usuario con la sesión iniciada (o null si no hay)
    const user = getCurrentUser();

    // Si no hay sesión, mandamos a la persona a la página de login.
    // useEffect se ejecuta después de mostrar la página, por eso va aquí
    useEffect(() => {
        if (!user) {
            window.location.hash = '#login';
        }
    }, [user]);

    // Mientras tanto no dibujamos nada
    if (!user) {
        return null;
    }

    // Título y subtítulo: cambian según el rol
    const titles = [
        {
            variant: "h1",
            content: user.role === 'admin' ? 'Panel de Administrador' : 'Mi Perfil',
            className: "titulo-principal"
        },
        { variant: "p", content: `Bienvenido, ${user.name}`, className: "subtitulo" }
    ];

    // La lista de usuarios solo se carga si es administrador
    const users = user.role === 'admin' ? getUsers() : [];

    return (
        <ProfileTemplate
            navbar={navbar}
            titles={titles}
            user={user}
            users={users}
            footer={footer}
        />
    );
}