import { LoginTemplate } from '../components/templates/LoginTemplate'
import { loginUser } from '../services/auth' // Función que revisa el correo y la contraseña

// Datos del formulario de login
const loginForm = {
    // Campos que se van a mostrar
    fields: [
        { label: "Email", type: "email", name: "email" },
        { label: "Contraseña", type: "password", name: "password" }
    ],

    // Texto del botón de enviar
    buttonText: "Iniciar sesión",

    // data = { email: "...", password: "..." }
    onSubmit: (data) => {
        // loginUser devuelve el usuario si los datos son correctos, o null si no
        const user = loginUser(data);

        if (user) {
            alert('¡Bienvenido ' + user.name + '!');
            // CAMBIO: ahora vamos al perfil (la página mostrará lo que corresponde según el rol)
            window.location.hash = '#perfil';
        } else {
            alert('Correo o contraseña incorrectos.');
        }
    }
};

// Título de la página
const textos = [
    { variant: "h1", content: "Iniciar sesión", className: "titulo-principal" }
];

// Página: entrega los datos al template
export function LoginPage({ navbar, footer }) {
    return (
        <LoginTemplate
            navbar={navbar}
            texts={textos}
            form={loginForm}
            footer={footer}
        />
    );
}