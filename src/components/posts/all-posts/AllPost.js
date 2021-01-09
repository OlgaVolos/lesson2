import React, {Component} from 'react';
import PostService from "../../../servise/PostService";
import Post from "../post/Post";
import {Route, Switch, withRouter} from "react-router-dom";
import FullPost from "../full-posts/FullPost";

class AllPost extends Component {
    postService = new PostService();
    state = {posts: []};

    async componentDidMount() {
       let posts = await this.postService.posts();
       this.setState({posts});
    }

    render() {
        let {posts} = this.state;
        const {match:{url}} = this.props;
        return (
            <div>
                {
                    posts.map(value => <Post item={value} key={value.id}/>)
                }
                <hr/>
                <Switch>

                    <Route path = {url+'/:id'} render={(props) => {
                        const {match: {params:{id}}} = props;
                        return <FullPost id={id} key={id}/>;
                    }}/>
                </Switch>
                <hr/>

            </div>
        );
    }
}

export default withRouter(AllPost);