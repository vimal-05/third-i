// import logo from './logo.svg';
import './App.css';
import {MainHeader} from './components/layout/MainHeader/MainHeader.jsx'
import {MainContent} from './components/layout/MainContent/MainContent.jsx'
import {SideBar} from './components/layout/SideBar/SideBar.jsx'
function App() {
  let data = {score:62};
  return (
    <div className="App">
      
      <aside className='sidebar'>
        <SideBar></SideBar>
      </aside>

      <main className='main-content'>
          <MainHeader></MainHeader>
          <MainContent performanceData={data}></MainContent>
      </main>

    </div>
  );
}

export default App;
