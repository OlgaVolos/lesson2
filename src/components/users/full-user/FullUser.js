import React, {Component} from 'react';
import UserService from "../../../servise/UserService";
import {Link} from "react-router-dom";
import Post from "../../posts/post/Post";

class FullUser extends Component {

    state = {user: null};
    userService = new UserService();

    async componentDidMount() {

        let {match: {params: {id}}} = this.props;
        let user = await this.userService.user(id);
        this.setState({user});

    }

    render() {

        let {user} = this.state;
        return (
            <div>
                {user && <div>{user.id}-{user.name}-{user.username}-{user.email}  <Link to = {<Post/>}>Click</Link></div>}

            </div>
        );
    }
}

export default FullUser;