import React from 'react'
import UserPost from './endpoints/UserPost'
import TokenPost from './endpoints/TokenPost'
import PhotoPost from './endpoints/PhotoPost'

const Api = () => {
    return (
        <div>
            <h2>UserPost</h2>
            <UserPost />
            <h2>TokenPost</h2>
            <TokenPost />
            <h2>PhotoPost</h2>
            <PhotoPost />
        </div>
    )
}

export default Api
