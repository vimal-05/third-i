import React from 'react';
import styles from './MainHeader.module.css';

export const MainHeader=function(){
    return (
        <div className={styles.mainHeader}>
            <div className={styles.mainHeaderTitle}>
                <h3>AI Ad Analyser</h3>
            </div>
            <div className={styles.shareOptionAndCredit}>
                <div>
                    <div className={styles.shareOption}>                        
                        <span class="material-symbols-outlined" style={{color:"rgb(124, 58, 237)",fontVariationSettings:`"FILL" 1, "wght" 600, "GRAD" 0,"opsz" 20`}}>
                            share
                        </span>
                        <span>&nbsp;Share</span>
                    </div>
                </div>
                <div className={styles.creditScore}>
                    <div>
                        Credits
                    </div>
                    <div>
                        <span class="material-symbols-outlined" style={{color:"rgb(124, 58, 237)"}}>
                            stars
                        </span>
                    </div>
                    <div>
                        5/5
                    </div>
                </div>
            </div>
        </div>
    )
}