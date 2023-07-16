import { useSelector } from 'react-redux';
import './assets/css/App.css';
import SideMenu from './components/SideMenu';
import TopBar from './components/TopBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import Orders from './components/Orders';
import Queries from './components/Queries';
import Users from './components/Users';
function App() {
  const sidebar = useSelector((state)=>state.showSidemenu)
  return (
    <>
      <BrowserRouter>
        <div className="panel-wrapper">
          <div className={`${sidebar ? "left-wrapper active-sidebar" : "left-wrapper"}`}>
            <SideMenu/>
          </div>
          <div className={`${sidebar ? "right-wrapper active-right-section" : "right-wrapper"}`}>
            <TopBar/>
            <Routes>
              <Route path='/admin/' element={<Dashboard/>}/>
              <Route path='/admin/products' element={<Products/>}/>
              <Route path='/admin/orders' element={<Orders/>}/>
              <Route path='/admin/queries' element={<Queries/>}/>
              <Route path='/admin/users' element={<Users/>}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;
