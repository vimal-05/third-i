import React from 'react'
import styles from './RatingCard.module.css'
import { CurvedBar } from '../CurvedBar/CurvedBar.jsx';

export const RatingCard = function({cardData}){
    let loadedColor;
    let emptyColor;
    if(cardData.score>3&&cardData.score<7){
        loadedColor="yellow";
        emptyColor="rgb(243, 237, 153)";
    }
    else if(cardData.score>=7){
        loadedColor="green";
        emptyColor="rgb(181, 241, 188)";
    }
    else{
        loadedColor="orange";
        emptyColor="rgb(241, 206, 181)";
    }
    return (
        <div className={styles.RatingCard}>
            <h3 style={{margin:"20px",color:"rgb(124, 58, 237)"}}>{cardData.heading}</h3>
            <div className={styles.cardVisuals}>
                <CurvedBar radius="35" total="10" loadedColor={loadedColor} emptyColor={emptyColor} score={cardData.score}></CurvedBar>
                <div className={styles.insideCurvedBar} >
                    <div className={styles.outerCircle} style={{backgroundColor:emptyColor}}>
                        <div className={styles.innerCircle}>
                            <span class="material-symbols-outlined" style={{color:"rgb(124, 58, 237)",fontVariationSettings:`"FILL" 1, "wght" 400, "GRAD" 0`}}>
                                {cardData.icon}
                            </span>
                        </div>
                    </div>
                </div>
                <div className={styles.cardScore} style={{color:loadedColor}}> {cardData.score} </div>
            </div>
            <div className={styles.cardText}>
                <p>{cardData.text}</p>
            </div>
        </div>
    )
}