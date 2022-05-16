import style from './Message.module.css'

function Message(props) {

    let divA = '';
    let divB = '';
    if (props.state.abonent === 0) {
        divA = <img src={props.state.imgSrc} alt='photo'/>;
        divB = '';
    } else if (props.state.abonent === 1) {
        divA = '';
        divB = <img src={props.state.imgSrc} alt='photo'/>;
    }

    return (
        <div className={style.messageBlock}>
            <div className={style.abonentAll}>
                {divA}
            </div>
            <div className={style.message}>
                {props.state.message}

            </div>
            <div className={style.abonentAll}>
                {divB}
            </div>
        </div>

    );
}

export default Message;