import React, {FC, useContext, useEffect, useRef, useState} from 'react';
import s from "./style.module.scss";
import {ArticlesContext, CurrentIndexContext} from "../App";
import {gsap} from "gsap";

const Date: FC = () => {
    const articlesData = useContext(ArticlesContext)
    const {currentIndex} = useContext(CurrentIndexContext)
    const [currentDate, setCurrentDate] = useState<number[]>([])
    const [oldDate, setOldDate] = useState<number[]>([])
    const left = useRef(null)
    const right = useRef(null)

    useEffect(() => {
        if (articlesData.length > 0) {
            setCurrentDate(prevState => {
                setOldDate(prevState)
                return [articlesData[currentIndex].data[0].date, articlesData[currentIndex].data[articlesData[currentIndex].data.length - 1].date]
            })
        }
    }, [articlesData, currentIndex])

    useEffect(() => {
        if (oldDate.length > 0) {
            gsap.from(left.current, {
                innerText: oldDate[0],
                snap: {
                    innerText: 1
                },
            });
            gsap.from(right.current, {
                innerText: oldDate[1],
                snap: {
                    innerText: 1
                },
            });
        }

    }, [oldDate])


    return (
        <div className={s.wrapper}>
            <span className={s.left} ref={left}>{currentDate[0]}</span>
            <span className={s.right} ref={right}>{currentDate[1]}</span>
        </div>
    );
};

export default Date;