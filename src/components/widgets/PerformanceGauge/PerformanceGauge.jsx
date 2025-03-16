import React from "react";
import { useEffect,useState } from "react";
import styles from './PerformanceGauge.module.css'

export const PerformanceGauge = function({score}){
    let n=120;
    // let rotationAngle = -150;
    let [rotationAngle, setRotationAngle] = useState(-150);
    

    useEffect(() => {
        setRotationAngle(-150+(score*3));
      }, [score]);
    return(
        <div className={styles.PerformanceGauge}>
            <div>
                <div className={styles.colorCircle}>
                    {
                        [...Array(n)].map((_,i)=>(
                             <div className={styles.guageScale} style={{transform:`rotate(${(i+1)*3}deg)`}}></div>
                        ))
                    }
                    <div className={styles.coveringCircle}></div>
                    <div className={styles.centrePoint}></div>
                    <div className={styles.needle} style={{transform:`rotate(${rotationAngle}deg)`,transition:"transform 1.5s ease-out"}}></div>
                    <div className={styles.marking0}>0</div>
                    <div className={styles.marking20}>20</div>
                    <div className={styles.marking40}>40</div>
                    <div className={styles.marking60}>60</div>
                    <div className={styles.marking80}>80</div>
                    <div className={styles.marking100}>100</div>
                </div>
            </div>
        </div>
    );
};