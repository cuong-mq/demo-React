import React from "react";
import Userinfor from "./Userinfor";
import DisplayInfore from "./DisplayInfor";
class MyComponent extends React.Component {
    state ={
        listUsers :[
            {id:1, name: "John", age:" 30"},
            {id:2, name: "DVD", age:" 10"},
            {id:3, name: "HVD", age:"60 "},
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