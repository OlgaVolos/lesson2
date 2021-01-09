import React, {Component} from 'react';
import CommentService from "../../../servise/CommentService";
import Comment from "../comment/Comment";
import {Route, Switch, withRouter} from "react-router-dom";
import FullComments from "../full-comments/FullComments";

class AllComments extends Component {
    commentService = new CommentService();
    state = {comments:[]};


    async componentDidMount() {
    //    всі користувачі
    const comments  = await this.commentService.comments();
        this.setState({comments});
    }

    render() {
        const {comments} = this.state;
        const {match:{url}} = this.props;



        return (
            <div>
                {
                    comments.map(value => <Comment item={value} key={value.id}/>)
                }
                <hr/>
                <Switch>
                    <Route path={url+'/:id'} render={(props)=> {
                      const {match:{params:{id}}} = props;
                        return <FullComments {...props} key={id}/>;
                    }}/>
                </Switch>
                <hr/>
            </div>

        );
    }
}

export default withRouter(AllComments);