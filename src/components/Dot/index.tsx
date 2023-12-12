import React, {FC, useContext, useEffect, useLayoutEffect, useRef} from 'react';
import s from "./style.module.scss";
import gsap from "gsap";
import {CurrentIndexContext} from "../App";
import {Article} from "../../types/articles";

interface Props {
    item: Article
    index: number
    coordinates: number[]
    rotationDeg: number
}

const Dot: FC<Props> = ({item, index, coordinates, rotationDeg}) => {
    const button = useRef(null)
    const dot = useRef(null)
    const number = useRef(null)
    const title = useRef(null)
    const {currentIndex, setCurrentIndex} = useContext(CurrentIndexContext)

    const openDot = () => {
        gsap.to(dot.current, {
            duration: 0.4,
            width: 55,
            height: 55,
            background: '#F4F5F9',
            border: '1px solid rgba(48, 62, 88, 0.5)',
        })
        gsap.to(number.current, {
            duration: 0.4,
            color: '#42567A'
        })

    }
    const closeDot = () => {
        gsap.to(dot.current, {
            duration: 0.4,
            width: 6,
            height: 6,
            background: '#42567A',
            border: 0,
            color: 'transparent'
        })
        gsap.to(number.current, {
            duration: 0.4,
            color: 'transparent',
        })

    }
    const onMouseEnter = () => {
        openDot()
    }
    const onMouseLeave = () => {
        if (currentIndex !== index) {
            closeDot()
        }
    }
    useLayoutEffect(() => {
        if (button.current) {
            gsap.to(button.current, {
                rotation: rotationDeg
            })
        }
    }, [rotationDeg])

    useEffect(() => {
        if (currentIndex === index) {
            openDot()
            gsap.to(title.current, {
                opacity: 1
            })
        } else {
            closeDot()
            gsap.to(title.current, {
                opacity: 0
            })
        }
    }, [currentIndex])

    const onClick = (index: number) => {
        setCurrentIndex && setCurrentIndex(index)
    }


    return (
        <button key={item.topic} className={s.button} ref={button} onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave} onClick={() => onClick(index)}
                style={{transform: `translate(calc(${coordinates[0]}px - 50%), calc(${coordinates[1]}px - 50%))`}}>
            <div className={s.dot} ref={dot}></div>
            <span className={s.number} ref={number}>
                    {index + 1}
                </span>
            <span ref={title} className={s.title}>{item.topic}</span>
        </button>
    );
};

export default Dot;