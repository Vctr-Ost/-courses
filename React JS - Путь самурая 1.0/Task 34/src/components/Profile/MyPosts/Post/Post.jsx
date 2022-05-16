import style from './Post.module.css'

function Post(props) {
	return (
		<div className={style.post}>
			<div className={style.comment}>
				<img src='https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80' alt='human face' />
				<span>{props.text}</span>
			</div>
			<div className={style.like}>
				<img className='like' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Ei-like.svg/1200px-Ei-like.svg.png' alt='like' />
				<span>{props.likeCount}</span>
			</div>
		</div>
	);
}

export default Post;