import style from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

function DialogItem(props) {

    const lowerCase = props.state.name.toLowerCase();

    return (
        <div className={style.abonent}>
            <NavLink to={'/dialogs/' + lowerCase}>
                <div className={style.photo}>
                    <img src={props.state.imgSrc} alt='photo'/>
                </div>
                <div className={style.userName}>
                    {props.state.name}
                </div>
            </NavLink>
        </div>
    );
}

export default DialogItem;