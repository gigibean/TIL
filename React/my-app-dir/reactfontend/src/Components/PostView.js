import React, { Component } from 'react';

// const dummy_prop = {
//     title : ,
//     content: 
// }

class PostView extends Component {
    render() {
        const {id, title, content} = this.props
        return (
            <div>
                <p>{id}</p>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        );
    }
}

export default PostView;