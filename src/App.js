import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Loading from './pages/Loading/Loading';
import Dashboard from './pages/Dashboard/Dashboard';
import Registration from './pages/Registration/Registration';
import Faq from './pages/Faq/Faq';
import Catalog from './pages/Production/Catalog';
import NotFound from './components/NotFound/NotFound';
import { useState,useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Services from './pages/Services/Services';
import Transports from './pages/Transports/Transports';
import ProductionDash from './pages/Production/ProductionDash';
import Warehouses from './pages/Warehouses/Warehouses';
import Tech from './pages/Tech/Tech';
import Profile from './pages/Profile/Profile';
import Rating from './pages/Rating/Rating';
import Chat from './pages/Chat/Chat';
import Support from './pages/Support/Support';
import Preview from './components/Preview/preview';
import ProductionOnce from './pages/ProductionOnce/ProductionOnce';
import UserPage from './pages/User/user';
import Add from './pages/Add/add.jsx';
import Strahovka from './pages/Strahovka/Strahovka';
import Reklama from './components/Reklama/Reklama';
import Deal from './pages/Deal/Deal';
import MyTransport from './pages/Mytransport/MyTransport';
import FirstSlide from './pages/Add/module/firstSlide';
import Adverismant from './pages/Add/module/Adverismant';

const App = () => {
  const [load,setLoad] = useState(true)
  const localStor = JSON.parse(localStorage.getItem("firstTime"))
  useEffect(() => {
    const changeLoad = () => setLoad(false)
    setTimeout(changeLoad, 1500);
  }, [])
  if(load){
    return(<Loading/>)
  }else{
    return (
      <div>
        <Router>
          <Header/>
            <Routes> 
              {localStor ? 
               <Route path='/' element={<Dashboard/>} />
               : 
               <Route path='/' element={<Preview/>} />}
              <Route path="/faq" element={<Faq/>}/>
              <Route path="/chat" element={<Chat/>}/>
              <Route path="/unit-list-map/*" element={<Warehouses/>}/>
              <Route path="/unit/*" element={<ProductionOnce/>}/>
              <Route path="/produkcia" element={<Catalog/>}/>
              <Route path="/tehnika" element={<Tech/>}/>
              <Route path="/profile" element={<Profile />}/>
              <Route path="/produkcia/list" element={<ProductionDash/>}/>
              <Route path="/unit-list/*" element={<Transports/>}/>
              <Route path="/lang-and-support" element={<Support/>}/>
              <Route path="/poslugi" element={<Services/>}/>
              <Route path='/sign-in' element={<Registration/>} />
              <Route path='/rating' element={<Rating/>} />
              <Route path='*' element={<NotFound/>} />
              <Route path="/produkcia/list/productiononce" element={<ProductionOnce/>}/>
              <Route path="/user" element={<UserPage/>}/>
              <Route path="/add-advertisement" element={<Add/>}/>
              <Route path="/advertisment" element={<FirstSlide/>}/>
              <Route path="/choosen-myPost/*" element={<Adverismant/>}/>
              <Route path="/strahovka" element={<Strahovka/>}/>
              <Route path="/rekalama" element={<Reklama/>}/>
              <Route path='/me-deal' element={<Deal/>}/>
              <Route path='/my-transport' element={<MyTransport/>}/>
            </Routes>
        </Router>
        <Footer/>
      </div>
    );
  }
}

export default App;
