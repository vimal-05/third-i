import React from "react";
import styles from './ImageSection.module.css'
import {ProgressBar} from '../../widgets/ProgressBar/ProgressBar'

export const ImageSection=function({data,imageUrl}){
    return(
        <div className={styles.postAndAnalysis}>
            {/* <div className={styles.instaPost} style={{backgroundImage:`url("${imageUrl}")`}}>
                <div className={styles.imageInstaBorder}>
                    
                </div>
            </div> */}
            <div className={styles.instaBox}>
                <div className={styles.topFrame}>
                    <span className={styles.instaDpCircle}></span>
                    <span className={styles.instaAccountName}>&nbsp;Alandas</span>
                </div>
                <div className={styles.imageContainer}>
                    <div className={styles.instaPost} style={{backgroundImage:`url("${imageUrl}")`}}></div>
                </div>
                <div className={styles.bottomFrame}>
                    <span class="material-symbols-outlined" style={{fontVariationSettings:"'FILL' 1",color:"red"}}>
                        favorite
                    </span>
                    <span class="material-symbols-outlined">
                        mode_comment
                    </span>
                    <span class="material-symbols-outlined">
                        send
                    </span>
                    <span class="material-symbols-outlined">
                        more_vert
                    </span>
                </div>
            </div>
            <div className={styles.analysis}>
                <ProgressBar value={`${data.visual_analysis}`} total="10" name="Visual Analysis" emptyColor="cornflowerblue" loadedColor="blue"></ProgressBar>
                <ProgressBar value={`${data.textual_analysis}`} total="10" name="Textual Analysis" emptyColor="#d7bbf9" loadedColor="rgb(124, 58, 237)"></ProgressBar>
                <ProgressBar value={`${data.brand_analysis}`} total="10" name="Brand Analysis" emptyColor="rgb(132, 216, 249)" loadedColor="rgb(43, 191, 249)"></ProgressBar>
            </div>
        </div>
    )
}