import React from "react";
class AddUserinfor extends React.Component {
    state = {
        name: 'Cuong',
        age: 22,
        adress: ' Ha Dong'
    }
    handleClick(event) {
        console.log("click button ");
        this.setState({
            name: 'Mai Quoc Cuong',
            age: Math.floor((Math.random() * 100) + 1)
        });
    }
    handleOnMouseDown(event) {
        console.log(event.pageX, event.pageY);

    }
    handleOnChangeInput = (event) => {

        this.setState({
            name: event.target.value
        })
    }
    handleOnChangeAge = (event) => {

        this.setState({
            age: event.target.value
        })
    }

    handleOnSumbit = (event) => {
        event.preventDefault()
        console.log(this.state);
        this.props.handleAddNewUser();
    }
    render() {
        return (
            <div>
                My name is {this.state.name}  and My age {this.state.age}

                <form onSubmit={(event) => { this.handleOnSumbit(event) }}>
                    <label>My name </label>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => { this.handleOnChangeInput(event) }}
                    />
                    <label>My age </label>
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(event) => { this.handleOnChangeAge(event) }}
                    />
                    <button>sumbit</button>
                </form>
            </div>
        )
    }
}
export default AddUserinfor;