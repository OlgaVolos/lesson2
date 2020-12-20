import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";

import('./postStyle.css')
class Post extends Component {
    render() {
        let {match:{url}, item} = this.props
        return (
            <div>
                <h2>{item.id}</h2>
                <h3 className='title'>{item.title}</h3>
                <p className='body'>{item.body}</p>
                <Link to={`${url}/${item.id}`}>info</Link>

            </div>
        );
    }
}

export default withRouter(Post);