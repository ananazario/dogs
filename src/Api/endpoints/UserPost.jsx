import React, { useState } from 'react'

const UserPost = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username, 
                email,
                password
            })
        }).then(response => {
            return response.json()
        }).then(json => {
            return json
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                placeholder='username'
                value={username}
                onChange={({target}) => setUsername(target.value)}
            />
            <input 
                type='text'
                placeholder='email'
                value={email}
                onChange={({target}) => setEmail(target.value)}
            />
            <input 
                type='text'
                placeholder='password'
                value={password}
                onChange={({target}) => setPassword(target.value)}
            />
        </form>
    )
}

export default UserPost
