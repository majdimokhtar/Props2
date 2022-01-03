import React from 'react'

function profile({profile,handleName }) {
    return (
        <div className='profile'>
            <img src={profile.img} alt={profile.fullName} />
            <h3>My name is: {profile.fullName} </h3>
            <div className='paragraphs'>
            <p>bio : {profile.bio} </p>
            <p>profession: {profile.profession} </p>
            </div>
            <button onClick={()=> handleName (profile.fullName) } >Click me</button>
            
        </div>
    )
}

export default profile
