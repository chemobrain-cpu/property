import React, { useEffect, Suspense } from "react"
import { Route, Routes } from 'react-router-dom'
import './App.css'
//importing redux action to log user in initially
//import { checkIfUserIsLoggedIn, checkIfAdminIsLoggedIn,getTheme} from "./store/action/userAppStorage";
import FallBackComponent from './components/Fallback'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";







const Home = React.lazy(() => import('./screens/Home/Home'))

const Login = React.lazy(() => import('./screens/Auth/Login'))
const Signup = React.lazy(() => import('./screens/Auth/Signup'))



function App() {
  return (
    <div className = "App">
      <Suspense fallback={<FallBackComponent />} >
        <Routes>
          {/* General*/}
          <Route path='/' element={<Home />} />
        
          {/*auth screens*/}
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
       

        </Routes>

      </Suspense>
    </div>
  );
}

export default App;
