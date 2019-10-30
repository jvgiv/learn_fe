import React from 'react'
import { useAuth0 } from '../react-auth0-wrapper'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

const GET_USER = gql`
    query {
        getUserById(id: ID!) {
            first_name
        }
    }
`

const Profile = () => {
    // const { loading, user } = useAuth0()

    // if (loading || !user) {
    //     return (
    //         <div>
    //             Loading...
    //         </div>
    //     )
    // }

    const { loading, error, data } = useQuery(GET_USER)
    if (loading) return 'Loading...'
    if (error) return `Error! ${error.message}`

    // console.log(user)
    return (
        <div>


            {/* <img src={user.picture} alt="Profile" />

            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <code>{JSON.stringify(user, null, 2)}</code> */}
        </div>
    )
}

export default Profile