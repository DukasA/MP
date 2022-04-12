import React,{useEffect, useState} from 'react';
import { deletePost, fetchPosts } from '../../http/PostApi';
import styles from './PostsLists.module.scss';

const PostsList = () => {

    const [posts, setPosts] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        fetchPosts().then(data => setPosts(data));
    }, []);

    const onChangeSearchInput = (e) => {
        setSearchValue(e.target.value);
    }

    const onDeletePost = (id) => {
        try {
            deletePost(id); 
            window.location.reload();
        } catch (e) {
            alert(e);
        }
    }
    
   
    

    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>
                            <input onChange={onChangeSearchInput} value={searchValue} placeholder='Search Post...'></input>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {posts.filter(post => post.title.toLowerCase().includes(searchValue)).map(post => (
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td><button onClick={() => onDeletePost(post.id)}>Delete</button></td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    )
}

export default PostsList;