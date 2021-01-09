import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";

class  Comment extends Component {
    render() {
        const {item, match:{url}} = this.props;
        return (
            <div>

                {item.id}-{item.body} - <Link to ={url+ "/" +item.id}>Comments</Link>

            </div>
        );
    }
}

export default withRouter(Comment);