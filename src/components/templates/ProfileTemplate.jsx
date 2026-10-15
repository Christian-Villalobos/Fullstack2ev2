import { Navbar } from '../organisms/Navbar';
import { Texts } from '../molecules/Texts';
import { ProfileCard } from '../organisms/ProfileCard';
import { UserList } from '../organisms/UserList';
import { Footer } from '../organisms/Footer';

// Template: solo define DÓNDE va cada pieza en la página de perfil
// onDeleteUser se pasa hacia abajo hasta el botón de UserList
export function ProfileTemplate({ navbar, titles, user, users, onDeleteUser, footer }) {
    return (
        <div className="profile-template">
            {/* 1. Barra superior */}
            <Navbar {...navbar} />

            {/* 2. Título y subtítulo */}
            {titles && <Texts texts={titles} />}

            {/* 3. Tarjeta con los datos del usuario (la ven todos) */}
            <ProfileCard user={user} />

            {/* 4. Lista de usuarios: SOLO se muestra si el usuario es administrador */}
            {user.role === 'admin' && <UserList users={users} onDelete={onDeleteUser} />}

            {/* 5. Footer */}
            {footer && <Footer {...footer} />}
        </div>
    );
}