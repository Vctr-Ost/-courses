import style from './MyPosts.module.css'
import Post from './Post/Post';
import AddPost from './AddPost/AddPost';


function MyPosts(props) {

    let showPost = props.myPostsData.myPostsData.map(post => <Post text={post.text} likeCount={post.likeCount}/>)

    return (
        <>
            <div className={`${style.fz} ${style.col}`}>
                <div className={style.header}>My posts</div>
                <AddPost newPostText={props.myPostsData.newPostText} addPost={props.addPost} updatePostText={props.updatePostText} />
                {showPost}
            </div>
        </>
    );
}

export default MyPosts;