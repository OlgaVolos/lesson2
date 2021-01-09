import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";

class Post extends Component {
    render() {
        const {item, match:{url}} = this.props;
        return (
            <div>
                {item.id} - {item.title} <br/> {item.body} <Link to={url + '/' + item.id}>posts</Link>
            </div>
        );
    }
}

export default withRouter(Post) ;