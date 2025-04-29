import React, { Component,useState } from 'react'

export default function OnChangeData() {

    // render(){
        const [name, setName] = useState("Guest")
    
        const handleNameChange = (event) => {
            setName(event.target.value)
        }

        return (
            <div>
                <input value={name} onChange={handleNameChange} />
                <p>Name : {name}</p>
            </div>
        )
    // }

}