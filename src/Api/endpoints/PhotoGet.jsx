import React from 'react'

const PhotoGet = () => {

    function handleSubmit(event) {
        event.preventDefault();
        fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/photo')
        .then((response) => {
            console.log(response)
            return response.json()
        })
        .then((json) => {
            console.log(json)
            return json
        })
    }

    return (
        <form onClick={handleSubmit}>
            <input type='text' />
            <button>Enviar</button>
        </form>
    )
}

export default PhotoGet
