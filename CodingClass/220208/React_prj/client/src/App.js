import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './container/home';
import Basic01 from './container/basic/Basic01'
import Basic02 from './container/basic/Basic02'
import Basic03 from './container/basic/Basic03'
import Basic04 from './container/basic/Basic04'
import {GiHamburgerMenu} from 'react-icons/gi'


const OnMenuClick = () => {
  let navDisplay = document.getElementById('nav').style.display;

  if(navDisplay !== 'none')
  {
    document.getElementById('nav').style.display = 'none';
    console.log("aa");
  }
  else
  {
    document.getElementById('nav').style.display = 'inline';
    console.log("bb");
  }
}
/*
const dataType = () => {
  let value;
  console.log('value : ' + value + ',   ' + typeof(value));

  value = 1;
  console.log('value : ' + value + ',   ' + typeof(value));

  value = 'asd';
  console.log('value : ' + value + ',   ' + typeof(value));

  value = "123";
  console.log('value : ' + value + ',   ' + typeof(value));

  value = true;
  console.log('value : ' + value + ',   ' + typeof(value));
  value = false;
  console.log('value : ' + value + ',   ' + typeof(value));
  value = null; // undefined / null
  console.log('value : ' + value + ',   ' + typeof(value));
  value = {};
  console.log('value : ' + value + ',   ' + typeof(value));
  value = [];
  console.log('value : ' + value + ',   ' + typeof(value));
  value = [1,2,3];
  console.log('value : ' + value + ',   ' + typeof(value));
  console.log('value : ' + JSON.stringify(value) + ',   ' + typeof(value));
  value = [
          {name : '우형석', age : '20'},
          {name : '이효정', age : '17'}
      ];
  console.log('value : ' + value + ',   ' + typeof(value));
  console.log('value : ' + JSON.stringify(value) + ',   ' + typeof(value));

  value.map(data => {
      console.log('data : ' + JSON.stringify(data));
  })
}
*/
function App() {
  return (
    <div className = "App">
        {/* <div>{dataType()}</div> */}
        <header>
            헤더
            <div class="menu_icon" >
              <GiHamburgerMenu onClick={OnMenuClick}/>
            </div>
        </header>
        <div class="content">
            <nav class="leftside" id="nav"> 왼쪽 사이드
              <li>
                <a href='/Home'> Home</a>
              </li>
              <li>
                <a href='/Basic01'> Basic01 </a>
              </li>
              <li>
                <a href='/basic02'> Basic02</a>
              </li>
              <li>
                <a href='/basic03'>Basic03</a>
              </li>
              <li>
                <a href='/basic04'>Basic04</a>
              </li>
          
            </nav>
            <main class="main">  

            <BrowserRouter>
                <Routes>
                  <Route path="/home" element={<Home/>} />
                  <Route path="/Basic01" element={<Basic01/>}/>
                  <Route path="/Basic02" element={<Basic02/>}/>
                  <Route path="/Basic03" element={<Basic03/>}/>
                  <Route path="/Basic04" element={<Basic04/>}/>
                </Routes>

                
            </BrowserRouter>

            </main>
            
            <aside> 오른쪽 사이드 </aside>
        </div>
        <footer>
            푸터
        </footer>
    </div>
  );
}

export default App;
