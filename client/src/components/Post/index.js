import React, {useState} from 'react';
import styles from './Post.module.scss';

function PostItem({post}) {

    const [visible, setVisible] = useState(false);

    function openPost() {
        setVisible(!visible);
    }

    return (
        
        <div className={styles.post}>
            <div className={styles.post__header}>
            <a href="#">
                <img className={styles.post__preview} src={process.env.REACT_APP_API_URL + 'post/' + post.img} alt="There should be a picture according to the meaning of the title &#128517;" />
            </a>
            </div>
            <div className={styles.post__content}>
                <h2 className={styles.post__title}>
                    <a href="post.html">{post.title}</a>
                </h2>
                <div className={visible ? styles.post__description__open : styles.post__description}>{post.text}
                    <div className={styles.toggle}></div>
                </div>
            </div>
            <div className={styles.post__footer}>
                <button onClick={openPost} className={styles.post__footer__btn}>{visible ? "Close Post" : "Read Post"}</button>
                {/* <span className={styles.post__footer__date}>{post.createdAt}</span> */}
            </div>
        </div>
    )
}

export default PostItem;
