import { BrowserRouter,Routes, Route} from 'react-router-dom'


import Home from './pages/Home';
import Registration from './pages/Registration';
import Login from './pages/Login'
import Post from './pages/Post'
import Notification from './pages/Notification'
import ProfileBusiness from './pages/ProfileBusiness';
import ProfileCustomer from './pages/ProfileCustomer';

function App() {
  return (
    <BrowserRouter>
     <Routes>
       <Route path="/Home"  element={<Home/>}/>
       <Route path="/" element={<Login/>} exact/>
       <Route path="/Registration" element={<Registration/>}/>
       <Route path="/Post" element={<Post/>}/>
       <Route path="/profileBusiness" element={<ProfileBusiness/>}/>
       <Route path="/Profile" element={<ProfileCustomer/>}/>
       <Route path="/Notification" element={<Notification/>}/>
     </Routes>
    </BrowserRouter>
       
  );
}

export default App;