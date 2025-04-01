import React from "react";
import styles from './SideBar.module.css';
import { ImageSection } from "../ImageSection/ImageSection";

export const SideBar=function({data,dataRecieved,imageUrl,tryAnother}){
    
    function clickedTryAnother(){
        tryAnother();
    }

    return(
        <div className={styles.SideBar}>
            <div className={styles.thirdILogo}>
                <span class="material-symbols-outlined" style={{color:"rgb(124, 58, 237)", fontVariationSettings:`"opsz" 46`}}>
                    masked_transitions
                </span>
                <span><h3>third i</h3></span>
            </div>
            {
                dataRecieved&&<ImageSection data={data} imageUrl={imageUrl}></ImageSection>
            }
                
            {dataRecieved&&<div className={styles.tryAnother} onClick={clickedTryAnother}>
                <span class="material-symbols-outlined" style={{color:"rgb(124, 58, 237)", fontVariationSettings:`"FILL" 1`}}>
                    moon_stars
                </span>
                <span>
                    &nbsp; Try Another Ad
                </span>
            </div>}

            <div className={styles.signUp}>
                <div className={styles.signUpTakeControl}>
                    <div>Take Control of your ad campaign</div>
                    <div><span>with </span><span style={{color:"rgb(124, 58, 237)"}}>Thirdi</span></div>
                </div>
                <div className={styles.logoAndSignUp}>
                    <span class="material-symbols-outlined" style={{color:"rgb(124, 58, 237)"}}>
                        controller_gen
                    </span>
                        <span>&nbsp; Sign up for free</span>
                </div>
            </div>

        </div>
        
    )
}