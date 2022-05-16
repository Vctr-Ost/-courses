import style from './ProfileInfo.module.css'

function ProfileInfo() {
    return (
        <div className={style.profInfo}>
            <div className={style.avatar}>
                <img src='https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg' alt='avatar'/>
            </div>
            <div>
                <div className={style.name}>
                    Viktor Ostapenko
                </div>
                <div className={style.info}>
                    <div className={style.item}>Date of birth: 06 May</div>
                    <div className={style.item}>City: Kyiv</div>
                    <div className={style.item}>Education: NULES</div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;