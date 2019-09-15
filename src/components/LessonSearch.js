import React from 'react'
import { useAuth0 } from '../react-auth0-wrapper'



export default function LessonSearch() {
    state = {
        
    }

    const { loading, user } = useAuth0()

    if (loading || !user) {
        return (
            <div>
                Loading...
            </div>
        )
    }
    return (
        <div>
            
        </div>
    )
}
