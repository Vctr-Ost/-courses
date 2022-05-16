import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import style from './Profile.module.css'



function Profile(props) {

    return (
        <div className={style.content}>
            <div>
                <img src='https://wallpapercave.com/wp/wp6980736.jpg' alt='content image'/>
            </div>

            <div className={style.info}>
                <ProfileInfo/>
                <MyPosts myPostsData={props.state} addPost={props.addPost} updatePostText={props.updatePostText} />
            </div>
        </div>
    );
}

export default Profile;