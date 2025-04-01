// import logo from './logo.svg';
import './App.css';
import {MainHeader} from './components/layout/MainHeader/MainHeader.jsx'
import { InputArea } from './components/layout/InputArea/InputArea.jsx';
import {MainContent} from './components/layout/MainContent/MainContent.jsx'
import {SideBar} from './components/layout/SideBar/SideBar.jsx'
import axios from 'axios';
import React,{useState} from 'react';

function App() {
  const [data, setData] = useState({
    "overall_score": 0,
    "visual_analysis": 0,
    "textual_analysis": 0,
    "brand_analysis": 0
    });
  const[dataRecieved,setDataRecieved]=useState(false);
  const[imageUrl,setImageUrl]=useState('');
  const[loading,setLoading]=useState(false);

  async function getAnalysis(value){
    try{
      setLoading(true);
      let res = await axios.post('http://127.0.0.1:8000/analyze-image/',{
        data:value
      })
      let tempData = res.data;
      tempData=JSON.parse(tempData);      
      setData(tempData[0]);
      setLoading(false);
      setDataRecieved(true);
      setImageUrl(value);

    }catch (error) {
      console.error('Error during POST request', error);
    }
  }

  function tryAnother(){
      setData({
    "overall_score": 0,
    "visual_analysis": 0,
    "textual_analysis": 0,
    "brand_analysis": 0
    });
      setDataRecieved(false);
      setImageUrl('');
  }

  return (
    <div className="App">
      
      <aside className='sidebar'>
        <SideBar data={data} imageUrl={imageUrl} tryAnother={tryAnother} dataRecieved={dataRecieved}></SideBar>
      </aside>

      <main className='main-content'>
      <MainHeader></MainHeader>
        {
          loading?(<h4 style={{color:"rgb(124, 58, 237)"}}>Please wait we are analysing your ad...</h4>):(dataRecieved?(<MainContent performanceData={data}/>):(<InputArea getAnalysis={getAnalysis}/>)
        )
        }
      </main>

    </div>
  );
}

export default App;
