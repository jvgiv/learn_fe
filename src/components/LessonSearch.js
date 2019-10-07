import React, { useState, useEffect } from 'react'
import { useAuth0 } from '../react-auth0-wrapper'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

const GET_SKILLS = gql`{
    getSkills{
        skill
        skill_subset
      }
}`

export default function LessonSearch({ onSkillSelected }) {
    const [skills, setSkills] = useState({})
    const { loading, error, data } = useQuery(GET_SKILLS);

    if (loading) return 'Loading...'
    if (error) return `Error! ${error.message}`


    // state = {
        
    // }

    // const { loading, user } = useAuth0()

    // if (loading || !user) {
    //     return (
    //         <div>
    //             Loading...
    //         </div>
    //     )
    // }
    return (
        <div>
            <h1>What do you want to learn today?</h1>
            
            
        </div>
    )
}
