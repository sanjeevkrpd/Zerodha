import React from 'react'
import Watchlist from './Watchlist';
import {Routes , Route} from 'react-router-dom'
import Summary from './Summary';
import Orders from './Orders';
import Positions from './Positions';
import Funds from './Funds';
import App from './App'
const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <Watchlist/>
      <div className='content'>
        <Routes>
            <Route exact path='/' element={<Summary/>}/>
            <Route path='/orders' element={<Orders/>}/>
            <Route path='/holding' element={<Holding/>}/>
            <Route path='/positions' element={<Positions/>}/>
            <Route path='/funds' element={<Funds/>}/>
            <Route path='/apps' element={<App/>}/>

        </Routes>
      </div>
    </div>
  )
}

export default Dashboard
