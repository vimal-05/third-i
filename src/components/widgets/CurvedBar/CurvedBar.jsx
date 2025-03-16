import React from 'react';
import { useEffect,useState } from 'react';
import styles from './CurvedBar.module.css';

export const CurvedBar = function({score,total,radius,loadedColor,emptyColor}){
    let [progress,setProgress]= useState(0);
    
    useEffect(()=>{
        setProgress(score);
    },[score,progress]);
    return(
        <div className={styles.CurvedBar}>
            <svg className={styles.curvedPathSvg } viewBox={`0 0 ${radius*3} ${radius*3}`} style={{width:radius*3, height:radius*3, display:'flex' , flexDirection:'row' , justifyContent:'center' ,position:'relative'}}>
                <path d={`M ${radius} ${radius*(3+Math.sqrt(3))/2} A ${radius} ${radius} 0 1 1 ${2*radius} ${radius*(3+Math.sqrt(3))/2} `} stroke={emptyColor} stroke-width={radius/4} fill="none" stroke-linecap="round" />
                <path d={`M ${radius} ${radius*(3+Math.sqrt(3))/2} A ${radius} ${radius} 0 1 1 ${2*radius} ${radius*(3+Math.sqrt(3))/2}`} stroke={loadedColor} stroke-width={radius/4} fill="none" stroke-linecap="round"
                 stroke-dasharray={`${5*3.14*progress*radius/(3*total)} 5000`} stroke-dashoffset="0" style={{transition:"stroke-dasharray 1.5s ease-in-out"}}/>
            </svg>
        </div>
    )
}