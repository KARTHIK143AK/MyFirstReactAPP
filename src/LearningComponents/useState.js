import React, {useState} from "react";

function SetNewNameUsingState(){
    const [name, setName1] = useState("Guest");
    
    const updateName = () => {
        setName1("AK");
        // name = "AK"
        // console.log(">>>>,name",name)
    }
    return(
        <div>
            <h2>Name : {name}</h2>
            <button onClick={updateName}>
                SetName
            </button>
        </div>
    )
}

export default SetNewNameUsingState