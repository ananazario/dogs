import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Form/Input/Input";
import Button from "../../components/Form/Button/Button";
import useForm from "../../shared/hooks/useForm";

const LoginForm = () => {

    const username = useForm()
    const password = useForm()

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password })
        }).then((response) => {
            console.log(response)
            return response.json()
        }).then((json) => {
            console.log(json)
        })
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <Input label="User" type="text" name="username" {...username} />
                <Input label="Password" type="password" name="password" {...password} />
                <Button>Entrar</Button>
            </form>

            <Link to="/login/create">Cadastro</Link>
        </div>
    )
}

export default LoginForm;