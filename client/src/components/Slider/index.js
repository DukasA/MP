import React, {useState, useEffect} from 'react';
import { fetchSlides } from '../../http/SliderApi';
import styles from './Slider.module.scss';



function Slider() {

    const [slideIndex, setSlideIndex] = useState(1);
    const [loading, setLoading] = useState(true);
    const [slideItems, setSlideItems] = useState([]);

    useEffect(() => {
        fetchSlides()
        .then(res => {
            setSlideItems(res);
        }).finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <h1>LOADING</h1>
    }

    
    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1);
        } else if (slideIndex === 1) {
            setSlideIndex(slideItems.length);
        }
    }

    const nextSlide = () => {
        if (slideIndex !== slideItems.length) {
            setSlideIndex(slideIndex + 1);
        } else if (slideIndex === slideItems.length) {
            setSlideIndex(1);
        }
    }
    

    const moveDot = index => {
        setSlideIndex(index);
    }

    return (
        <div className={styles.slider}>
            {slideItems.length === 0 ? <h1 className={styles.message}>No works here &#128517;</h1> : slideItems.map((item,index) => (
                <div key={item.id} className={slideIndex === index + 1 ? styles.slide__active : styles.slide}>
                    <div className={styles.bg__bl}></div>
                    <img src={process.env.REACT_APP_API_URL + 'slider/' + item.img}/>
                    <div className={styles.slide__content}>
                        <div className={styles.title}>{item.title}
                        </div>
                        <div className={styles.descr}>
                            {item.text}
                        </div>
                        <a href={`${item.link}`} target='_blank' className={styles.linkTo}>
                            <button className={styles.linkTo__button}>Viev in repository</button>
                        </a>
                    </div>
                </div>
            ))}
            <button onClick={prevSlide} className={styles.slider__buttonPrev}>{'<'}</button>
            <button onClick={nextSlide} className={styles.slider__buttonNext}>{'>'}</button>

            <div className={styles.container__dots}>
                {slideItems.map((item, index) =>(
                    <div  onClick={() => moveDot(index + 1)} className={slideIndex === index + 1 ?  styles.dot__active : styles.dot}></div>
                ))}
            </div> 
        </div>
    )
}

export default Slider;
