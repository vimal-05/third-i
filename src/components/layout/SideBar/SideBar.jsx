import React from "react";
import styles from './SideBar.module.css';
import {ProgressBar} from '../../widgets/ProgressBar/ProgressBar'
export const SideBar=function(){

    return(
        <div className={styles.SideBar}>
            <div className={styles.thirdILogo}>
                <span class="material-symbols-outlined" style={{color:"rgb(124, 58, 237)", fontVariationSettings:`"opsz" 46`}}>
                    masked_transitions
                </span>
                <span><h3>third i</h3></span>
            </div>

            <div className={styles.postAndAnalysis}>
                <div className={styles.instaPost}></div>
                <div className={styles.analysis}>
                    <ProgressBar value="7" total="10" name="Visual Analysis" emptyColor="cornflowerblue" loadedColor="blue"></ProgressBar>
                    <ProgressBar value="6" total="10" name="Textual Analysis" emptyColor="#d7bbf9" loadedColor="rgb(124, 58, 237)"></ProgressBar>
                    <ProgressBar value="8" total="10" name="Brand Analysis" emptyColor="rgb(132, 216, 249)" loadedColor="rgb(43, 191, 249)"></ProgressBar>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <div className={styles.tryAnother}>
                <span class="material-symbols-outlined" style={{color:"rgb(124, 58, 237)", fontVariationSettings:`"FILL" 1`}}>
                    moon_stars
                </span>
                <span>
                    &nbsp; Try Another Ad
                </span>
            </div>

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