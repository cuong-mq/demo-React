import React from "react";
import Userinfor from "./Userinfor";
import DisplayInfore from "./DisplayInfor";
class MyComponent extends React.Component {
    state ={
        listUsers :[
            {id:1, name: "John", email:"mq@gmail.com "},
            {id:2, name: "DVD", email:"llllllllllllq@gmail.com "},
            {id:3, name: "HVD", email:"abcq@gmail.com "},
        ]
    }
    render() {
        
        return (
            
            <div> 
                <Userinfor></Userinfor>
                <hr/>
                <DisplayInfore listUsers= {this.state.listUsers} />
            </div>
        )
    }
}
export default MyComponent