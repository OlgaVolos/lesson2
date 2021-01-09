import React, {Component} from 'react';
import CommentService from "../../../servise/CommentService";

class FullComments extends Component {
    state = {comment: null}
    commentService = new CommentService();

    async componentDidMount() {
        const {match:{params:{id}}} = this.props;
       const comment = await this.commentService.comment(id);
       this.setState({comment})
    }

    render() {
        
        const {comment} = this.state;

        return (
            <div>
                {comment && <div>{comment.id}-{comment.name}-{comment.body}</div>}

            </div>
        );
    }
}

export default FullComments;