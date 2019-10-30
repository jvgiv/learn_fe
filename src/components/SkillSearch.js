import React, { useState, useEffect } from 'react'
import { useAuth0 } from '../react-auth0-wrapper'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import Skill from './Skill.js'
import Loader from 'react-loader-spinner'

const GET_SKILLS = gql`
    query {
        getSkills {
            skill
            skill_subset
            user_id
            description
            years_experience
            hourly_rate
        }
    }
`

export default function LessonSearch() {
    useEffect(() => {
        console.log('boner')
    })
    const [skills, setSkills] = useState([])
    const { loading, error, data } = useQuery(GET_SKILLS, {
        onCompleted: data => {
            setSkills(data)
        }
    });
    if (loading) return 'Loading...'
    if (error) return `Error! ${error.message}`


    
    console.log(data.getSkills, 'skills', skills.getSkills)

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
            
            {data.getSkills.map(skill => {
                return (
                    <Skill data={skill}/>
                )
            })}
        </div>
    )
}
