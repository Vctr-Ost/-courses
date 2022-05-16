import style from './../FriendList.module.css'

function ShowFriend(props) {
    return (
        <div className={style.friend}>
            <div className={style.imgBlock}>
                <img src={props.item.imgSrc} alt='photo'/>
            </div>
            <div className={style.friendName}>
                {props.item.name}
            </div>
        </div>
    );
}

export default ShowFriend;