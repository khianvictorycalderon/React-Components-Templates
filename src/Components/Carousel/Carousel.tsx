import React, { useState } from 'react';
import style from './Carousel.module.css';

interface CarouselProps {
    Images: {
        Title: string;
        Description: React.ReactNode;
        Alt: string;
        ImgPath: string;
    }[];
    Style?: {
        HRColor?: string;
        TextColor?: string;
        Background?: string;
    };
    ReversedOrder?: boolean;
}

export default function Carousel({
    Images,
    ReversedOrder,
    Style = {}
}: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const {
        HRColor = "grey",
        TextColor = "black",
        Background = "white"
    } = Style;

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % Images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? Images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className={`${style.carousel} ${ReversedOrder ? style.reversed_order : ""}`} style={{ background: Background}}>
            <div className={style.carousel_banner}>
                <h3 style={{ color: TextColor }}>{Images[currentIndex].Title}</h3>
                <hr style={{ borderColor: HRColor }} />
                <div style={{ color: TextColor }}>{Images[currentIndex].Description}</div>
            </div>
            <div className={style.carousel_image_container}>
                <button onClick={prevImage} className={`${style.carousel_button} ${style.prev}`}>❮</button>
                <div
                    className={style.carousel_image}
                    role="img"
                    aria-label={Images[currentIndex].Alt}
                    style={{ backgroundImage: `url(${Images[currentIndex].ImgPath})` }}
                />
                <button onClick={nextImage} className={`${style.carousel_button} ${style.next}`}>❯</button>
                <div className={style.dots}>
                    {Images.map((_, index) => (
                        <span
                            key={index}
                            className={`${style.dot} ${index === currentIndex ? style.active : ''}`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export function CarouselFull({ Images }: { Images: CarouselProps["Images"] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % Images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? Images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className={style.carousel_full}>
            <button onClick={prevImage} className={`${style.carousel_button} ${style.prev}`}>❮</button>
            <div
                className={style.carousel_full_image}
                role="img"
                aria-label={Images[currentIndex].Alt}
                style={{ backgroundImage: `url(${Images[currentIndex].ImgPath})` }}
            >
                <div className={style.carousel_full_banner}>
                    <h3>{Images[currentIndex].Title}</h3>
                    <div>{Images[currentIndex].Description}</div>
                </div>
            </div>
            <button onClick={nextImage} className={`${style.carousel_button} ${style.next}`}>❯</button>
            <div className={style.dots}>
                {Images.map((_, index) => (
                    <span
                        key={index}
                        className={`${style.dot} ${index === currentIndex ? style.active : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
}