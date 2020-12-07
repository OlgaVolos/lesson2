import React, {Component} from 'react';
import './PostStyle.css'
class PostComponent extends Component {

    render() {
        let {item, selectPost} = this.props
        return (
            <div>
                <h3>{item.id}</h3>
                <p className='title'>{item.title}</p>
                <p className='body'>{item.body}</p>
                <button onClick={()=> selectPost(item.id)}>Вибрати</button>

            </div>
        );
    }
}


export default PostComponent;