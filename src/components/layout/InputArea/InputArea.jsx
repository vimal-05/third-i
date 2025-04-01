import React, {useState} from 'react';
import styles from './InputArea.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';



export const InputArea = function({getAnalysis}){
    let [inputValue,setInputValue]= useState('');
    // let inputValue;
    function handleInputValue(e){
        e.preventDefault();
        getAnalysis(inputValue);
        setInputValue('');
    }
    return(
        <div className={styles.inputArea}>
            <form onSubmit={handleInputValue} className={styles.inputForm}>
                <div class="form-group" className={styles.inputForm}>
                    {/* <label for="inputUrl">Enter Image Url</label> */}
                    <div class="input-group">
                        <input type="url" class="form-control input-group-prepend" id="inputUrl" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} placeholder="Enter image Url"/>
                        <button type="submit" class="btn" style={{backgroundColor:"rgb(124, 58, 237) ", color:"white"}}>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
