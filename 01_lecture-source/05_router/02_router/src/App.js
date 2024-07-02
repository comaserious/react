
import Layout from './layouts/Layout';
import Main from './pages/Main';
import Mypage from './pages/Mypage';
import Login from './pages/Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path='main' element={<Main/>}/>
          <Route path='mypage' element={<Mypage/>}/>
          <Route path='Login' element={<Login/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
