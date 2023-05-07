import React from "react";
class MyComponent extends React.Component {
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

    handleOnSumbit = (event)=>{
        event.preventDefault()
        console.log(this.state);
    }
    render() {
        return (
            <div> My name is {this.state.name}  and My age {this.state.age}

                <form onSubmit={ (event)=>{this.handleOnSumbit(event)}}>
                    <input
                        type="text"
                        onChange={(event) => { this.handleOnChangeInput(event) }}
                    />
                    <button>sumbit</button>
                </form>
            </div>
        )
    }
}
export default MyComponent