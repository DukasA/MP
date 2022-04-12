import React, {useContext, useState} from 'react';
import styles from './CreateSlide.module.scss';
import Input from '../Input/index';
import { create } from '../../http/SliderApi';
import { useNavigate } from 'react-router';
import { NEWS_ROUTE } from '../../utils/consts';
import { observer } from 'mobx-react-lite';

const CreateSlide = observer(({active}) => {

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [file, setFile] = useState(null);
    const [link, setLink] = useState('');
    const history = useNavigate();

    const selectFile = e => {
        setFile(e.target.files[0]);
    }

    const addSlide = (e) => {
        try {
            e.preventDefault();
            const formData = new FormData();
            formData.append('title', title)
            formData.append('img', file)
            formData.append('text', text);
            formData.append('link', link);
            create(formData).then(data => alert('Slide was created'));
            history(NEWS_ROUTE);
            window.location.reload();
        } catch (e) {
            alert(e.response.data.message);
        }
    }


    return (
        <div className={active ?  styles.container : styles.container__hide}>
            <form>
            <div className={styles.formInner}>
                <h1>Create Slide</h1>
                <Input value={title} setValue={setTitle} type="text" placeholder="Title"/>
                <input value={link} onChange={(e) => setLink(e.target.value)} type="text" placeholder="Link" />
                <input onChange={selectFile} type="file" />
                <textarea value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder="Text" rows="5"></textarea>
                <button onClick={addSlide} type="submit">Submit</button>
            </div>
            </form>
        </div>
    )
});

export default CreateSlide;
