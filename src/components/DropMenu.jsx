import React from 'react'

function DropMenu (event) {
    const user = event.target.innerText
    alert("Welcome {user}")

    return (
       console.log(event.target.innerText)
       
    );
    }

export default DropMenu