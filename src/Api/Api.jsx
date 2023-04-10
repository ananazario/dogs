import React from 'react'
import UserPost from './endpoints/UserPost'

const Api = () => {
    return (
        <div>
            <h2>UserPost</h2>
            <UserPost />
            <TokenPost />
        </div>
    )
}

export default Api
