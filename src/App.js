import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AllUsers from "./components/users/all-users/AllUsers";
class App extends Component {
    render() {
        return (
            <Router>
                <div> 
                <ul>
                    <li>
                        <Link to={'/users'}>to all users</Link>
                    </li>
                </ul>
                    <Switch>
                        <Route path={'/users'} render ={() => <AllUsers/>}/>
                    </Switch>

                </div>
            </Router>


        );
    }
}

export default App;