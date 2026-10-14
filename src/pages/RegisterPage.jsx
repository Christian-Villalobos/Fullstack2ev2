import {RegisterTemplate} from "../components/templates/RegisterTemplate";

const registerForm = {
    fields: [
        { label: "Nombre", type: "text", name: "name" },
        { label: "Email", type: "email", name: "email" },
        { label: "Contraseña", type: "password", name: "password" }
    ]
}

const textos = [
    { variant: "h1", content: "Registro", className: "titulo-principal" },
    { variant: "p", content: "Compra y vende los mejores orbes y objetos de Path of Exile con entrega inmediata", className: "subtitulo" }
];

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
