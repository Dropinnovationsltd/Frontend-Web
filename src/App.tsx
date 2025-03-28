import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Users from './pages/Users'
import Drivers from './pages/Drivers'
import Vehicle from './pages/Vehicle'
import CarRent from './pages/CarRent/CarRent'
import Booking from './pages/Booking'
import WithdrawalRequest from './pages/WithdrawalRequest'
import Cms from './pages/Cms'
import Header from "./components/Header";
import Footer from './components/Footer'
import Settings from './pages/Settings'
import Make from './pages/Vehicle/Make'
import Model from './pages/Vehicle/Model'
import VehicleType from './pages/Vehicle/VehicleType'
import Color from './pages/Vehicle/Color'
import CarRentVehicleType from './pages/CarRent/CarRentVehicleType'
import Feature from './pages/CarRent/Feature'


const App = () => {
  return(

  <div className='font-roboto'>
  <Router>
       <Header />
     <div className='flex'>
        <main className="flex-grow md:ml-[65vw] md:max-w-[300px] p-6">
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/drivers" element={<Drivers />} />
            <Route path="/vehicle" element={<Vehicle />} />
            <Route path="/make" element={<Make />} />
            <Route path="/model" element={<Model />} />
            <Route path="/vehicle-type" element={<VehicleType />} />
            <Route path="/color" element={<Color/>} />
            <Route path="/car-rent" element={<CarRent />} />
            <Route path="/feature" element={<Feature />} />
            <Route path="/car-vehicletype" element={<CarRentVehicleType />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/withdrawal-request" element={<WithdrawalRequest />} />
            <Route path="/cms" element={<Cms />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
          
        </main>
       
      </div>
    </Router>
    <div className="">
        <Footer />
     </div>
  </div>
  )
}

export default App;


