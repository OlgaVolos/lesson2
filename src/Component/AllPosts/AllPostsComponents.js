import React, {Component} from 'react';
import PostComponent from "../Posts/PostComponent";

class AllPostsComponents extends Component {
    state = {posts: [], choosePost: null}
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(postsFromAPI => {
                this.setState({posts: postsFromAPI});
            })
    }
    selectPost = (id) =>{
        let choosePost = this.state.posts.find(value => value.id === id);
        this.setState({choosePost});
    };

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