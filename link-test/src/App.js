
import {BrowserRouter, Routes,Route,Link,useNavigate} from 'react-router-dom';
import {useState} from 'react'

function Home(){
  return(
    <h1>Home</h1>
  )
}

function MyPage(){
  return(
    <h1>MyPage</h1>
  )
}

function Dashboard(){
  return(
    <h1>Dashboard</h1>
  )
}

function Real(){
  return(
    <h1>진짜 페이지</h1>
  )
}

function Fake(){
  return(
    <h1>가짜뉴스</h1>
  )
}

function Anotherpage(){
  let navigate = useNavigate();
  const[isOn,setIsOn] = useState(true)

  if(isOn){
    navigate('/real')
  }else{
    navigate('/fake')
  }

  return(
    <button onClick={()=>setIsOn(!isOn)}> 페이지 바꾸기</button>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/mypage'>
                Mypage
              </Link>
            </li>
            <li>
              <Link to='/dashboard'>
                dashboard
              </Link>
            </li>
            <li>
              <Link to='/anotherpage'>
                다른 페이지 이동
              </Link>
            </li>
          </ul>
        </nav>
        <hr/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/mypage' element={<MyPage/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/anotherpage' element={<Anotherpage/>}/>
          <Route path='/real' element={<Real/>}/>
          <Route path='/fake' element={<Fake/>}/>
        </Routes>
      </div>
    </BrowserRouter>
      
  );
}

export default App;
