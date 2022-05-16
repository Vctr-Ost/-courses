import style from './FriendList.module.css'
import ShowFriend from "./ShowFriend/ShowFriend";

function FriendList(props) {

    let friendsList = props.state.map(item => <ShowFriend item={item}/>);

    return (
        <div className={style.friendsList}>
            {friendsList}
        </div>
    );
}

export default FriendList;