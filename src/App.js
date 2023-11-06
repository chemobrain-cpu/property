import React, { useEffect, Suspense } from "react"
import { Route, Routes } from 'react-router-dom'
import './App.css'
//importing redux action to log user in initially
//import { checkIfUserIsLoggedIn, checkIfAdminIsLoggedIn,getTheme} from "./store/action/userAppStorage";
import FallBackComponent from './components/Fallback'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";







const Home = React.lazy(() => import('./screens/Home/Home'))



function App() {
  return (
    <div className = "App">
      <Suspense fallback={<FallBackComponent />} >
        <Routes>
          {/* Admin Routes*/}
          <Route path='/' element={<Home />} />
        
          {/*general screens*/}
          <Route path='/' element={<Home />} />
       

        </Routes>

      </Suspense>
    </div>
  );
}

export default App;
