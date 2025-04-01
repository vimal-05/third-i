import React, { useCallback } from "react";
import { useEffect,useState} from "react";
import { PerformanceGauge } from "../../widgets/PerformanceGauge/PerformanceGauge.jsx";
import { CurvedBar } from "../../widgets/CurvedBar/CurvedBar.jsx";
import {RatingCard} from '../../widgets/RatingCard/RatingCard.jsx'
import styles from './MainContent.module.css';

export const MainContent= function({performanceData}){
    let cardData={
        score:9,
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        heading:"Human visibility",
        icon:"person"
    };
    let [performancePercent,setPerformancePercent] = useState(0);
        let increasePercent=useCallback(()=>{

                if(performancePercent<performanceData.overall_score){
                    setPerformancePercent(performancePercent+1);
                    requestAnimationFrame(increasePercent);
                }
                else if(performancePercent>performanceData.overall_score){
                    setPerformancePercent(performancePercent-1);
                    requestAnimationFrame(increasePercent);
                }
        },[performanceData.overall_score,performancePercent]);

    useEffect(()=>{
        requestAnimationFrame(increasePercent);
    },[performancePercent,performanceData.overall_score,increasePercent]);

    return (

        <div className={styles.MainContent}>
            <div className={styles.progressOverview}>
                <span style={{color:"rgb(242, 215, 12)"}}><h2>Great Progress&nbsp;</h2></span>
                <span><h2> — Optimise for Peak Performance</h2></span>
            </div>
            <div className={styles.overallScore}>
                <CurvedBar className={styles.performanceCurvedPath} loadedColor="rgb(124, 58, 237)" emptyColor="#d7bbf9" score={performanceData.overall_score} total="100" radius="130"></CurvedBar>
                <div className={styles.performanceGaugeCovering}>
                    <PerformanceGauge score={performanceData.overall_score}></PerformanceGauge>
                </div>
                <div className={styles.performancePercentage}>  
                    <h1>{performancePercent}%</h1>
                </div>
            </div>
            <div className={styles.progressText}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>

            <div className="visualAnalysis" style={{display:"flex", flexDirection:"column",alignItems:"center"}}>
                <div className="visualAnalysisHeader" style={{display:"flex", flexDirection:"row",alignItems:"center",justifyContent:"spacearound"}}>
                    <span class="material-symbols-outlined" style={{color:"rgb(124, 58, 237)"}}>
                        palette
                    </span>
                    <span>
                        <h3>Visual Analysis</h3>
                    </span>
                </div>

                <div className="visualAnlysisText">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>

                <div className={styles.visualAnalysisCard}>
                    <RatingCard cardData={cardData}></RatingCard>
                    <RatingCard cardData={cardData}></RatingCard>
                    <RatingCard cardData={cardData}></RatingCard>
                    <RatingCard cardData={cardData}></RatingCard>
                </div>

            </div>

            <div className={styles.talkToExpert}>
                <div>Transform your ads into high-performers! Chat with a specialist today and elevate your results.</div>
                <div>
                    <a href="https://thirdi.ai/" style={{display:"flex", textDecoration:"none", flexDirection:"row",alignItems:"center",justifyContent:"spacearound"}}>
                        <span>Talk to expert &nbsp; </span>
                        <span class="material-symbols-outlined">
                            open_in_new
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}