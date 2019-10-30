import React from 'react'

const Skill = (props) => {
    console.log(props.data, "COCK")
    
    return (
        <div>
            <p>{props.data.skill}</p> 
            <p>{props.data.skill_subset}</p> 
        </div>
    )
}


export default Skill