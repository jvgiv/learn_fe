import React from 'react'

const Skill = (props) => {
    console.log(props.data, "COCK")
    

    const skillBox = {
        border: '1px solid black',
        borderRadius: '5px',
        margin: '0 auto',
        width: '30%',
        marginBottom: '10px'
    }

    return (
        <div style={skillBox}>
            <p>{props.data.skill}</p> 
            <p>{props.data.skill_subset}</p> 
        </div>
    )
}


export default Skill