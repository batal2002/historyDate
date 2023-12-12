import React, {FC, useContext, useEffect, useLayoutEffect, useRef, useState} from 'react';
import s from './style.module.scss'
import Dot from "../Dot";
import {ArticlesContext, CurrentIndexContext} from "../App";
import {gsap} from "gsap";

const Circle: FC = () => {
    const [coordinates, setCoordinates] = useState<number[][]>([])
    const [rotationFullDeg, setRotationFullDeg] = useState<number>(0)
    const articlesData = useContext(ArticlesContext)
    const {currentIndex} = useContext(CurrentIndexContext)
    const circle = useRef<HTMLDivElement>(null)
    let numberOfArticle = articlesData.length; // количество точек

    useEffect(() => {
        if (circle.current && articlesData.length > 0 && circle.current.offsetWidth) {

            let r = circle.current.offsetWidth / 2; // радиус

            let x: number, y: number;
            const arr: number[][] = []
            for (let i = Math.PI * 2; i > 0; i -= Math.PI * 2 / numberOfArticle) {
                x = r + r * Math.sin(i - Math.PI / 0.857);
                y = r + r * Math.cos(i - Math.PI / 0.857);
                arr.push([x, y])
            }
            setCoordinates(arr)
        }
    }, [articlesData, circle])

    useEffect(() => {
        if (numberOfArticle > 0) {
            setRotationFullDeg((360 / numberOfArticle) * (currentIndex))
        }

    }, [currentIndex, numberOfArticle])

    useLayoutEffect(() => {
        if (circle.current) {
            gsap.to(circle.current, {
                rotation: -rotationFullDeg
            })
        }
    }, [rotationFullDeg])

    return (
        <div className={s.circle} ref={circle}>
            {coordinates.length !== 0 && articlesData.map((item, index) =>
                <Dot key={item.topic} item={item} index={index} coordinates={coordinates[index]}
                     rotationDeg={rotationFullDeg}/>)}
        </div>
    );
};

export default Circle;