import {LoginTemplate} from '../components/templates/LoginTemplate'

const loginForm = {
    fields: [
        { label: "Email", type: "email", name: "email" },
        { label: "Contraseña", type: "password", name: "password" }
    ]
};

const textos = [
    { variant: "h1", content: "Iniciar sesión", className: "titulo-principal" }
];

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