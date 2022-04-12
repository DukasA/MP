import React, {useContext, useState} from 'react';
import styles from './CreatePost.module.scss';
import Input from '../Input/index';
import { create } from '../../http/PostApi';
import { useNavigate } from 'react-router';
import { NEWS_ROUTE } from '../../utils/consts';
import { observer } from 'mobx-react-lite';
import {Context} from '../../index';

const CreatePost = observer(({active}) => {

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [file, setFile] = useState(null);
    const history = useNavigate();

    const selectFile = e => {
        setFile(e.target.files[0]);
    }

    const addPost = (e) => {
        try {
            e.preventDefault();
            const formData = new FormData();
            formData.append('title', title)
            formData.append('img', file)
            formData.append('text', text);
            create(formData).then(data => alert('Post was created'));
            history(NEWS_ROUTE);
            window.location.reload();
        } catch (e) {
            alert(e.response.data.message);
        }
    }


    return (
        <div className={active ? styles.container : styles.container__hide}>
            <form>
            <div className={styles.formInner}>
                <h1>Create Post</h1>
                <Input value={title} setValue={setTitle} type="text" placeholder="Title"/>
                <input onChange={selectFile} type="file" />
                <textarea value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder="Text" rows="5"></textarea>
                <button onClick={addPost} type="submit">Submit</button>
            </div>
            </form>
        </div>
    )
});

export default CreatePost;
