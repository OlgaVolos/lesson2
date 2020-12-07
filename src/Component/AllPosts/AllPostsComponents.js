import React, {Component} from 'react';
import PostComponent from "../Posts/PostComponent";
import {PostService} from "../PostService/PostServise";



class AllPostsComponents extends Component {
    state = {posts: [], choosePost: null}
    postService = new PostService()
    selectPost = (id) =>{

        this.postService.getPostsById(id).then(value => this.setState({choosePost: value}));
    }
    componentDidMount() {
        this.postService.getAllPosts().then(value => this.setState({posts: value}))
    }



    render() {
        let {posts, choosePost} = this.state
        return (

            <div>{
               posts.map(value => (<PostComponent item={value} key={value.id} selectPost = {this.selectPost}/>))
            }
<hr/>
                {
                    choosePost && <PostComponent item={choosePost}/>
                }

            </div>
        );
    }
}

export default AllPostsComponents;