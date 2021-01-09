import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AllUsers from "./components/users/all-users/AllUsers";
import AllPost from "./components/posts/all-posts/AllPost";
import AllComments from "./components/comments/all-comments/AllComments";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to={'/users'}>to all users</Link>
                        </li>
                        <li>
                            <Link to={'/posts'}>to all posts</Link>
                        </li>
                        <li>
                            <Link to={'/comments'}>to all comments</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route path={'/users'} render={() => <AllUsers/>}/>
                        <Route path={'/posts'} render={() => <AllPost/>}/>
                        <Route path={'/comments'} render={() => <AllComments/>}/>
                    </Switch>

                </div>
            </Router>


        );
    }
}

export default App;