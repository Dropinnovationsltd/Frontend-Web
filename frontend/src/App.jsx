
import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
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
import Navbar from './components/Navbar'

const App = () => {
 
  return (
    <div className='font-roboto'>
      <Router>
      <Header /> 
        <div className='max-w-screen flex'>
        <div className='w-1/5 hidden md:block'>
        <Navbar />
        </div >
           <div className='w-4/5'>
                 
            <main className="h-screen font-roboto md:px-20">
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
        </div>
        </Router>
        <div className="">
            <Footer />
         </div>
      </div>
  )
}

export default App
