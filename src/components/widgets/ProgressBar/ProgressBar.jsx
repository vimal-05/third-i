import React from 'react';
import { useEffect,useState } from 'react';
import styles from './ProgressBar.module.css' 

export const ProgressBar=function({loadedColor,emptyColor,value,total,name}){
    let [progress,setProgress] = useState(0);
    let width = value*100/total;
    

    useEffect(()=>{
        // requestAnimationFrame(loadProgress);
        setProgress(width);
    },[width,progress]);

    return (    
        <div className={styles.ProgressBar}>
            <div className={styles.nameAndValue}>
                <div className={styles.name}>{name}</div>
                <div className={styles.value}>{`${value}/${total}`}</div>
            </div>
            <div className={styles.progressEmpty} style={{backgroundColor:emptyColor}}>
                <div className={styles.progress} style={{width:`${progress}%`,backgroundColor:loadedColor,transition:"width 1.5s ease-in-out"}}></div>
            </div>
        </div>
    )
} 