import React, { useContext, useEffect } from 'react';
import {Link} from 'react-router-dom';
import styles from './News.module.scss';
import {Context} from '../../index';
import PostItem from '../../components/Post/index';
import { observer } from 'mobx-react-lite';
import { fetchPosts } from '../../http/PostApi';
import { Title } from '../../utils/newTitle';

const News = observer(() => {
    Title('News Page');
    const {user} = useContext(Context);
    const {post} = useContext(Context);

    useEffect(() => {
        fetchPosts().then(data => post.setPosts(data));
    }, []);

    return (
        <div className={styles.container}>
            {user.isAuth ?
                <div className={styles.news}>
                    {post.posts.map(post =>
                        <PostItem key={post.id} post={post}/>
                    )}
                </div>
            :
                <div className={styles.message}>
                    To view the news feed you need to <Link className={styles.message__links} to='/registration'>Register</Link>  or <Link className={styles.message__links} to='/login'>Login</Link>
                </div>
            }
        </div>
    )
})

export default News;
