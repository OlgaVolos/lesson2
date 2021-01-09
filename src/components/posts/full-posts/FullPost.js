import React, {Component} from 'react';
import PostService from "../../../servise/PostService";

class FullPost extends Component {
    state = {post: null};
    postService = new PostService();

   async componentDidMount() {
       const {id} = this.props;
      const post = await this.postService.post(id);
      this.setState({post})
    }

    render() {
        const {post} = this.state;
        return (
            <div>
                {post && <div>{post.userId}-{post.title}-{post.body}</div>}
            </div>
        );
    }
}

export default FullPost;