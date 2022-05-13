import style from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import React from 'react'


function Dialogs(props) {

    let dialogElements = props.state.dialogsData.map(dialog => <DialogItem state={dialog} /> )
    let messagesElements = props.state.messagesData.map(message => <Message state={message} /> )

    let taRef = React.createRef();
    function alertText() {
        let text = taRef.current.value;
        alert(text);
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsList}>
                <div className={style.header}>
                    DIALOGS
                </div>
                {dialogElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <div>
                    <textarea ref={taRef}></textarea>
                    <button onClick={alertText}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;