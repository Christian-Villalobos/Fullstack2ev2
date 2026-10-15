import { useEffect, useState } from 'react';
import { ProfileTemplate } from '../components/templates/ProfileTemplate';
import { getCurrentUser, getUsers, deleteUser } from '../services/auth';

// Página: busca quién inició sesión y le entrega los datos al template
export function ProfilePage({ navbar, footer }) {
    // Usuario con la sesión iniciada (o null si no hay)
    const user = getCurrentUser();

    // CAMBIO: la lista de usuarios ahora vive en un estado.
    // Así, cuando borramos a alguien, React vuelve a dibujar la tabla con la lista nueva.
    // Solo el administrador carga la lista; los demás empiezan con una lista vacía.
    const [users, setUsers] = useState(() => (user && user.role === 'admin' ? getUsers() : []));

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

    // NUEVO: se ejecuta al presionar "Eliminar" en una fila de la tabla
    const handleDeleteUser = (email) => {
        // Seguridad extra: solo un administrador puede eliminar usuarios
        if (user.role !== 'admin') {
            return;
        }

        // confirm() abre un cuadro con "Aceptar" y "Cancelar". Devuelve true si aceptan.
        const confirmed = window.confirm(`¿Seguro que quieres eliminar a ${email}?`);
        if (!confirmed) {
            return;
        }

        // Borramos el usuario y mostramos el mensaje
        const result = deleteUser(email);
        alert(result.message);

        // Volvemos a leer la lista actualizada para que la tabla se refresque
        setUsers(getUsers());
    };

    // Título y subtítulo: cambian según el rol
    const titles = [
        {
            variant: "h1",
            content: user.role === 'admin' ? 'Panel de Administrador' : 'Mi Perfil',
            className: "titulo-principal"
        },
        { variant: "p", content: `Bienvenido, ${user.name}`, className: "subtitulo" }
    ];

    return (
        <ProfileTemplate
            navbar={navbar}
            titles={titles}
            user={user}
            users={users}
            onDeleteUser={handleDeleteUser}
            footer={footer}
        />
    );
}