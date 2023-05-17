import React from "react";
import AddUserinfor from "./AddUserinfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "John", age: " 30" },
            { id: 2, name: "DVD", age: " 10" },
            { id: 3, name: "HVD", age: "60 " },
        ]
    }

    handleAddNewUser = (userObj) => {
        console.log(userObj);
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        })
    }
    render() {

        return (

            <div>
                <AddUserinfor handleAddNewUser={this.handleAddNewUser} />
                <hr />
                <DisplayInfor
                    listUsers={this.state.listUsers}

                />
            </div>
        )
    }
}
export default MyComponent