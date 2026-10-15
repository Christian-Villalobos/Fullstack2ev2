import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button'; // NUEVO

// Organismo: tabla con todos los usuarios registrados (solo la ve el admin)
// users: [{ name, email, role }, ...]
// onDelete: función que se ejecuta al presionar "Eliminar" (recibe el correo del usuario)
export function UserList({ users = [], onDelete }) {
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
                        {/* NUEVO: columna para el botón */}
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Una fila por usuario; el correo es único, por eso sirve como key */}
                    {users.map((user) => (
                        <tr key={user.email}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            {/* NUEVO: los administradores no se pueden eliminar, por eso solo
                                mostramos un guion. Los demás tienen su botón Eliminar */}
                            <td>
                                {user.role === 'admin' ? (
                                    '—'
                                ) : (
                                    <Button className="btn-danger" onClick={() => onDelete(user.email)}>
                                        Eliminar
                                    </Button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}