import React, { useState } from 'react';

function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleForm = (e) => {
        e.preventDefault()
        alert("Seja Bem-vindo(a)")
    }

    return <form onSubmit={handleForm}>
        <input type="text" data-cy="input-name-login-form" placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)}/>
        <input type="email" data-cy="input-email-login-form" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)} />
        <input type="number" data-cy="input-phone-login-form" placeholder="Digite seu telefone" onChange={(e) => setPhone(e.target.value)} />
        <input type="submit" data-cy="input-submit-login-form"/>
    </form>;
}

export default Form;