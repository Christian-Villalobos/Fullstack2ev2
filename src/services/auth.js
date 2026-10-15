// Aquí vive toda la "base de datos" simulada con localStorage.
// localStorage solo guarda texto, por eso usamos JSON.stringify (objeto → texto)
// y JSON.parse (texto → objeto).

// Nombres con los que se guardan los datos en el navegador
const USERS_KEY = "poe_users";
const CURRENT_USER_KEY = "poe_current_user";

// Usuario administrador que existe desde el inicio
const defaultUsers = [
    { name: "Administrador", email: "admin@poe.com", password: "admin123", role: "admin" }
];

// Devuelve la lista de usuarios guardados.
// Si es la primera vez (no hay nada guardado), guarda al administrador y lo devuelve.
export function getUsers() {
    const saved = localStorage.getItem(USERS_KEY);

    if (saved) {
        return JSON.parse(saved);
    }

    localStorage.setItem(USERS_KEY, JSON.stringify(defaultUsers));
    return defaultUsers;
}

// Registra un usuario nuevo.
// Devuelve { ok: true/false, message: "texto para mostrar" }
export function registerUser({ name = '', email = '', password = '' }) {
    // Limpiamos espacios y pasamos el correo a minúsculas
    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();

    // Validación simple: no se permiten campos vacíos
    if (!cleanName || !cleanEmail || !password) {
        return { ok: false, message: 'Completa todos los campos.' };
    }

    const users = getUsers();

    // some() devuelve true si ALGÚN usuario ya tiene ese correo
    if (users.some(user => user.email === cleanEmail)) {
        return { ok: false, message: 'El correo ya está registrado.' };
    }

    // Agregamos el usuario nuevo (todos los que se registran son "user")
    users.push({ name: cleanName, email: cleanEmail, password, role: 'user' });
    localStorage.setItem(USERS_KEY, JSON.stringify(users));

    return { ok: true, message: '¡Registro exitoso! Ahora inicia sesión.' };
}

// Revisa si el correo y la contraseña coinciden con algún usuario.
// Si coinciden, guarda quién inició sesión y devuelve ese usuario.
// Si no, devuelve null.
export function loginUser({ email = '', password = '' }) {
    const cleanEmail = email.trim().toLowerCase();

    // find() devuelve el primer usuario que cumpla la condición (o undefined)
    const user = getUsers().find(u => u.email === cleanEmail && u.password === password);

    if (!user) {
        return null;
    }

    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
    return user;
}

// Devuelve el usuario que tiene la sesión iniciada (o null si no hay)
export function getCurrentUser() {
    const saved = localStorage.getItem(CURRENT_USER_KEY);
    return saved ? JSON.parse(saved) : null;
}

// Cierra la sesión: borra al usuario actual
export function logoutUser() {
    localStorage.removeItem(CURRENT_USER_KEY);
}

// NUEVO: elimina un usuario usando su correo (el correo es único).
// Devuelve { ok: true/false, message: "texto para mostrar" }
export function deleteUser(email) {
    const users = getUsers();

    // Buscamos al usuario que se quiere borrar
    const userToDelete = users.find(user => user.email === email);

    // No se puede borrar si no existe o si es administrador
    if (!userToDelete || userToDelete.role === 'admin') {
        return { ok: false, message: 'No se puede eliminar este usuario.' };
    }

    // filter() crea una lista nueva con todos los usuarios MENOS el que tiene ese correo
    const updatedUsers = users.filter(user => user.email !== email);

    // Guardamos la lista nueva en localStorage
    localStorage.setItem(USERS_KEY, JSON.stringify(updatedUsers));

    return { ok: true, message: 'Usuario eliminado.' };
}