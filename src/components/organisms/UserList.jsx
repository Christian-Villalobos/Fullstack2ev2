import { Text } from '../atoms/Text';

// Organismo: tabla con todos los usuarios registrados (solo la ve el admin)
// users: [{ name, email, role }, ...]
export function UserList({ users = [] }) {
    return (
        <div className="user-list">
            <Text variant="h2" className="user-list-title">
                Usuarios registrados ({users.length})
            </Text>

            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Rol</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Una fila por usuario; el correo es único, por eso sirve como key */}
                    {users.map((user) => (
                        <tr key={user.email}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}