import style from './AddPost.module.css'
import React from 'react';

function AddPost(props) {

    let taRef = React.createRef();

    function newPost() {
        let text = taRef.current.value;
        props.addPost(text);
        taRef.current.value = '';
    }

    function updateText() {
        let text = taRef.current.value;
        // debugger;
        props.updatePostText(text);
        // debugger;
    }

    return (
        <>
            <div>
                <textarea onChange={ updateText } ref={taRef} value={props.newPostText} />
            </div>
            <div>
                <button onClick={ newPost } >Add Post</button>
            </div>
        </>
    );
}

export default AddPost;