import { RegisterTemplate } from "../components/templates/RegisterTemplate";
import { registerUser } from "../services/auth"; // Función que guarda el usuario en localStorage


// Título y subtítulo de la página
const textos = [
    { variant: "h1", content: "Registro", className: "titulo-principal" },
    { variant: "p", content: "Compra y vende los mejores orbes y objetos de Path of Exile con entrega inmediata", className: "subtitulo" }
];

// Datos del formulario de registro
const registerForm = {
    // Campos que se van a mostrar (name es la clave con la que llega el dato en onSubmit)
    fields: [
        { label: "Nombre", type: "text", name: "name" },
        { label: "Email", type: "email", name: "email" },
        { label: "Contraseña", type: "password", name: "password" }
    ],

    // Texto del botón de enviar
    buttonText: "Registrarse",

    // Formulario llama a esta función cuando el usuario presiona el botón.
    // data = { name: "...", email: "...", password: "..." }
    onSubmit: (data) => {
        // Intentamos registrar al usuario y obtenemos { ok, message }
        const result = registerUser(data);

        // Mostramos el mensaje (de éxito o de error)
        alert(result.message);

        // Si el registro salió bien, lo llevamos a la página de login
        if (result.ok) {
            window.location.hash = '#login';
        }
    }
};


// Página: entrega los datos al template
export function RegisterPage({ navbar, footer }) {
    return (
        <RegisterTemplate
            navbar={navbar}
            texts={textos}
            form={registerForm}
            footer={footer}
        />
    );
}