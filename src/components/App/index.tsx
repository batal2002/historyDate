import React, {createContext, useEffect, useState} from 'react';
import s from './style.module.scss'
import {Article} from "../../types/articles";
import Slider from "../Slider";
import TopicsPagination from "../TopicsPagination";
import Circle from "../Circle";

import gsap from "gsap";
import Title from "../Title";
import Date from "../Date";


interface IndexContext {
    currentIndex: number
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>> | null
}

export const CurrentIndexContext = createContext<IndexContext>({currentIndex: 0, setCurrentIndex: null})
export const ArticlesContext = createContext<Article[]>([])
export const WindowWidthContext = createContext<number>(window.innerWidth)

function App() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [articlesData, setArticlesData] = useState<Article[]>([])
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)

    gsap.defaults({
        duration: 0.8,
    });

    useEffect(() => {
        setArticlesData([
            {
                topic: 'Кино',
                data: [
                    {
                        date: 1987,
                        text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
                    },
                    {
                        date: 1988,
                        text: '13 сентября — часsтное солнечное затмение, видимое в Южной Африке и части Антарктиды'
                    },
                    {
                        date: 1989,
                        text: '13 сентября — частное солнечное затменdsие, видимое в Южной Африке и части Антарктиды'
                    },
                    {
                        date: 1990,
                        text: '13 сентября — частное соaлнечное затмение, видимое в Южной Африке и части Антарктиды'
                    },
                    {
                        date: 1991,
                        text: '13 сентября — частное сaолнечное затмение, видимое в Южной Африке и части Антарктиды'
                    },
                ]
            },
            {
                topic: 'Литература',
                data: [
                    {
                        date: 1992,
                        text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
                    },
                    {
                        date: 1995,
                        text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
                    },
                    {
                        date: 1997,
                        text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
                    },
                ]
            },
            {
                topic: 'Театр',
                data: [
                    {
                        date: 1999,
                        text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
                    },
                    {
                        date: 2000,
                        text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
                    },
                    {
                        date: 2001,
                        text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
                    },
                    {
                        date: 2002,
                        text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
                    },
                    {
                        date: 2003,
                        text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
                    },
                    {
                        date: 2004,
                        text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
                    },
                ]
            },
            {
                topic: 'Театр2',
                data: [
                    {
                        date: 1990,
                        text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
                    },
                    {
                        date: 1991,
                        text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
                    },
                    {
                        date: 1992,
                        text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
                    },
                    {
                        date: 1993,
                        text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
                    },
                    {
                        date: 1994,
                        text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
                    },
                    {
                        date: 1995,
                        text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
                    },
                    {
                        date: 1997,
                        text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
                    },
                    {
                        date: 2007,
                        text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
                    },
                ]
            },
            {
                topic: 'Театр3',
                data: [
                    {
                        date: 1992,
                        text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
                    },
                    {
                        date: 1996,
                        text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
                    },
                    {
                        date: 1999,
                        text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
                    },
                    {
                        date: 2002,
                        text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
                    },
                ]
            },
            {
                topic: 'Наука',
                data: [
                    {
                        date: 2015,
                        text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
                    },
                    {
                        date: 2016,
                        text: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11'
                    },
                    {
                        date: 2017,
                        text: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi'
                    },
                    {
                        date: 2020,
                        text: 'text 4'
                    },
                    {
                        date: 2022,
                        text: 'text 5'
                    },
                ]
            },
        ])
    }, [])

    const handleSubscribe = () => {
        setWindowWidth(window.innerWidth)
    }

    const onSubscribe = () => {
        window.addEventListener('resize', handleSubscribe)
    }

    const offSubscribe = () =>
        window.removeEventListener('resize', handleSubscribe)


    React.useEffect(() => {
        onSubscribe()

        return () => offSubscribe()
    }, [])

    return (
        <WindowWidthContext.Provider value={windowWidth}>
            <ArticlesContext.Provider value={articlesData}>
                <CurrentIndexContext.Provider value={{currentIndex, setCurrentIndex}}>
                    <div className={s.container}>
                        {windowWidth > 768 && <div className={s.centerStroke}></div>}
                        <div className={s.wrapper}>
                            <Title/>
                            <Date/>
                            {windowWidth > 768 && <Circle/>}
                        </div>

                        <div className={s.sliderWrapper}>
                            <TopicsPagination/>

                            {articlesData.length > 0 && <Slider/>}
                        </div>
                    </div>
                </CurrentIndexContext.Provider>
            </ArticlesContext.Provider>
        </WindowWidthContext.Provider>
    );
}

export default App;
