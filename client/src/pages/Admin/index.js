import React,{useState} from 'react';
import styles from './Admin.module.scss';
import CreatePost from '../../components/CreatePost/index';
import { Title } from '../../utils/newTitle';
import CreateSlide from '../../components/CreateSlide';
import PostsList from '../../components/PostsList';

function AdminPanel() {
    Title('AdminPanel Page');

    const [activePost, setActivePost] = useState(false);
    const [activeSlide, setActiveSlide] = useState(false);

    const  showCreatePost = () => {
        setActivePost(!activePost);
    }

    const  showCreateSlide = () => {
        setActiveSlide(!activeSlide);
    }

    const getPosts = () => {
        alert('Posts');
    }

    return (
        <div className={styles.container}>
            <CreatePost active={activePost} />
            <CreateSlide active={activeSlide}/>

            <button onClick={showCreatePost} className={styles.createBtn}>{!activePost ? "Create Post" : "Close Post"}</button>
            <button onClick={showCreateSlide} className={styles.createBtn}>{!activeSlide ? "Create Slide" : "Close Slide"}</button>

            <button onClick={getPosts} className={styles.createBtn}>Get Posts List</button>

            <PostsList/>

        </div>
    )
}

export default AdminPanel;
