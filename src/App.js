import React, {Component} from 'react';
import AllUsers from "./components/all-users/AllUsers";
import User from "./components/user/User";


class App extends Component {

    state = {users: [], inputValue: '',currentUser: null};

    send = (e) => {

        e.preventDefault();

        const {users, inputValue} = this.state;
        const currentUser = users.find(item => item.id === +inputValue)

        this.setState({currentUser})
    };

    commitState = (e) => {
        this.setState({inputValue: e.target.value});
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(users => {
                this.setState({users});
            });
    }

    render() {
        const {users,currentUser} = this.state;
        return (

            <div>
                <AllUsers items={users}/>
                <form action={'/savedata'} onSubmit={this.send} >
                    <input type = "number" onInput={this.commitState} value={this.state.inputValue}/>
                    <button>send</button>
                </form>
                {currentUser && <User user={currentUser}/>}
            </div>

        );
    }



}

export default App;