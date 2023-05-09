import React from "react";
class DisplayInfor extends React.Component {
    render() {
        console.log(this.props)
        const {listUsers}= this.props
        return (
            <div>
            { listUsers.map ((user)=>{
                return(
                    <div key={user.id}>
                        <div>My name {user.name} </div>
                        <div>My email {user.email} </div>
                        <hr />
                    </div>
                )
            }

            )

            }
            </div>
        )
    }
}
export default DisplayInfor;