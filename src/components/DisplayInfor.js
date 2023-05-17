import React from "react";
class DisplayInfor extends React.Component {
    state = {
        isShowListUsers: true
    }
    handleShowHide = () => {
        this.setState({
            isShowListUsers: !this.state.isShowListUsers
        })
    }
    render() {
        console.log(this.props)
        const { listUsers } = this.props
        return (
            <div>
                <div>
                    <span onClick={() => { this.handleShowHide() }}> {
                        this.state.isShowListUsers == true ? "hide usser " : " showListUsers"
                    } </span>
                </div>
                {this.state.isShowListUsers &&
                    <div>
                        {listUsers.map((user) => {
                            return (

                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div>My name {user.name} </div>
                                    <div>My email {user.age} </div>
                                    <hr />
                                </div>


                            )







                            //    if( +user.age > 18){
                            //     return(
                            //         <div key={user.id} className="green">
                            //             <div>My name {user.name} </div>
                            //             <div>My email {user.age} </div>
                            //             <hr />
                            //         </div>
                            //     )
                            //    }else{
                            //     return(
                            //         <div key={user.id} className="red">
                            //             <div>My name {user.name} </div>
                            //             <div>My email {user.age} </div>
                            //             <hr />
                            //         </div>
                            //     )
                            //    }
                        }

                        )

                        }
                    </div>
                }
            </div>
        )
    }
}
export default DisplayInfor;