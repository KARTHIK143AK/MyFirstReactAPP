import React , { Component } from "react";

export class ButtonClass extends Component {
    render(){
        const handleClick = () => console.log(">>>>>>>>>>>OHCH!!!")
        return <h4 onClick={() => handleClick()}>Hello My Class Members</h4>
    }
}

// export default Welcome
