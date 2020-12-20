import React, {Component} from 'react';
import {PostService} from "../services/PostService";
import Post from "../post/Post";
import {Route, Switch} from "react-router-dom";

class AllPosts extends Component {
    postService = new PostService();
    state = {posts: []}

    async componentDidMount() {
      let posts = await this.postService.getAllPosts();
      this.setState({posts});


    }

    render() {
        let {posts} = this.state
        return (
            <div>
                {posts.map(value => <Post item={value} key={value.id}/>)}
                <div>
                    <Switch>
                        <Route path={'/posts/:id'} render={() => {
                            return 'jfhgjf'

                        }}/>
                    </Switch>
                </div>
            </div>

        );
    }
}

export default AllPosts;